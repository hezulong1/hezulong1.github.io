<template>
  <div class="VPNotFound">
    <span class="code">404</span>
    <span class="divider" />
    <span class="content">未找到当前页面</span>
  </div>
</template>

<style lang="scss" scoped>
.VPNotFound {
  display: flex;
  align-items: baseline;
  padding: 24px;
  color: #333;
  font-size: 12px;

  .code {
    font-size: 13px;
    font-weight: 500;
  }

  .divider {
    inline-size: 1px;
    block-size: 20px;
    background: #0008;
    margin-inline: 8px;
    align-self: center;
  }
}
</style>
