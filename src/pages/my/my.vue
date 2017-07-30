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
      <li><span class="l-info">性别</span><span class="l-value">{{user.sex ? '男':'女'}}</span></li>
      <li><span class="l-info">菜品</span><span class="l-value">{{user.food}}</span></li>
      <li><span class="l-info">口味</span><span class="l-value">{{user.taste}}</span></li>
      <li><a :href="'/main/mypoint'" class="ticket l-info">积分饭票 <img :src="pics.right_arrow" alt="" ></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    var user = {
      name: '鹅厂小吃货',
      sex: 0,
      avatar: '' || require('../../assets/ic_head_default.png'),
      taste: '香辣、麻辣',
      food: '中餐、西餐'
    }
    var pics = {
      male: require('../../assets/userinfo_icon_male.png'),
      female: require('../../assets/userinfo_icon_female.png'),
      right_arrow: require('../../assets/ic_right_arrow.png')
    }
    return {
      user: user,
      pics: pics
    }
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