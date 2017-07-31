<template>
  <div id="restaurant">
    <div class="restaurant-header">
      <router-link to="/main/flavor" class="return-to-flavor">
        <icon name="chevron-left"></icon>
      </router-link>
      <div class="header-title">鹅厂美味</div>
    </div>
    <div class="restaurant-main">
      <div id="tencent-restaurant">
        <new-food :newList="news"></new-food>
        <today-menu :todayMenuList="list"></today-menu>
      </div>
    </div>
  </div>
</template>

<script>
import newFood from '../../components/newFood.vue'
import todayMenu from '../../components/todayMenu.vue'
import {getListByRestId, getNewByRestId} from '../../api'
export default {
  name: 'restaurant',
  data () {
    return {
      list: [],
      news: []
    }
  },
  created () {
    // 在这里去判断路由，然后请求不同的信息
    var buildId = this.$route.params.pos
    getListByRestId(buildId).then(response => {
      if (!response.data.length) {
        return
      }
      var list = response.data
      if (list.length) {
        list.sort(function (a, b) {
          return b.like - a.like
        })
        list.forEach((item, index) => {
          if (index < 3) {
            item.top = 'TOP' + (index + 1)
          } else {
            item.top = ''
          }
        })
        this.list = list
      }
    })
    getNewByRestId(buildId).then(response => {
      if (response.data.length) {
        this.news = response.data
      }
    })
  },
  components: {
    newFood,
    todayMenu
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
