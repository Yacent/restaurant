<template>
  <div id="tencent-restaurant">
    <new-food></new-food>
    <today-menu></today-menu>
  </div>
</template>

<script>
import newFood from '../../components/newFood.vue'
import todayMenu from '../../components/todayMenu.vue'

export default {
  name: 'tencent',
  data () {
    return {
    }
  },
  components: {
    newFood,
    todayMenu
  }
}
</script>

<style lang="less" scoped>
#tencent-restaurant {
}
</style>
