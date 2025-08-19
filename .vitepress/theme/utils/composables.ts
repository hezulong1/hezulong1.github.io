import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { useData as useData$ } from 'vitepress';
import type { MyTheme } from '../type.ts';

export const useData: typeof useData$<MyTheme.Config> = useData$;

const isOpen = ref(false);

/**
 * a11y: cache the element that opened the Sidebar (the menu button) then
 * focus that button again when Menu is closed with Escape key.
 */
export function useCloseSidebarOnEscape(close: () => void) {
  let triggerElement: HTMLButtonElement | undefined;

  watchEffect(() => {
    triggerElement = isOpen.value
      ? (document.activeElement as HTMLButtonElement)
      : undefined;
  });

  onMounted(() => {
    window.addEventListener('keyup', onEscape);
  });

  onUnmounted(() => {
    window.removeEventListener('keyup', onEscape);
  });

  function onEscape(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen.value) {
      close();
      triggerElement?.focus();
    }
  }
}

export function useSidebarControl() {
  function open() {
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  function toggle() {
    isOpen.value ? close() : open();
  }

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
