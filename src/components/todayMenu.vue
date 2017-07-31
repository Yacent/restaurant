<template>
  <div id="today-menu">
    <div class="menu-header">
      <div class="menu-title">今日菜单</div>
      <div class="menu-filter" @click="showSelect">
        筛选
        <icon name="chevron-down" v-show="selectState"></icon>
        <icon name="chevron-up" v-show="!selectState"></icon>
      </div>
      <select-option @hideSelect="hideSelectOption" v-if="selectState"></select-option>
    </div>
    <div class="menu-detail" v-for="(item, index) in todayMenuList" key="index">
      <div class="detail-img">
        <span class="show-top" v-if="item.top !== ''">{{ item.top }}</span>
        <img :src="item.pic" alt="new-1">
      </div>
      <div class="detail-desp">
        <div class="food-info">
          <div class="food-title">{{ item.name }}</div>
          <div class="food-price">￥{{ item.price }}</div>
        </div>
        <div class="food-pos">档口：{{ item.rest }}</div>
        <div class="like-btn" @click="changeLikeState(index)">
          <span class="like-span" v-if="!item.isWant">
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
import SelectOption from './selectOption.vue'
import {diswantFood, wantFood} from '../api'
export default {
  name: 'today-menu',
  props: ['todayMenuList'],
  data () {
    return {
      selectState: false
    }
  },
  methods: {
    changeLikeState (index) {
      let target = this.todayMenuList[index]
      let state = target.isWant
      if (state === false) {
        wantFood(target.id).then(response => {
          if (response.data === 'success') {
            this.todayMenuList[index].isWant = !state
          }
        })
      } else {
        diswantFood(target.id).then(response => {
          if (response.data === 'success') {
            this.todayMenuList[index].isWant = !state
          }
        })
      }
    },
    showSelect () {
      this.selectState = !this.selectState
    },
    hideSelectOption (data) {
      this.selectState = !this.selectState
    }
  },
  components: {
    SelectOption
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
