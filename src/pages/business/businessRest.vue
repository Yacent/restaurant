<template>
  <div id="business-restaurant">
    <div class="restaurant-select-bar">
      <div class="select-btn" :class="[selectBarIndex === index ? 'selected-btn' : '']" v-for="(item, index) in selectBarOption" :key="index" @click="changeSelectBar(index)">
        {{ item.name }}
      </div>
    </div>
    <div class="restaurant-show-region">
      <food-manage :options="foodManageOption[selectBarIndex]"></food-manage>
    </div>
  </div>
</template>

<script>
import FoodManage from '@/components/foodManage'

export default {
  name: 'business-restaurant',
  data () {
    return {
      selectBarIndex: 2,
      selectBarOption: [
        {name: '新品推荐', category: 0},
        {name: '今日菜单', category: 1},
        {name: '菜品库', category: 2}
      ],
      foodManageOption: {
        0: {
          leftTitle: '',
          title: '今日推荐',
          index: 0
        },
        1: {
          leftTitle: '已推荐',
          title: '今日菜单',
          index: 1
        },
        2: {
          leftTitle: '已上架',
          title: '菜品库',
          index: 2
        }
      }
    }
  },
  methods: {
    changeSelectBar (index) {
      this.selectBarIndex = index
    }
  },
  components: {
    FoodManage
  }
}
</script>

<style lang="less">
#business-restaurant {
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;

  .restaurant-select-bar {
    width: 100%;
    text-align: left;

    .select-btn {
      width: 100px;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      text-align: center;
      border: 1px solid #404040;
      border-radius: 5px;
      margin-right: 5px;

      &:hover {
        cursor: pointer;
      }

      &.selected-btn {
        background: rgb(22, 155, 213);
        border-color: rgb(22, 155, 213);
        color: #fff;
      }
    }
  }

  .restaurant-show-region {
    width: 100%;
    text-align: left;
    padding: 15px 0;
  }
}
</style>
