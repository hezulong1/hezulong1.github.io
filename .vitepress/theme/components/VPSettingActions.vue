<script setup lang="ts">
import VPSwitchAppearance from './VPThemeButton.vue';
import VPGithubButton from './VPGithubButton.vue';
</script>

<template>
  <div class="VPSettingActions">
    <VPGithubButton />
    <VPSwitchAppearance />
  </div>
</template>

<style lang="scss" scoped>
.VPSettingActions {
  display: flex;
  justify-content: end;
}
</style>
