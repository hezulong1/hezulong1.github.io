import type Markdown from 'markdown-it';
import type StateCore from 'markdown-it/lib/rules_core/state_core.mjs';
import type Token from 'markdown-it/lib/token.mjs';
import { presetColors, isValidColor, escape } from './utils';

interface PluginOptions {
  colorNames?: Record<string, string>;
  wrapperClass?: string;
  indicatorClass?: string;
}

interface IColorData {
  readonly text: string;
  readonly index: number;
  readonly length: number;
}

export default function color_plugin(md: Markdown, opts: PluginOptions) {
  const colorNames = { ...presetColors, ...opts?.colorNames };
  const wrapperClass = opts?.wrapperClass ?? 'color-wrapper';
  const indicatorClass = opts?.indicatorClass ?? 'color-indicator';

  const EXCLUDE_TAG_RE = /\bpre|code|kbd|samp|output\b/gi;
  const COLOR_RE = (() => {
    const names = Array.from(new Set(Object.keys(colorNames))).sort().map(escape).join('|');
    return new RegExp(
      (names ? `\\b(${names})\\b|` : '') +
      `(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\\([^)]*\\)|` +
      `#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b`,
      'gi',
    );
  })();

  function collectColorFromContent(content: string): string {
    const colorDataCollector: IColorData[] = [];

    let match;

    COLOR_RE.lastIndex = 0;

    while ((match = COLOR_RE.exec(content)) != null) {
      colorDataCollector.push({
        text: match[0],
        index: match.index,
        length: match[0].length,
      });
    }

    if (colorDataCollector.length === 0) {
      return content;
    }

    let lastIndex = 0;
    let result = '';

    for (const colorData of colorDataCollector) {
      if (colorData.index < lastIndex) continue;

      const colorValue = colorData.text;
      if (!isValidColor(colorValue)) continue;

      // 添加匹配前的文本
      result += content.slice(lastIndex, colorData.index);
      result += `<span class="${wrapperClass}">`;
      result += `<span class="${indicatorClass}" style="background:${colorValue}"></span>`;
      result += colorValue;
      result += '</span>';

      lastIndex = colorData.index + colorData.length;
    }

    result += content.slice(lastIndex);

    return result;
  }

  function isInExcludedTag(tokens: Token[], maxIndex: number): boolean {
    let i = maxIndex;

    while (i >= 0) {
      const token = tokens[i];
      if (token.type === 'html_inline' && EXCLUDE_TAG_RE.test(token.content)) {
        return true;
      }
      i--;
    }

    return false;
  }

  function processTokens(tokens: Token[], state: StateCore) {
    tokens.forEach((token, i) => {
      if (token.type === 'inline' && token.children) {
        const prevToken = tokens[i - 1];
        const nextToken = tokens[i + 1];
        if (prevToken?.type === 'heading_open' && nextToken?.type === 'heading_close') return;

        processTokens(token.children, state);
      }

      if (token.type === 'text') {
        if (isInExcludedTag(tokens, i - 1)) return;

        const content = token.content;
        const newContent = collectColorFromContent(content);

        if (content === newContent) return;

        const newToken = new state.Token('html_inline', '', 0);
        newToken.content = newContent;
        newToken.level = token.level;
        tokens.splice(i, 1, newToken);
      }
    });
  }

  md.core.ruler.after('inline', 'color_highlighter', state => processTokens(state.tokens, state));
}
