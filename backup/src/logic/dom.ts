export function isNode(node: unknown): node is Node {
  return !!node && (node instanceof Node);
}

export function isElement(el: unknown): el is Element {
  return !!(el) && (el instanceof Element);
}

export function isHTMLElement(el: unknown): el is HTMLElement {
  return !!(el) && (el instanceof HTMLElement);
}

export function getActiveElement() {
  let result = document.activeElement;

  while (result?.shadowRoot) {
    result = result.shadowRoot.activeElement;
  }

  return result;
}
