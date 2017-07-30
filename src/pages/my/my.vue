<template>
  <div id="my">
    <div class="avatar-container">
        <div>
          <img :src="user.avatar" alt="" :title="user.name" :style="{width:'20%'}">
          <img :src="user.sex == 0? pics.male : pics.female" alt="" :style="{width:'20px',position:'absolute',margin:'45px -10px 0 0'}">
        </div>
        <p>{{user.name}}</p>
    </div>
    <ul class="mylist">
      <li><span class="l-info">昵称</span><span class="l-value">{{user.name}}</span></li>
      <li><span class="l-info">性别</span><span class="l-value">{{user.sex === 0 ? '男':'女'}}</span></li>
      <li><span class="l-info">菜品</span><span class="l-value">{{user.food}}</span></li>
      <li><span class="l-info">口味</span><span class="l-value">{{user.taste}}</span></li>
      <li><a :href="'/main/mypoint'" class="ticket l-info">积分饭票 <img :src="pics.right_arrow" alt="" ></a></li>
    </ul>
  </div>
</template>

<script>
import {getUserInfo} from '../../api'
var foods = [{id: 0, text: '中餐'}, {id: 1, text: '西餐'}, {id: 2, text: '粤菜'}, {id: 3, text: '东南亚'}, {id: 4, text: '粉面食'}, {id: 5, text: '汤锅'}, {id: 6, text: '甜点'}, {id: 7, text: '饮品'}]
var tastes = [{id: 0, text: '麻辣'}, {id: 1, text: '香辣'}, {id: 2, text: '咸鲜'}, {id: 3, text: '清淡'}, {id: 4, text: '酱香'}, {id: 5, text: '糖醋'}, {id: 6, text: '劲脆'}, {id: 7, text: '香甜'}, {id: 8, text: '酸辣'}]
export default {
  name: 'my',
  data () {
    var pics = {
      male: require('../../assets/userinfo_icon_male.png'),
      female: require('../../assets/userinfo_icon_female.png'),
      right_arrow: require('../../assets/ic_right_arrow.png')
    }
    return {
      user: {},
      pics: pics
    }
  },
  created () {
    getUserInfo().then(response => {
      if (response.data === 'request error') {
        window.location = '/login.html'
      }
      var data = response.data
      var sex = data.sex === 'm' ? 0 : 1
      var foodids = data.style.split(' ')
      var tasteids = data.taste.split(' ')
      var foodtext = []
      var tastetext = []
      for (let item in foodids) {
        foodtext.push(foods[item].text)
      }
      for (let item in tasteids) {
        tastetext.push(tastes[item].text)
      }
      var user = {
        name: data.name,
        sex,
        taste: tastetext.join('、'),
        food: foodtext.join('、'),
        avatar: localStorage.AVATAR || require('../../assets/ic_head_default.png')
      }
      this.user = user
    })
  }
}
</script>

<style lang="less" scoped>
  .avatar-container {
      width: 100% ;
      height: 150px ;
      padding-top:10px;
      background: url('../../assets/u484.jpg') no-repeat center center ;
      z-index: -1000 ;
      color: #666;
      background-size: cover;

     
  }
  .mylist {
      padding: 0;
      color: #000;

      a{
        text-decoration:none;
        color: #000;
      }
      li {
        list-style-type: none ;
        margin:0 5%;
        height:30px;
        line-height:30px;
        border-bottom:1px solid #ccc;
        text-align: right;

        .l-info{
            float: left;
        }
        .ticket{
          display: block;
          width: 100%;
          height: 100%;
          text-align: left;
          
          img{
            float: right;
            height: 80%;
            margin-top:2%;
          }
        }
      }
  }
</style>