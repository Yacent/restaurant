<template>
  <div id="flavor">
    <div class="header">
      <img src="../../assets/flavor-logo.png" alt="flavor-logo">
    </div>
    <div class="flavor-container">
      <router-link :to="item.links" class="restaurant" v-for="(item, index) in buildInfo" :key="index">
        <div class="up">
          {{ item.name }}
        </div>
        <div class="mask"></div>
        <div class="bottom"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flavor',
  data () {
    return {
      buildInfo: [
        {links: '/restaurant/tencent', name: '腾讯食堂'},
        {links: '/restaurant/malata', name: '万利达食堂'},
        {links: '/restaurant/fiyta', name: '飞亚达食堂'},
        {links: '/restaurant/netac', name: '朗科食堂'},
        {links: '/restaurant/kexin', name: '科兴食堂'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#flavor {
  height: 100%;
  position: relative;

  .header {
    width: 100%;
    padding: 10px 0;
    overflow: hidden;
    box-shadow: 0 1px 1px #e0e0e0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;

    img {
      height: 50px;
    }

    z-index: 10;
  }

  .flavor-container {
    width: 100%;
    max-height: 80%;
    padding-top: 75px;
    overflow: auto;

    .restaurant {
      width: 100%;
      height: 220px;
      margin: 10px 0;
      display: block;
      text-decoration: none;
      position: relative;

      .up {
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 2px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);

        z-index: 5;
      }

      .mask {
        width: 100%;
        height: 220px;
        background-color: #000;
        opacity: .4;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }

      .bottom {
        background-image: url('../../assets/building-bg-holder.jpg');
        height: 220px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 -20px;
      }
    }
  }
}
</style>
