<template>
  <div id="footer-bar">
    <router-link to="/main/flavor" class="tabbar-item">
      <div class="item-icon">
        <img src="../assets/flavor-selected.png" :alt="口味" v-if="this.$route.path === '/main/flavor'">
        <img src="../assets/flavor.png" :alt="口味" v-else>
      </div>
      <span class="label">口味</span>
    </router-link>
    <router-link to="/main/recommend" class="tabbar-item">
      <div class="item-icon">
        <img src="../assets/recommend.png" :alt="推荐" v-if="this.$route.path === '/main/recommend'">
        <img src="../assets/recommend.png" :alt="推荐" v-else>
      </div>
      <span class="label">推荐</span>
    </router-link>
    <router-link to="/main/my" class="tabbar-item">
      <div class="item-icon">
        <img src="../assets/me.png" :alt="我的" v-if="this.$route.path === '/main/my'">
        <img src="../assets/me.png" :alt="我的" v-else>
      </div>
      <span class="label">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
    }
  },
  methods: {
    changeStage (stage) {
      this.stage = stage
    }
  }
}
</script>

<style lang="less" scoped>
#footer-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 11;
  width: 100%;
  height: 70px;
  box-shadow: 0 -1px 1px #e0e0e0;

  .tabbar-item {
    display: block;
    text-decoration: none;
    color: #808080;
    width: 33.3%;
    height: 100%;
    position: relative;
    float: left;

    .item-icon {
      text-align: center;
      padding-top: 4px;
      img {
        width: 60px;
      }
    }

    .label {
      font-size: 16px;
    }
  }
}
</style>
