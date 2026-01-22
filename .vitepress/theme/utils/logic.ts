import dayjs from 'dayjs';
import { inBrowser } from 'vitepress';

export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;

const HASH_RE = /#.*$/;
const HASH_OR_QUERY_RE = /[#?].*$/;
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?\.(?:md|html)$/;

export function normalizePath(path: string): string {
  return decodeURI(path).replace(HASH_OR_QUERY_RE, '').replace(INDEX_OR_EXT_RE, '$1');
}

export function isActivePath(currentPath: string, matchPath?: string, asRegex = false): boolean {
  if (typeof matchPath === 'undefined') return false;

  currentPath = normalizePath(currentPath.startsWith('/') ? currentPath : `/${currentPath}`);

  if (asRegex) new RegExp(matchPath).test(currentPath);
  if (normalizePath(matchPath) !== currentPath) return false;

  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) return (inBrowser ? location.hash : '') === hashMatch[0];

  return true;
}

export function toLocalDayjs(date?: dayjs.ConfigType) {
  return dayjs(date).tz('Asia/Shanghai');
}

export function throttleAndDebounce(fn: () => void, delay: number): () => void {
  let timeoutId: NodeJS.Timeout;
  let called = false;

  return () => {
    if (timeoutId) clearTimeout(timeoutId);

    if (!called) {
      fn();
      (called = true) && setTimeout(() => (called = false), delay);
    } else timeoutId = setTimeout(fn, delay);
  };
}
