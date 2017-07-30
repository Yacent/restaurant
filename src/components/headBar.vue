<template>
  <div class="headbar">
    <a :href="url"><img :src="pics.goback_icon" width="30" alt=""></a>
    {{title}}
  </div>
   
</template>

<script>
export default {
  name: 'headbar',
  props: ['url', 'title'],
  data () {
    return {
      pics: {
        goback_icon: require('../assets/ic_navigationbar_back.png'),
        goback_pressed_icon: require('../assets/ic_navigationbar_back_pressed.png')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .headbar{
    box-shadow: 0 1px 1px #e0e0e0;
    height: 50px;
    line-height: 50px;
    color: #000;
    font-weight: bolder;
    font-size: 16px;
    a{
      position: absolute;
      left: 10px;
      top: 7px;
    }
  }
</style>