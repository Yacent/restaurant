<template>
  <div id="flavor">
    <div class="header">
      <img src="../../assets/flavor-logo.png" alt="flavor-logo">
    </div>
    <div class="flavor-container">
      <router-link :to="'/restaurant/'+item.id" class="restaurant" v-for="(item, index) in buildInfo" :key="item.id">
        <div class="up">
          {{ item.name }}
        </div>
        <div class="mask"></div>
        <div :class="['res'+ index, 'bottom']"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {getResList} from '../../api'
export default {
  name: 'flavor',
  data () {
    return {
      buildInfo: []
    }
  },
  created () {
    if (localStorage.TOKEN) {
      getResList().then(response => {
        var data = response.data
        if (data.length) {
          this.buildInfo = data
        }
      })
    } else {
      this.$router.push('/foodset')
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
      .res0 {
        background-image: url('../../assets/res1.jpg')
      }
      .res1 {
        background-image: url('../../assets/res2.jpg')
      }
      .res2 {
        background-image: url('../../assets/res3.png')
      }
      .res3 {
        background-image: url('../../assets/res4.png')
      }
      .res4 {
        background-image: url('../../assets/res5.jpg')
      }
      .res5 {
        background-image: url('../../assets/res6.png')
      }

      .bottom {
        height: 220px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 -20px;
      }
    }
  }
}
</style>
