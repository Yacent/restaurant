<template>
  <div id="today-menu">
    <div class="menu-header">
      <div class="menu-title">今日菜单</div>
      <div class="menu-filter">
        筛选
        <icon name="chevron-down"></icon>
      </div>
    </div>
    <div class="menu-detail" v-for="(item, index) in todayMenuList" key="index">
      <div class="detail-img">
        <span class="show-top" v-if="item.top !== ''">{{ item.top }}</span>
        <img src="../assets/new-1.jpg" alt="new-1">
      </div>
      <div class="detail-desp">
        <div class="food-info">
          <div class="food-title">{{ item.foodTitle }}</div>
          <div class="food-price">￥{{ item.foodPrice }}</div>
        </div>
        <div class="food-pos">档口：{{ item.foodPos }}</div>
        <div class="like-btn" @click="changeLikeState(index)">
          <span class="like-span" v-if="item.likeState">
            <icon name="thumbs-o-up"></icon>
            <span class="btn-desp">想吃</span>
          </span>
          <span class="like-span liked" v-else>
            <icon name="thumbs-up" class="liked"></icon>
            <span class="btn-desp">已收藏</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'today-menu',
  data () {
    return {
      likeState: true,
      todayMenuList: [
        {top: 'TOP1', imgUrl: '../assets/new-1.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: true},
        {top: 'TOP2', imgUrl: '../assets/new-2.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: false},
        {top: 'TOP3', imgUrl: '../assets/new-3.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: true},
        {top: '', imgUrl: '../assets/new-4.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: true}
      ]
    }
  },
  methods: {
    changeLikeState (index) {
      let state = this.todayMenuList[index].likeState
      if (state) {
        this.todayMenuList[index].likeState = !state
      }
    }
  },
  computed: {
    likeStates () {
      for (let i = 0; i < 100; i++) {
        this.likeState[i] = true
      }
      return this.likeState
    }
  }
}
</script>

<style lang="less">
#today-menu {
  margin-top: 10px;
  background: #fff;

  .menu-header {
    position: relative;
    padding: 0 10px;

    .menu-title {
      padding: 8px 0;
      font-size: 22px;
      text-align: left;
      font-weight: bold;
      color: #404040;
    }

    .menu-filter {
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translate(0, -50%);
      color: #909090;
    }
  }

  .menu-detail {
    padding: 0 10px;
    box-sizing: border-box;
    padding-left: 150px;
    height: 115px;
    padding-bottom: 10px;

    .detail-img {
      width: 140px;
      height: 100px;
      overflow: hidden;
      float: left;
      margin-left: -140px;
      position: relative;

      .show-top {
        width: 60px;
        height: 30px;
        line-height: 30px;
        position: absolute;
        top: 0;
        left: 0;
        background: red;
        color: #fff;
        border-bottom-right-radius: 8px;
      }
    }

    .detail-desp {
      text-align: left;
      padding-left: 15px;
      height: 100px;

      .food-info {
        font-size: 20px;
        height: 30px;
        line-height: 30px;
        margin-bottom: 5px;

        .food-title {
          font-weight: bold;
          display: inline-block;
        }

        .food-price {
          font-size: 16px;
          line-height: 25px;
          display: inline-block;
        }
      }

      .food-pos {
        margin-bottom: 12px;
      }

      .like-btn {
        .like-span {
          display: inline-block;
          width: 90px;
          height: 30px;
          border: 1px solid #d0d0d0;
          border-radius: 15px;
          text-align: center;
          line-height: 30px;

          svg {
            vertical-align: -3px;
          }

          &.liked {
            color: red;
            font-weight: bold;

            svg {
              vertical-align: -1px;
            }
          }
        }
      }
    }
  }
}
</style>
