<template>
  <div id="my">
    <div class="avatar-container">
        <img :src="user.avatar" alt="" :title="user.name">
        <p>{{user.name}}</p>
    </div>
    <ul class="mylist">
      <li><span class="l-info">昵称</span><span>{{user.name}}</span></li>
      <li><span class="l-info">性别</span><span>{{user.sex ? '男':'女'}}</span></li>
      <li><span class="l-info">口味</span><span>{{user.taste}}</span></li>
      <li><span class="l-info"><a :href="'/main/mypoint'">积分饭票</a></span><span class="icon"></span></li>
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
      avatar: '' || require('../../assets/u583.png'),
      taste: '香辣、四川'
    }
    return {
      user: user
    }
  }
}
</script>

<style lang="less" scoped>
  .avatar-container {
      width: 100% ;
      height: 150px ;
      padding-top:10px;
      background: url('../../assets/u581.jpg') no-repeat center center ;
      z-index: -1000 ;
      text: center ;
      color: #fff;

      img{
          width:20%;
      }
  }
  .mylist {
      padding: 0;
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

        .icon{
            width:10px;
            height:10px;
            background: url('../../assets/u387.png') ; 
        }
      }
  }
</style>