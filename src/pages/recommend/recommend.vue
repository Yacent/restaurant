<template>
  <div id="recommend">
    <confirm-status v-if="confirmStatus" @hideStatus="hideStatus"></confirm-status>
    <confirm v-if="showConfirmTable" @btnHide="hideConfirm" :title="title" :content="content"></confirm>
    <div class="recommend-header" @click="showConfirm">
      <span>推荐菜</span>
    </div>
    <div class="recommend-main">
      <recommend-food :list="recommendList"></recommend-food>
    </div>
  </div>
</template>

<script>
import RecommendFood from '../../components/recommendFood.vue'
import Confirm from '../../components/confirm.vue'
import ConfirmStatus from '../../components/confirmStatus.vue'
import {recommendFood} from '../../api'
export default {
  name: 'recommend',
  data () {
    return {
      showConfirmTable: false,
      confirmStatus: false,
      title: '兑换宵夜券',
      content: '哈哈哈哈哈',
      recommendList: []
    }
  },
  created () {
    recommendFood().then(response => {
      if (!response.data.length) {
        return
      }
      var list = response.data || []
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
        this.recommendList = list
      }
    })
  },
  methods: {
    showConfirm () {
      this.showConfirmTable = !this.showConfirmTable
    },
    hideConfirm (status) {
      console.log(status)
      this.showConfirmTable = !this.showConfirmTable
    },
    showConfirmStatus () {
      this.confirmStatus = !this.confirmStatus
    },
    hideStatus () {
      this.confirmStatus = !this.confirmStatus
    }
  },
  components: {
    RecommendFood,
    Confirm,
    ConfirmStatus
  }
}
</script>

<style lang="less" scoped>
#recommend {
  .recommend-header {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 1px 1px #e0e0e0;

    span {
      font-size: 24px;
      font-weight: bold;
      line-height: 70px;
    }
  }
}
</style>
