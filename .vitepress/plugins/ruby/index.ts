// https://github.com/lostandfound/markdown-it-ruby

import type Markdown from 'markdown-it';
import type Token from 'markdown-it/lib/token.mjs';
import type { RuleInline } from 'markdown-it/lib/parser_inline.mjs';

const enum CharCode {
  Slash = 0x2F, // /
  BackSlash = 0x5C, // \
  LeftBracket = 0x7B, // {
  Pipe = 0x7C, // |
  RightBracket = 0x7D, // }
}

/**
 * {base|ruby} or {base|ruby1|ruby2|...}
 */

export default function ruby_plugin(md: Markdown, options = {}) {
  const rule: RuleInline = (state, silent) => {
    if (silent) return false;

    const RP_OPEN = '(';
    const RP_CLOSE = ')';
    const start = state.pos;
    const max = state.posMax;

    if (state.src.charCodeAt(start) !== CharCode.LeftBracket) return false;
    if (start + 4 >= max) return false;

    // Initialize required variables

    let devPos: number | undefined; // Position of delimiter '|'
    let closePos: number | undefined; // Position of closing character '}'
    let token: Token | undefined;
    let tokens: Token[] = [];

    state.pos = start + 1;

    while (state.pos < max) {
      const curIndex = state.pos;
      const curToken = state.src.charCodeAt(curIndex);
      const prevToken = state.src.charCodeAt(curIndex - 1);

      if (devPos) {
        if (curToken === CharCode.RightBracket && prevToken !== CharCode.BackSlash) {
          closePos = curIndex;
          break;
        }
      } else if (curToken === CharCode.Pipe && prevToken !== CharCode.BackSlash) {
        devPos = curIndex;
      }

      state.pos++;
    }

    if (!devPos) {
      state.pos = start;
      return false; // Delimiter '|' not found
    }

    if (!closePos) {
      state.pos = start;
      return false; // Closing brace '}' not found
    }

    if (start + 1 === state.pos) {
      state.pos = start;
      return false; // Empty content
    }

    state.posMax = state.pos;
    state.pos = start + 1;

    token = state.push('ruby_open', 'ruby', 1);
    token.markup = '{';

    const baseText = state.src.slice(start + 1, devPos);
    const rubyText = state.src.slice(devPos + 1, closePos);

    // Split texts into arrays
    const baseArray = Array.from(baseText); // Use Array.from for Unicode support

    let rubyArray: string[]; // Array of ruby text segments

    // Add length check for rubyArray
    if (rubyText.includes('|')) {
      rubyArray = rubyText.split('|').filter(text => text.length > 0);
      if (rubyArray.length === 0) {
        state.pos = start;
        return false;
      }
    } else {
      rubyArray = [rubyText];
    }

    // Common function for token generation
    function parseAndPushTokens(content: string) {
      const tokens: Token[] = [];
      state.md.inline.parse(content, state.md, state.env, tokens);
      tokens.forEach(t => state.tokens.push(t));
    }

    // Optimize character-by-character ruby processing
    if (baseArray.length === rubyArray.length) {
      baseArray.forEach((content, idx) => {
        parseAndPushTokens(content);

        token = state.push('rp_open', 'rp', 0);
        token.content = RP_OPEN;
        token.markup = RP_OPEN;

        token = state.push('rt_open', 'rt', 1);
        parseAndPushTokens(rubyArray[idx]);
        token = state.push('rt_close', 'rt', -1);

        token = state.push('rp_close', 'rp', 0);
        token.content = RP_CLOSE;
        token.markup = RP_CLOSE;
      });
    } else {
      state.md.inline.parse(
        baseText,
        state.md,
        state.env,
        tokens = [],
      );

      tokens.forEach(function (t) {
        state.tokens.push(t);
      });

      token = state.push('rp_open', 'rp', 0);
      token.content = RP_OPEN;
      token.markup = RP_OPEN;

      token = state.push('rt_open', 'rt', 1);
      state.md.inline.parse(
        rubyText,
        state.md,
        state.env,
        tokens = [],
      );

      tokens.forEach(function (t) {
        state.tokens.push(t);
      });
      token = state.push('rt_close', 'rt', -1);

      token = state.push('rp_close', 'rp', 0);
      token.content = RP_CLOSE;
      token.markup = RP_CLOSE;
    }

    // Close ruby element
    token = state.push('ruby_close', 'ruby', -1);
    token.markup = '}';

    // Update parser position
    state.pos = state.posMax + 1;
    state.posMax = max;

    return true;
  };

  md.renderer.rules.rp_open = function (tokens, idx) {
    return `<rp>${tokens[idx].content}</rp>`;
  };

  md.renderer.rules.rp_close = function (tokens, idx) {
    return `<rp>${tokens[idx].content}</rp>`;
  };

  md.inline.ruler.before('text', 'ddmd_ruby', rule);
}
