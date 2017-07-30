<template>
  <div id="business">
    <div class="header">
      <div class="header-left">
        <img src="../../assets/business-logo.png" alt="商家客户端Logo">
      </div>
      <div class="icon-name">鹅味</div>
    </div>
    <div class="container">
      <div class="side-bar">
        <div class="side-bar-list" v-for="(list, i) in sideBarList" :key="i">
          <div class="list-title" @click="changeListState(i)">
            <span>{{ list.title }}</span>
            <icon name="chevron-down" v-show="sideBarSelected === i"></icon>
            <icon name="chevron-up" v-show="sideBarSelected !== i"></icon>
          </div>
          <div class="list-item" :class="[thirdBarState === index ? 'focus' : '']" v-for="(item, index) in list.restaurantList" :key="index" v-show="sideBarSelected === i" @click="changeThird(index, item.links)">
            <icon name="circle-o" v-show="thirdBarState === index"></icon>
            <icon name="circle" v-show="thirdBarState !== index"></icon>
            <span :class="[thirdBarState === index ? 'focus' : '']">{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="right-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'business',
  data () {
    return {
      sideBarList: [
        {
          title: '食堂列表',
          restaurantList: [
            {name: '腾讯大厦', links: 'tencent'},
            {name: '万利达大厦', links: 'malata'},
            {name: '科兴大厦', links: 'kexing'},
            {name: '飞亚达大厦', links: 'fiyta'},
            {name: '朗科大厦', links: 'netac'}
          ]
        },
        {
          title: '食堂监控',
          restaurantList: [
            {name: '腾讯大厦', links: 'tencent'},
            {name: '万利达大厦', links: 'malada'},
            {name: '科兴大厦', links: 'kexing'},
            {name: '飞亚达大厦', links: 'fiyta'},
            {name: '朗科大厦', links: 'netac'}
          ]
        }
      ],
      sideBarSelected: 0,
      thirdBarState: 0
    }
  },
  methods: {
    changeListState (index) {
      this.sideBarSelected = index
    },
    changeThird (index, links) {
      this.thirdBarState = index
      this.$router.push({name: 'businessR', params: {bPos: links}})
    }
  }
}
</script>

<style lang="less">
#business {
  position: relative;
  height: 100%;

  .header {
    width: 100%;
    height: 50px;
    background-color: #303030;
    text-align: left;

    .header-left {
      display: inline-block;
      vertical-align: middle;
      width: 41px;
      height: 41px;
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      top: 4px;
      left: 4px;

      img {
        width: 30px;
        vertical-align: -10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

    }

    .icon-name {
      display: inline-block;
      color: #fff;
      vertical-align: middle;
      vertical-align: -5px;
      margin-left: 10px;
      font-weight: bold;
      font-size: 18px;
    }
  }

  .container {
    width: 100%;
    min-height: 600px;
    height: 100%;
    box-sizing: border-box;
    padding-left: 150px;
    overflow: hidden;

    .side-bar {
      width: 150px;
      background-color: rgb(240, 246, 246);
      float: left;
      height: 100%;
      margin-left: -150px;
      margin-bottom: -3000px;
      padding-bottom: 3000px;
      border-right: 1px solid #e0e0e0;

      .side-bar-list {
        text-align: left;
        padding: 5px;

        .list-title {
          font-weight: bold;
          position: relative;
          margin-bottom: 10px;

          svg {
            width: 15px;
            height: 15px;
            position: absolute;
            top: 3px;
            right: 3px;
          }
        }

        .list-item {
          padding-left: 1px;
          font-size: 14px;
          margin-bottom: 5px;

          svg {
            width: 12px;
            height: 12px;
            vertical-align: middle;
          }

          span {
            margin-left: 3px;
            display: inline-block;
            vertical-align: middle;
            text-decoration: none;
            color: #808080;

            &.focus {
              color: blue
            }

            &:hover {
              cursor: pointer;
            }
          }

          &.focus {
            color: blue
          }
        }
      }
    }
  }

  .right-container {
    width: 100%;
    height: 100%;
  }
}
</style>
