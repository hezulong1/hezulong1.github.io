<template>
  <article id="page" class="VPPage">
    <slot />
  </article>
</template>

<style lang="scss" scoped>
.VPPage {
  padding: 24px;
  margin-left: 0;
  min-height: 100vh;
  transition: margin-left 0.2s;

  @media (min-width: 768px) {
    margin-left: var(--siderbar-width);
  }
}
</style>
