import type { MaybeElementRef } from '@vueuse/core';
import type { TypedOptions } from 'typed.js';

import Typed from 'typed.js';
import { watch } from 'vue';
import { tryOnScopeDispose, unrefElement } from '@vueuse/core';
import { inBrowser } from 'vitepress';

export function useTypedJS(target: MaybeElementRef, options: TypedOptions) {
  let typed: Typed | undefined;

  const start = () => typed && typed.start();
  const stop = () => typed && typed.stop();
  const toggle = () => typed && typed.toggle();
  const reset = () => typed && typed.reset();

  if (inBrowser) {
    target && watch(target, () => {
      const el = unrefElement(target);

      if (!el) return;

      typed = new Typed(el, options);
    }, {
      flush: 'post',
    });

    tryOnScopeDispose(() => typed?.destroy());
  }

  return {
    start,
    stop,
    toggle,
    reset,
  };
}
