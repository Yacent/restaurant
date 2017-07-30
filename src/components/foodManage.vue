<template>
  <div id="food-manage">
    <div class="region-title">
      {{ options.title }}
    </div>
    <div class="items-container">
      <div class="region-item" v-for="(item, index) in foodItems" :key="index">
        <div class="upper-status">
          <div class="upper-left" v-show="options.leftTitle !== '' && item.isShelf">{{ options.leftTitle }}</div>
          <div class="upper-right" @click="markFood(index, item)" test="item.isSelected">
            <icon name="check" v-if="item.isSelected"></icon>
          </div>
        </div>
        <div class="item-img">
          <img src="../assets/new-1.jpg" alt="菜品">
        </div>
        <div class="item-bottom">
          <div class="item-name">{{ item.foodName }}</div>
          <div class="item-price">￥{{ item.foodPrice }}</div>
        </div>
      </div>
    </div>
    <div class="region-btn">
      <div class="shelf-btn btn" :class="[foodStorageSelected.length == 0 ? 'disabled-btn' : '']" v-show="options.index === 2" @click="addFood">上架</div>
      <div class="delete-food-btn btn" v-show="options.index === 2">删除</div>
      <div class="add-food-btn btn" v-show="options.index === 2" @click="addFood">添加菜品</div>
      <div class="recommend-btn btn" v-show="options.index === 1" @click="recommendFood">推荐</div>
      <div class="un-shelf-btn btn" v-show="options.index === 1">下架</div>
      <div class="unrecommend-btn btn" v-show="options.index === 0">取消推荐</div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'food-manage',
  props: {
    options: {
      type: Object,
      default: {
        leftTitle: '',
        title: '今日推荐'
      }
    }
  },
  data () {
    return {
      foodStorageSelected: [],
      todayStorageSelected: [],
      newStorageSelected: []
    }
  },
  methods: {
    markFood (index, item) {
      // let shelf = this.foodItems[index].isSelected
      // 判断是哪个页面下的改变，去修改相对应的 vuex的数组的值
      // 同时，改变storage当中的数据
      if (this.options.index === 0) {
        this.filterStorage(this.newStorageSelected, index, item)
        this.$store.commit('modifyNewFood', {index: index})
        // console.log(this.newStorageSelected.index)
        // console.log(this.foodItems[index])
      } else if (this.options.index === 1) {
        this.filterStorage(this.todayStorageSelected, index, item)
        this.$store.commit('modifyTodayFood', {index: index})
      } else {
        this.filterStorage(this.foodStorageSelected, index, item)
        this.$store.commit('modifyFoodItems', {index: index})
      }

      // this.foodItems[index].isSelected = !shelf
    },
    filterStorage (obj, index, item) {
      if (!item.isShelf) {
        if (!obj.includes(index)) {
          obj.push(index)
        } else {
          let i = obj.findIndex(num => num === index)
          obj.splice(i, 1)
        }
      }
    },
    addFood () {
      // 在这里添加食物
      if (this.foodStorageSelected.length > 0) {
        this.$store.commit('addFoodItems', {keyArr: this.foodStorageSelected})
      }
      this.foodStorageSelected = []
    },
    recommendFood () {
      // 在这里推荐食物
      if (this.todayStorageSelected.length > 0) {
        this.$store.commit('addNewFood', {keyArr: this.todayStorageSelected})
      }
      this.todayStorageSelected = []
    }
  },
  computed: {
    foodItems () {
      if (this.options.index === 0) {
        return this.$store.getters.getNewFood
      } else if (this.options.index === 1) {
        return this.$store.getters.getTodayFood
      } else {
        return this.$store.getters.getFoodItems
      }
    }
    // ...mapGetters({
    //   foodItems: 'getFoodItems'
    // })
  }
}
</script>

<style lang="less">
#food-manage {
  .region-title {
    color: red;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    padding-bottom: 15px;
  }

  .items-container {
    .region-item {
      width: 140px;
      height: 180px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      margin: 0 15px 10px 0;
      display: inline-block;

      .upper-status {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 50px;

        .upper-left {
          width: 80px;
          height: 25px;
          font-size: 14px;
          color: #fff;
          font-weight: bold;
          background-color: rgb(233, 73, 37);
          line-height: 25px;
          transform-origin: 50% 150%;
          transform: rotate(-45deg);
          text-align: center;
        }

        .upper-right {
          width: 20px;
          height: 20px;
          background-color: #fff;
          border: 1px solid #a0a0a0;
          position: absolute;
          top: 3px;
          right: 3px;
          border-radius: 5px;

          &.marked-disabled {
            color: #b0b0b0;
          }

          svg {
            position: relative;
            top: 1px;
            right: -2px;
          }

          &:hover {
            cursor: pointer;
          }
        }
      }

      .item-img {
        width: 100%;
        height: 140px;
        border-radius: 2px;
        overflow: hidden;

        img {
          width: 140px;
        }
      }

      .item-bottom {
        text-align: left;
        padding-left: 3px;
        .item-name {
          font-size: 16px;
        }

        .item-price {
          font-size: 14px;
          color: red;
        }
      }
    }
  }

  .region-btn {
    width: 100%;
    padding: 10px 0;
    text-align: left;

    .btn {
      width: 85px;
      height: 30px;
      border: 1px solid #808080;
      border-radius: 5px;
      text-align: center;
      line-height: 30px;
      display: inline-block;

      &.disabled-btn {
        background-color: #808080;
        color: #fff;
      }
    }
  }
}
</style>
