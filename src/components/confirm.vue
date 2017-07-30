<template>
  <div id="confirm-tips">
    <div class="outer-mask"></div>
    <div class="confirm-table">
      <div class="confirm-detail">
        <div class="confirm-title">
          {{ title }}
        </div>
        <div class="confirm-content">
          {{ content }}
        </div>
      </div>
      <div class="confirm-btn">
        <div class="cancel-btn btn" @click="cancel()">取消</div>
        <div class="yes-btn btn" @click="submitConfirm()">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
// 使用的时候，取消的时候调用的是 btnHide，emit一下，在confirm当中添加 btnHide事件的监听
// 在 confirm 当中 v-if 设置变量
// 具体可以看 confirm.vue 当中的例子，在 header当中，点击，将confirmtable 显示出来

export default {
  name: 'confirm',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default: 'content'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    submitConfirm () {
      console.log('success')
      this.$emit('btnHide', '1111')
    },
    cancel () {
      console.log('failed')
      this.$emit('btnHide')
    }
  }
}
</script>

<style lang="less">
#confirm-tips {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 16;

  .outer-mask {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .4;
  }

  .confirm-table {
    width: 70%;
    height: 180px;

    position: absolute;
    left: 50%;
    top: 38%;
    transform: translate(-50%, -50%);
    background: #fff;

    border-radius: 4px;
    box-shadow: 0px 0px 10px #404040;

    .confirm-detail {
      width: 100%;
      height: 130px;

      .confirm-title {
        font-size: 20px;
        padding: 13px 0;
        color: #303030;
      }

      .confirm-content {
        padding: 0 15px;
        text-align: left;
        color: #808080;
      }
    }

    .confirm-btn {
      border-top: 1px solid #e0e0e0;

      .btn {
        height: 49px;
        display: inline-block;
        width: 48%;
        line-height: 49px;
        letter-spacing: 3px;
        vertical-align: middle;

        &.yes-btn {
          border-left: 1px solid #e0e0e0;
          color: rgb(255, 171, 46);
          font-size: 19px;
        }
      }
    }
  }
}
</style>
