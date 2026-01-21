import { computed, type CSSProperties } from 'vue';

export interface SolarIconProps {
  color?: string;
  highlightColor?: string;
}

export function useSolarIcon(props: SolarIconProps) {
  const color = computed(() => props.color || 'currentColor');
  const highlightColor = computed(() => props.highlightColor ? props.highlightColor : color.value);
  const hasVibrant = computed(() => !!props.highlightColor);
  const rootStyle = computed(() => {
    const style: CSSProperties = {
      '--c': color.value,
      '--hc': props.highlightColor ? props.highlightColor : 'var(--c)',
      '--op': props.highlightColor ? ' ' : '0.5',
    };
    return style;
  });
  return {
    hasVibrant,
    color,
    highlightColor,
    rootStyle,
  };
}
