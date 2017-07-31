<template>
  <div id="new-food">
    <div class="new-title">新品推荐({{newList.length}})</div>
    <div class="new-show">
      <router-link to="/" v-for="(item, index) in newList" :key="index">
        <img :src="item.pic" alt="item.rest">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-food',
  props: ['newList'],
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
#new-food {
  background: #fff;
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;

  .new-title {
    padding: 8px 0;
    font-size: 22px;
    text-align: left;
    font-weight: bold;
    color: #404040;
  }
  .new-show {
    display: inline-block;
    text-align: left;
    height: 135px;
    width: 100%;
    padding-bottom: 10px;

    overflow-x: auto;

    a {
      display: inline-block;
      width: 130px;
      height: 130px;
      overflow: hidden;

      &:not(:last-child) {
        margin-right: 8px;
      }

      img {
        min-height: 130px;
        min-width: 130px;
      }
    }
  }
}
</style>
