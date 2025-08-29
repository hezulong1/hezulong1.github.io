<template>
  <div class="VPNotFound">
    <span class="code">404</span>
    <span class="divider" />
    <span>未找到当前页面</span>
  </div>
</template>

<style lang="scss" scoped>
.VPNotFound {
  display: flex;
  align-items: baseline;
  font-size: 12px;
  padding: 36px 24px;

  .code {
    font-size: 14px;
    font-weight: 600;
  }

  .divider {
    inline-size: 1px;
    block-size: 16px;
    align-self: center;
    margin-inline: 1em;
    background: var(--vp-layout-text);
  }
}
</style>
