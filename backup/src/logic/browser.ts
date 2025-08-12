const userAgent = navigator.userAgent;

export const isWindows = /*@__PURE__*/(userAgent.indexOf('Windows') >= 0);
export const isMacintosh = /*@__PURE__*/(userAgent.indexOf('Macintosh') >= 0);
export const isLinux = /*@__PURE__*/(userAgent.indexOf('Linux') >= 0);

export const isFirefox = /*@__PURE__*/(userAgent.indexOf('Firefox') >= 0);
export const isChrome = /*@__PURE__*/(userAgent.indexOf('Chrome') >= 0);
export const isSafari = /*@__PURE__*/(!isChrome && (userAgent.indexOf('Safari') >= 0));
export const isEdge = /*@__PURE__*/(userAgent.indexOf('Edg/') >= 0);
