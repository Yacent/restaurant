<template> 
    <span v-bind:class="['setbtn', isChoiced ? 'choicedbtn' : 'unchoicedbtn']"  @click="choice">{{text}}</span>    
</template>

<script>
export default {
  name: 'setbtn',
  props: ['itemid', 'text', 'isfull'],
  data () {
    return {
      isChoiced: false
    }
  },
  methods: {
    choice: function () {
      if (this.isfull === true && this.isChoiced === false) {
        return
      }
      var oldChoice = this.isChoiced
      this.isChoiced = !oldChoice
      this.$emit('choiceChange', [this.itemid, this.isChoiced])
    }
  }
}
</script>

<style lang="less" scoped>
  .setbtn{
      display: inline-block;
      position: absolute;
      width: 75px;
      height: 75px;
      padding: 10px;
      line-height: 75px;
      font-size: 16px;
  }
  .choicedbtn{
      background:url('../assets/circle1.png') top center no-repeat;     
      background-size:cover;
      color: #fff;
  }
  .unchoicedbtn{
      background:url('../assets/circle2.png') top center no-repeat;
      background-size:cover;
      color: rgb(245,87,88);
  }
</style>