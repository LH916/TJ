<template>
  <LeaseTitle>重点监控</LeaseTitle>
  <div class="wrap">
    <!--    <div class="videoName">正北方向主显示器大屏</div>-->
    <video src="/video/heliu3.mp4" autoplay muted loop></video>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.wrap {
  @include MarginTop(30);
  width: 100%;
  @include hHeight(250);

  .videoName {
    @include FontSize(16);
    @include Margin(15, 0, 15, 0);
    @include PaddingLeft(30);
    font-family: Tencent;
    text-align: center;
  }

  video {
    width: 80%;
    @include hHeight(200);
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }
}
</style>