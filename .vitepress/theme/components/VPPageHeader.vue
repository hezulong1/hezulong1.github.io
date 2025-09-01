<template>
  <header id="page-header" class="VPPageHeader" />
</template>

<style lang="scss" scoped>
@use '../styles/utils' as utils;

.VPPageHeader {
  position: sticky;
  top: -2px;
  z-index: 3;
  block-size: 48px;
  padding-inline: 24px;
  display: flex;
  align-items: center;
  background-color: var(--vp-layout-bg);
  border-block-end-width: 1px;

  @include utils.tablet {
    position: static;
    border-block-end-width: 0px;
  }
}
</style>
