<template>
  <div id="confirm-status">
    <div class="detail">
      <icon :name="iconName"></icon>
      <span>{{ content }}</span>
    </div>
  </div>
</template>

<script>
// 使用的时候，自动1s后调用 emit hideStatus，在confirm当中添加 hideStatus事件的监听
// 在 confirm 当中 v-if 设置变量
// 具体可以看 confirm.vue 当中的例子，在 header当中，点击，将confirmStatus 显示出来
export default {
  name: 'confirm-status',
  props: {
    iconName: {
      type: String,
      default: 'close'
    },
    content: {
      type: String,
      default: '失败'
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    setTimeout(() => {
      this.$emit('hideStatus')
    }, 1000)
  }
}
</script>

<style lang="less">
#confirm-status {
  width: 130px;
  height: 130px;
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #303030;
  opacity: .8;
  z-index: 23;
  border-radius: 10px;

  .detail {
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;

    svg {
      display: inline-block;
      width: 80px;
      height: 80px;
      margin-top: 5px;
    }

    span {
      display: block;
      text-align: center;
      font-size: 18px;
      letter-spacing: 2px;
      margin-top: 1px;
    }
  }
}
</style>
