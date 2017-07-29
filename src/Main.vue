<template>
  <div id='restaurant-main'>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/footerBar'

export default {
  name: 'main',
  components: {
    FooterBar
  }
}
</script>

<style lang="less" scoped>
#restaurant-main {
  width: 100%;
  height: 100%;
  position: relative;

  .main {
    padding-bottom: 70px;
    max-height: 90%;
  }
}
</style>
