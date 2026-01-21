<script setup lang="ts">
import { computed } from 'vue';
import { usePrevNext } from '@/utils/hooks';
import Button from '@/ui/Button.vue';

const control = usePrevNext();
const prev = computed(() => control.value[0]);
const next = computed(() => control.value[1]);
</script>

<template>
  <div :class="$style.root">
    <Button :class="$style.item" class="older" :disabled="!prev" :href="prev?.url">Prev</Button>
    <Button :class="$style.item" class="newer" :disabled="!next" :href="next?.url">Next</Button>
  </div>
</template>

<style lang="scss" module>
@use "@/style/mixins/media" as *;

.root {
  margin: 0 -1.5rem 1rem;
  overflow: hidden;
}

.item {
  display: flex;
  padding: 1rem;
  border: solid var(--border-color);
  border-width: 1px 0;
  border-radius: 0;

  &:first-child {
    margin-bottom: -1px;
  }
}

@include sm() {
  .root {
    margin: 3rem 0;
  }

  .item {
    float: left;
    width: 50%;
    border-width: 1px;

    &:first-child {
      margin-bottom: 0;
      border-top-left-radius: .25rem;
      border-bottom-left-radius: .25rem;
    }

    &:last-child {
      margin-left: -1px;
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .25rem;
    }
  }
}
</style>
