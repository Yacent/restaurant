<template>
  <div class="shuffling">
    <div class="fouce fl">
      <div class="focus">
        <ul class="showimg">
          <template v-for='sd in shufflingData'>
            <li v-if='shufflingId==$index' v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext'>
              <a target="_blank" :title="sd.title" class="img" :href="sd.href"><img :src="sd.url"/></a>
              <h3><a target="_blank" :title="sd.title" :href="sd.href">{{sd.title}}</a></h3>
            </li>
          </template>
        </ul>
        <div class='bullet-pagination'>
          <a class="bullet" v-bind:class="{'active': shufflingId==0}" v-on:click='bulletFunOne'></a>
          <a class="bullet" v-bind:class="{'active': shufflingId==1}" v-on:click='bulletFunTwo'></a>
          <a class="bullet" v-bind:class="{'active': shufflingId==2}" v-on:click='bulletFunThree'></a>
        </div>
        <div v-show='PreNext' class="preNext pre" v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext' v-on:click='preFun'></div>
        <div v-show='PreNext' class="preNext next" v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext' v-on:click='nextFun'></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'interval',
    components: {
    },
    ready: function () {
      var _this = this
      setInterval(function () {
        if (_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
          _this.shufflingId = parseInt(_this.shufflingId) + 1
        } else if (_this.shufflingId === _this.shufflingData.length - 1) {
          _this.shufflingId = 0
        }
      }, 5000)
    },
    methods: {
      bulletFunOne: function () {
        this.shufflingId = 0
      },
      bulletFunTwo: function () {
        this.shufflingId = 1
      },
      bulletFunThree: function () {
        this.shufflingId = 2
      },
      showPreNext: function () {
        this.PreNext = true
      },
      hiddenPreNext: function () {
        this.PreNext = false
      },
      preFun: function () {
        var _this = this
        if (_this.shufflingId > 0 && _this.shufflingId < _this.shufflingData.length) {
          _this.shufflingId = parseInt(_this.shufflingId) - 1
        }
      },
      nextFun: function () {
        var _this = this
        if (_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
          _this.shufflingId = parseInt(_this.shufflingId) + 1
        }
      }
    },
    data () {
      return {
        shufflingData: [{
          title: '',
          href: './../assets/detail.jpg',
          url: './../assets/detail.jpg'
        },
        {
          title: '',
          href: './../assets/detail.jpg',
          url: './../assets/detail.jpg'
        }, {
          title: '',
          href: './../assets/detail.jpg',
          url: './../assets/detail.jpg'
        }],
        shufflingId: 0,
        PreNext: false
      }
    }
  }

</script>

<style lang="less" scoped>
  .fouce {
    position: relative;
    left: 380px;
    overflow: hidden;
    height: 570px;
    width: 1100px;
  }

  .fl {
    float: left;
  }

  .focus {
    overflow: hidden;
  }

  .fouce ul {
    position: absolute;
  }

  .fouce ul li {
    float: left;
  }

  .fouce ul li a.img {
    display: block;
    height: 520px;
  }

  .showimg {
    width: 1440px;
    left: -0px;
  }

  .showimg img {
    display: block;
    width: 1100px;
    height: 520px;
  }

  .fouce .bullet-pagination {
    position: absolute;
    bottom: 50px;
  }

  .fouce ul li h3 {
    height: 40px;
    line-height: 40px;
    background-color: #ededed;
    text-align: center;
    font-size: 25px;
    width: 1100px;
  }

  .bullet-pagination {
    width: 100%;
    text-align: center;
    padding-top: 16px;
    clear: both;
    overflow: hidden;
  }

  .bullet {
    display: inline-block;
    background: #fff;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    margin-right: 5px;
    opacity: 0.8;
    -webkit-transition: opacity 0.8s linear;
    -moz-transition: opacity 0.8s linear;
    -ms-transition: opacity 0.8s linear;
    -o-transition: opacity 0.8s linear;
    transition: opacity 0.8s linear;
  }

  .bullet.active {
    background: #007cdb;
    opacity: 1;
    cursor: pointer;
  }

  .preNext {
    display: block;
    width: 31px;
    height: 41px;
    position: absolute;
    top: 200px;
    cursor: pointer;
  }

  .pre {
    background: url('./../assets/detail.jpg') no-repeat right center;
  }

  .next {
    background: url('./../assets/detail.jpg') no-repeat left center;
    right: 0px;
  }

  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
</style>
