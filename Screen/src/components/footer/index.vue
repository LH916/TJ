<!--
 * @Author: your name
 * @Date: 2022-03-15 14:02:15
 * @LastEditTime: 2022-03-28 00:06:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220312_CGSY_FREEDO_DTSWEEKLY_ZHJT\src\components\footer\index.vue
-->
<!-- footer -->
<template>
  <div class="footer"></div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  // bottom: 0;

  width: 100%;
  @include wHeight(120);
  @include Bottom(-2);
  background: url("~@/assets/images/基础/底部背景@2x.png") no-repeat center/cover;
}
</style>
