// https://github.com/fat/zoom.js/tree/master

class Zoom {
  private _targetImage: HTMLImageElement;
  private _fullWidth: number;
  private _fullHeight: number;
  private _overlay: HTMLElement;

  private static _MAX_WIDTH = 2560;
  private static _MAX_HEIHGT = 4096;

  public static OFFSET = 80;
  private _targetImageWrap: HTMLDivElement;

  constructor(img: HTMLImageElement) {
    this._targetImage = img;
  }

  private _zoomOriginal() {
    this._targetImageWrap = document.createElement('div');
    this._targetImageWrap.className = 'zoom-img-wrap';

    this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage);
    this._targetImageWrap.appendChild(this._targetImage);

    $(this._targetImage)
      .addClass('zoom-img')
      .attr('data-action', 'zoom-out');

    this._overlay = document.createElement('div');
    this._overlay.className = 'zoom-overlay';

    document.body.appendChild(this._overlay);

    this._calculateZoom();
    this._triggerAnimation();
  }
  _calculateZoom() {
    this._targetImage.offsetWidth // repaint before animating

    var originalFullImageWidth  = this._fullWidth
    var originalFullImageHeight = this._fullHeight

    var scrollTop = $(window).scrollTop()

    var maxScaleFactor = originalFullImageWidth / this._targetImage.width

    var viewportHeight = ($(window).height() - Zoom.OFFSET)
    var viewportWidth  = ($(window).width() - Zoom.OFFSET)

    var imageAspectRatio    = originalFullImageWidth / originalFullImageHeight
    var viewportAspectRatio = viewportWidth / viewportHeight

    if (originalFullImageWidth < viewportWidth && originalFullImageHeight < viewportHeight) {
      this._imgScaleFactor = maxScaleFactor

    } else if (imageAspectRatio < viewportAspectRatio) {
      this._imgScaleFactor = (viewportHeight / originalFullImageHeight) * maxScaleFactor

    } else {
      this._imgScaleFactor = (viewportWidth / originalFullImageWidth) * maxScaleFactor
    }
  }
  _triggerAnimation() {
    this._targetImage.offsetWidth // repaint before animating

    var imageOffset = $(this._targetImage).offset()
    var scrollTop   = $(window).scrollTop()

    var viewportY = scrollTop + ($(window).height() / 2)
    var viewportX = ($(window).width() / 2)

    var imageCenterY = imageOffset.top + (this._targetImage.height / 2)
    var imageCenterX = imageOffset.left + (this._targetImage.width / 2)

    this._translateY = viewportY - imageCenterY
    this._translateX = viewportX - imageCenterX

    var targetTransform = 'scale(' + this._imgScaleFactor + ')'
    var imageWrapTransform = 'translate(' + this._translateX + 'px, ' + this._translateY + 'px)'

    if ($.support.transition) {
      imageWrapTransform += ' translateZ(0)'
    }

    $(this._targetImage)
      .css({
        '-webkit-transform': targetTransform,
            '-ms-transform': targetTransform,
                'transform': targetTransform
      })

    $(this._targetImageWrap)
      .css({
        '-webkit-transform': imageWrapTransform,
            '-ms-transform': imageWrapTransform,
                'transform': imageWrapTransform
      })

    this._$body.addClass('zoom-overlay-open')
  }

  close() {
    this._$body
      .removeClass('zoom-overlay-open')
      .addClass('zoom-overlay-transitioning')

    // we use setStyle here so that the correct vender prefix for transform is used
    $(this._targetImage)
      .css({
        '-webkit-transform': '',
            '-ms-transform': '',
                'transform': ''
      })

    $(this._targetImageWrap)
      .css({
        '-webkit-transform': '',
            '-ms-transform': '',
                'transform': ''
      })

    if (!$.support.transition) {
      return this.dispose()
    }

    $(this._targetImage)
      .one($.support.transition.end, $.proxy(this.dispose, this))
      .emulateTransitionEnd(300)
  }

  dispose() {
    if (this._targetImageWrap && this._targetImageWrap.parentNode) {
      $(this._targetImage)
        .removeClass('zoom-img')
        .attr('data-action', 'zoom')

      this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap)
      this._overlay.parentNode.removeChild(this._overlay)

      this._$body.removeClass('zoom-overlay-transitioning')
    }
  }
}

export default class ZoomService {
  _activeZoomClose(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  _activeZoom: Zoom;
  _$window: any;
  _scrollHandler<default extends ZoomService>(_scrollHandler: any, arg1: this): any {
    throw new Error("Method not implemented.");
  }
  _$document: any;
  _keyHandler<default extends ZoomService>(_keyHandler: any, arg1: this): any {
    throw new Error("Method not implemented.");
  }
  _touchStart<default extends ZoomService>(_touchStart: any, arg1: this): any {
    throw new Error("Method not implemented.");
  }
  _boundClick(arg0: string, _boundClick: any, arg2: boolean) {
    throw new Error("Method not implemented.");
  }
  constructor() {
    document.body.addEventListener('click', this.zoom, false);
  }

  private zoom = (e: MouseEvent) => {
    const target = e.target;
    if (!isImage(target)) return;
    if (document.body.classList.contains('zoom-overlay-open')) return;

    if (e.metaKey || e.ctrlKey) {
      return window.open((target.dataset.original || target.src), '_blank');
    }

    if (target.width >= ($(window).width() - Zoom.OFFSET)) return;

    this._activeZoomClose(true);

    this._activeZoom = new Zoom(target);
    this._activeZoom.zoomImage();

    // todo(fat): probably worth throttling this
    this._$window.on('scroll.zoom', $.proxy(this._scrollHandler, this));

    this._$document.on('keyup.zoom', $.proxy(this._keyHandler, this));
    this._$document.on('touchstart.zoom', $.proxy(this._touchStart, this));

    // we use a capturing phase here to prevent unintended js events
    // sadly no useCapture in jquery api (http://bugs.jquery.com/ticket/14953)
    if (document.addEventListener) {
      document.addEventListener('click', this._boundClick, true);
    } else {
      document.attachEvent('onclick', this._boundClick, true);
    }

    if ('bubbles' in e) {
      if (e.bubbles) e.stopPropagation();
    } else {
      // Internet Explorer before version 9
      e.cancelBubble = true;
    }
  };
}

function isImage(e: EventTarget | null): e is HTMLImageElement {
  return (
    !!e &&
    e instanceof HTMLImageElement &&
    e.tagName.toLowerCase() === 'img' &&
    e.dataset.zoom != null
  );
}
