<template>
  <div id="restaurant">
    <div class="restaurant-header">
      <router-link to="/main/flavor" class="return-to-flavor">
        <icon name="chevron-left"></icon>
      </router-link>
      <div class="header-title">鹅厂美味</div>
    </div>
    <div class="restaurant-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'restaurant',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
#restaurant {
  .restaurant-header {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 1px 1px  #e0e0e0;
    position: relative;

    .return-to-flavor {
      display: inline-block;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translate(0, -50%);

      svg {
        height: 25px;
        width: 25px;
        color: #909090;
      }

    }

    .header-title {
      width: 100%;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      line-height: 70px;
      letter-spacing: 2px;
    }
  }

  .restaurant-main {
    background: #e0e0e0;
  }
}
</style>
