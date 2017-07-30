<template>
  <div id="recommend">
    <confirm-status v-if="confirmStatus" @hideStatus="hideStatus"></confirm-status>
    <confirm v-if="showConfirmTable" @btnHide="hideConfirm" :title="title" :content="content"></confirm>
    <div class="recommend-header" @click="showConfirm">
      <span>推荐菜</span>
    </div>
    <div class="recommend-main">
      <recommend-food></recommend-food>
    </div>
  </div>
</template>

<script>
import RecommendFood from '../../components/recommendFood.vue'
import Confirm from '../../components/confirm.vue'
import ConfirmStatus from '../../components/confirmStatus.vue'

export default {
  name: 'recommend',
  data () {
    return {
      showConfirmTable: false,
      confirmStatus: false,
      title: '兑换宵夜券',
      content: '哈哈哈哈哈'
    }
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
