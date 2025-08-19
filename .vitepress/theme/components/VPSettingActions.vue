<script setup lang="ts">
import { useData } from '../utils/composables';
import Github from './icons/Github.vue';
import VPButton from './VPButton.vue';
import VPSwitchAppearance from './VPSwitchAppearance.vue';

const { theme } = useData();
</script>

<template>
  <div class="VPSettingActions">
    <VPButton :icon="Github" :href="theme.github" />
    <VPSwitchAppearance />
  </div>
</template>

<style lang="scss" scoped>
.VPSettingActions {
  display: flex;
  justify-content: end;
}
</style>
