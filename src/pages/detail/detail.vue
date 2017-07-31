<template>
  <div id="detail">
    <div class="header">
      <router-link :to="'/restaurant/' + $route.query.pos" class="return-to-restaurant">
          <icon name="chevron-left"></icon>
      </router-link>
      <div class="header-title">菜品详情</div>
      <interval></interval>
    </div>
    <div class="foodName">
      <p>{{food.name}}</p>
    </div>
    <p class="foodCon">{{food.content}}</p>
    <hr>
    <div class="rec">
      <span class="recSpan">菜品点评</span>
      <span class="recSpan">{{food.likes}}人推荐</span>
      <span class="recSpan">￥{{food.price}}</span>
    </div>
    <hr>
    <div>
      <ul class="users">
        <li v-for="user in users" class="userList">
          <div class="userList">
            <img src="http://119.29.0.211:8001/static/11.jpg" alt="" class="head">
            <div class="right">
              <div class="userInfo">
                <span class="name">{{user.name}}</span>
                <span class="date">{{user.time}}</span>
              </div>
              <span class="score">打分</span>
              <div class="starList">
                <ul>
                  <li v-for="n in user.score">
                    <img :src="starOn" alt="" class="star">
                  </li>
                  <li v-for="n in 5 - user.score">
                    <img :src="starDown" alt="" class="star">
                  </li>
                </ul>
              </div>
              <p class="comment">{{user.content}}</p>
              <!-- <img :src="user.image_url" alt=""> -->
            </div>
          </div>
          <hr class="liHr">
        </li>
      </ul>
    </div>
    <ul class="feedback">
    <div @click="recommend()">
      <li v-if="like">
        <img :src="starRecommend" alt="" class="liImg" ><span class="liText">推荐</span>
      </li>
      <li v-else>
        <img :src="starRecommendPressed" alt="" class="liImg" ><span class="liText">推荐</span>
      </li>
    </div>
      <li>
        <router-link :to="'/comments/' + $route.params.foodId + '/?pos=' + $route.query.pos"><img :src="starComment" alt="" class="liImg"><span class="liText">写点评</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import interval from '@/components/interval'
// import imgupload from '@/components/upload'

Vue.use(axios)

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

export default {
  name: 'detail',
  data () {
    return {
      food: {
      },
      users: [
      ],
      like: true,
      starOn: require('../../assets/ic_star_pressed.png'),
      starDown: require('../../assets/ic_star.png'),
      starRecommend: require('../../assets/ic_like.png'),
      starRecommendPressed: require('../../assets/ic_like_pressed.png'),
      starComment: require('../../assets/ic_edit.png')
    }
  },
  components: {
    interval
    // imgupload
  },
  created () {
    this.request()
  },
  methods: {
    request () {
      axios.get('http://119.29.0.211:8001/get_food_details/1/')
      .then(response => {
        this.food = response.data
        console.log(this.food)
      })
      .catch(function (error) {
        console.log(error)
      })
      // axios.get('http://119.29.0.211:8001/get_food_comment/1/?begin=0&count=10')
      axios.get('http://119.29.0.211:8001/get_food_comment/1/')
      .then(response => {
        console.log(response)
        this.users = response.data
        console.log(this.users)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    recommend () {
      let state = this.like
      this.like = !state
      if (state) {
        axios.post('http://119.29.0.211:8001/like_food/', qs.stringify({
          food_id: this.route.params.foodId
        }))
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      } else {
        axios.post('http://119.29.0.211:8001/dislike_food/', qs.stringify({
          food_id: this.food.id
        }))
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
#detail{
  .header {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 1px 1px  #e0e0e0;
    position: fixed;
    top: 0;

    .return-to-restaurant {
      display: inline-block;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translate(0, -50%);

      svg {
        height: 25px;
        width: 25px;
        color: #909090;
      }
    }

    .header-title {
      width: 100%;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      line-height: 70px;
      letter-spacing: 2px;
    }
  }

  .foodName {
    width: 100%;
    height : 50px;
    margin-top: 70px;
    line-height: 50px;
    text-align: left;
    font-size: 25px;
    letter-spacing: 2px;
    background-color: black;
    color: #fff;
    p {
      margin-left: 15px;
      left-padding: 5px;
    }
  }

  .foodCon {
    text-align: left;
    font-weight: bold;
    padding-left: 15px;
    padding-right: 10px;
  }

  .rec {
    width: 100%;
    height: 25px;
    top-padding: 60px;
    left-padding: 5px;
    text-align: left;
    span {
      padding: 0 15px 0 15px;
      font-size: 15px;
      font-weight: bold;
      width: 100px;
    }
  }

  hr {
    border-top: solid 0.2px #ddd;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
    float: left;
  }

  .users {
    width: 100%;
    margin: 0;
  }

  .userList{
    width: 90%;
  }

  .liHr {
    position: relative;
    top: 0;
    margin-left: -50px;
  }

  img {
    left-margin: -100px;
    width: 50px;
    height: 50px;
    float: left;
  }

  .head {
    margin-left: -20px;
  }

  .right {
    margin-left: 50px;
    margin-bottom: -10px;
    margin-top: 10px;
    .userInfo {
      margin-left: -80px;
      span {
      }
      .name {
        margin-left: -50px;
      }
      .date {
        margin-right: -25px;
        float: right;
      }
    }
    .score {
      width: 150px;
      margin-left: -200px;
    }
    .starList {
      position: relative;
      top: -21px;
      left: 30px;
    }
    .star {
      width: 18px;
      height: 18px;
      padding: 1.5px;
    }
  }

  .comment {
    position: relative;
    top: -15px;
    left: -160px;
  }

  .feedback {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    margin: 0;
    padding: 0;
    .li {
      display: inline-block;
      width: 50%;
      height: 100%;
    }
    border-top: 0.2px solid #ddd;
    background-color: #fff;
  }

  .liText {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    color: #797979;
    border-right: 0.2px solid #ddd;
    padding-right: 60px;
  }

  .liImg {
    position: relative;
    top: 5px;
    width: 25px;
    height: 25px;
    margin-left: 61px;
    margin-top: 10px;
    margin-right: 10px;
  }
}
</style>
