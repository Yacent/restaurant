<template>
  <div id="recommend-menu">
    <div class="menu-detail" v-for="(item, index) in todayMenuList" key="index">
      <div class="detail-img">
        <span class="show-top" v-if="item.top !== ''">{{ item.top }}</span>
        <img src="../assets/new-1.jpg" alt="new-1">
        <div class="recommend-count-container">
          <div class="count-mask"></div>
          <div class="recomment-count">17人推荐</div>
        </div>
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
  name: 'recommend-food',
  data () {
    return {
      likeState: true,
      todayMenuList: [
        {top: 'TOP1', imgUrl: '../assets/new-1.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: true},
        {top: 'TOP2', imgUrl: '../assets/new-2.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: false},
        {top: 'TOP3', imgUrl: '../assets/new-3.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: true},
        {top: '', imgUrl: '../assets/new-4.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: true},
        {top: '', imgUrl: '../assets/new-4.jpg', foodTitle: '雪花肥牛', foodPrice: '18', foodPos: '腾大13F中餐馆', likeState: true},
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
  }
}
</script>

<style lang="less">
#recommend-menu {
  margin-top: 10px;
  background: #fff;

  .menu-detail {
    padding: 10px 10px;
    box-sizing: border-box;
    padding-left: 150px;
    height: 125px;
    border-bottom: 1px solid #e0e0e0;

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

      .recommend-count-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;

        .count-mask {
          background-color: #000;
          opacity: .6;
          width: 100%;
          height: 30px;
          position: absolute;
          top: 0;
          left: 0;
        }

        .recomment-count {
          position: absolute;
          top: 5px;
          left: 5px;
          color: #fff;
          z-index: 12;
        }
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
