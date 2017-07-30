<template>
  <div id="select-option">
    <div class="outer-mask"></div>
    <div class="inner-container">
      <div class="inner-cuisine">
        <div class="cuisine-header">
          菜系
        </div>
        <div class="cuisine-select">
          <span class="cuisine-name" :class="[cuisineStatus[index] ? 'cuisine-selected' : '']" v-for="(item, index) in cuisineName" :key="index" @click="selectCuisine(index, item)">{{ item.name }}</span>
        </div>
      </div>
      <div class="inner-price">
        <div class="price-header">
          价格
        </div>
        <div class="price-select">
          <span class="price-count" :class="[priceIndex.in === index ? 'cuisine-selected' : '']" v-for="(item, index) in priceName" :key="index" @click="selectPrice(index, item)">{{ item.price }}</span>
        </div>
      </div>
      <div class="inner-btn">
        <div class="cancel-btn btn" @click="resetSelect">重置</div>
        <div class="submit-btn btn" :class="{'disabled-btn': ifSelectAll }" @click="submitSelect">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-option',
  data () {
    return {
      cuisineStatus: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
      },
      cuisineInfo: [],
      priceInfo: {
        range: ''
      },
      priceIndex: {
        in: -1
      },
      cuisineName: [
        {name: '中餐'},
        {name: '西餐'},
        {name: '汤锅'},
        {name: '甜点'},
        {name: '饮品'},
        {name: '东南亚'},
        {name: '粉食面'}
      ],
      priceName: [
        {price: '20以内'},
        {price: '20-30'},
        {price: '30-40'},
        {price: '40以上'}
      ]
    }
  },
  created () {
    console.log(this.cuisineInfo.length > 0)
  },
  computed: {
    ifSelectAll () {
      return this.priceInfo.range === '' || this.cuisineInfo.length <= 0
    }
  },
  methods: {
    resetSelect () {
      this.priceIndex.in = -1
      for (let key of Object.keys(this.cuisineStatus)) {
        this.cuisineStatus[key] = false
      }
      this.cuisineInfo = []
      this.priceInfo = {
        range: ''
      }
    },
    submitSelect () {
      if (this.ifSelectAll) {
        return
      } else {
        // 在这里把  cuisineInfo 和 priceInfo 的数据
        // console.log(this.cuisineInfo)
        // console.log(this.priceInfo.range)
        // 把数据传到父组件当中
        this.cuisineInfo.push(this.priceInfo.range)
        this.$emit('hideSelect', this.cuisineInfo)
      }
    },
    selectCuisine (index, item) {
      if (!this.cuisineStatus[index] && !this.cuisineInfo.includes(item.name)) {
        this.cuisineInfo.push(item.name)
      }
      if (this.cuisineStatus[index]) {
        let i = this.cuisineInfo.findIndex(name => name === item.name)
        this.cuisineInfo.splice(i, 1)
      }
      this.cuisineStatus[index] = !this.cuisineStatus[index]
    },
    selectPrice (index, item) {
      this.priceIndex.in = index
      this.priceInfo.range = item.price
    }
  }
}
</script>

<style lang="less">
#select-option {
  width: 100%;
  height: 500px;
  position: absolute;
  top: 44px;
  left: 0;
  z-index: 35;
  border-top: 1px solid #d0d0d0;

  .outer-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .4;
  }

  .inner-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 33;
    width: 100%;
    height: 60%;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 1px 2px #404040;

    .inner-cuisine {
      box-sizing: border-box;
      width: 100%;
      height: 50%;
      box-shadow: 0 1px 1px #d0d0d0;
      padding: 5px 10px;

      .cuisine-header {
        text-align: left;
        padding: 5px 0;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .cuisine-select {
        text-align: left;
        .cuisine-name {
          text-align: center;
          display: inline-block;
          width: 20%;
          height: 35px;
          border: 1px solid #a0a0a0;
          border-radius: 5px;
          line-height: 35px;
          margin: 0 8px 8px 0;

          &.cuisine-selected {
            border-color: rgb(255, 102, 59);
            color: rgb(255, 102, 59);
          }
        }
      }
    }

    .inner-price {
      box-sizing: border-box;
      width: 100%;
      height: 35%;
      box-shadow: 0 1px 1px #d0d0d0;
      padding: 5px 10px;

      .price-header {
        text-align: left;
        padding: 5px 0;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .price-select {
        text-align: left;
        .price-count {
          text-align: center;
          display: inline-block;
          width: 20%;
          height: 35px;
          border: 1px solid #a0a0a0;
          border-radius: 5px;
          line-height: 35px;
          margin: 0 8px 8px 0;

          &.cuisine-selected {
            border-color: rgb(255, 102, 59);
            color: rgb(255, 102, 59);
          }
        }
      }
    }

    .inner-btn {
      box-sizing: border-box;
      height: 15%;
      width: 100%;
      padding: 5px;
      overflow: hidden;

      .btn {
        width: 48%;
        height: 35px;
        display: inline-block;
        line-height: 35px;
        border: 1px solid #a0a0a0;
        border-radius: 5px;

        &.submit-btn {
          background-color: rgb(255, 105, 52);
          color: #fff;
          border-color: rgb(255, 105, 52);

          &.disabled-btn {
            background-color: #707070;
          }
        }
      }
    }
  }

}
</style>
