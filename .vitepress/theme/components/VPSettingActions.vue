<script setup lang="ts">
import VPThemeButton from './VPThemeButton.vue';
import VPGithubButton from './VPGithubButton.vue';
</script>

<template>
  <div class="VPSettingActions">
    <VPGithubButton />
    <VPThemeButton />
  </div>
</template>

<style lang="scss" scoped>
.VPSettingActions {
  display: flex;
  justify-content: end;
}
</style>
