<template>
  <div id="comments">
    <div class="header">
      <span @click="returnToDetail">
          <button class="cancel"><span>取消</span></button>
      </span>
      <div class="header-title">评论</div>
      <router-link to="/detail">
          <button @click="finish()" class="success"><span>发表</span></button>
      </router-link>
    </div>
    <div class="starDiv">
    	<span>星级</span>
      <div class="starList">
        <ul>
          <li v-for="(n, index) in me.score" key="index" @click="clickStarOn(index)">
            <img :src="starOn" alt="" class="star">
          </li>
          <li v-for="(n, index) in 5 - me.score" key="index" @click="clickStarDown(index)">
            <img :src="starDown" alt="" class="star">
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <textarea name="" id="" cols="30" rows="10" placeholder="亲，菜品口味如何，服务满意吗？">
    	{{me.comment}}
    </textarea>
    <p class="submit">发布评论成功可赢5积分</p>
    <img :src="uploadImage" alt="" class="uploadIcon">
    <img :src="'http://119.29.0.211:8001' + upImgSrc" alt="" class="uploadIcon" v-if="upImgSrc != ''">
    <div id="box">
      <vue-core-image-upload
        :class="['pure-button','pure-button-primary','js-btn-crop']"
        :crop="true" :url="url" :extensions="extensions" :text="text"  :input-of-file="inputOfFile" :up-img-src="upImgSrc"
        :crop-ratio="cropRatio"
      >
      </vue-core-image-upload>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import vueCoreImageUpload from '@/components/imgUp'

Vue.use(axios)

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

export default {
  name: 'comments',
  data () {
    return {
      me: {
        score: 0,
        comment: ''
      },
      starOn: require('../../assets/ic_star_pressed.png'),
      starDown: require('../../assets/ic_star.png'),
      uploadImage: require('../../assets/ic_upload_img_default.jpg'),
      upImgSrc: '', // 上传图片后返回的图片地址
      url: 'http://119.29.0.211:8001/upload_picture/', // 上传图片的接口地址
      text: '上传图片', // 按钮文本
      inputOfFile: 'img', // 上传文件的文件名
      cropRatio: '1:1', // 剪切框的宽高比
      extensions: 'png,gif,jpeg,jpg' // 上传图片类型
    }
  },
  components: {
    vueCoreImageUpload
  },
  created () {
    this.imgSrc()
  },
  events: {
    'imgFormChild': function (obj, id) {
      this.imgAll[id] = obj
      // console.log('info parent:', JSON.stringify(this.imgAll))
    }
  },
  methods: {
    finish () {
      axios.post('http://119.29.0.211:8001/publish_comment/', qs.stringify({
        // user_id: '',
        food_id: 2,
        content: this.me.comment,
        score: this.me.score,
        pic: 'http://119.29.0.211:8001' + this.upImgSrc
      }))
      .then(response => {
        // console.log(response)
        alert('发表评论成功，5积分已入账！')
        console.log(this.$route.params.commentId)
        this.$router.push('/detail/' + this.$route.params.commentId + '/?pos=' + this.$route.query.pos)
      })
      .catch(function (error) {
        console.log(error)
      })
      location.reload()
    },
    imgSrc () {
      // console.log(this.upImgSrc)
    },
    clickStarOn (index) {
      // console.log(index)
      this.me.score = index + 1
      // console.log(this.me.score)
    },
    clickStarDown (index) {
      // console.log(index)
      this.me.score = index + this.me.score + 1
      // console.log(this.me.score)
    },
    returnToDetail () {
      this.$router.push('/detail/' + this.$route.params.commentId + '/?pos=' + this.$route.query.pos)
    }
  }
}
</script>

<style lang="less" scoped>
#box{
  width: 200px;
  height: 100px;
  margin: 100px auto 0;
  text-align: center;
  background: #fff;
}

#comments {
  .header {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 1px 1px  #e0e0e0;
    position: fixed;
    top: 0;

    .header-title {
      z-index: -999;
      position: absolute;
      top: 0px;
      left: -6px;
      width: 100%;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      line-height: 70px;
      letter-spacing: 2px;
    }
  }
  .cancel {
    position: relative;
    top: 15px;
    left: -160px;
    width: 60px;
    height: 40px;
    /*float: left;*/
    border-width: 0;
    background-color: #fff;
    color: red;

    span {
      font-size: 20px;
      letter-spacing: 2px;
    }
  }
  .success {
    position: absolute;
    top: 15px;
    right: 20px;
    width: 60px;
    height: 40px;
    float: right;
    background-color: #f00;
    color: #fff;
    border-radius: 5px;
    border: 0;

    span {
      font-size: 20px;
      letter-spacing: 2px;
    }
  }
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    float: left;
  }
  hr {
    border-top: solid 20px #ddd;
  }
  textarea {
    width: 100%;
    height: 250px;
    position: relative;
    top: 50px;
    border-top: solid 10px #ddd;
    border-bottom: solid 10px #ddd;
    border-radius: solid 5px #ddd;
    font-size: 20px;
    text-align: left;
    padding: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .starDiv {
    span {
      position: relative;
      left: -160px;
      top: 80px;
      font-size: 20px;
      letter-spacing: 2px;
    }
    .starList {
      position: relative;
      top: 37px;
      left: 50px;
    }
    .star {
      width: 25px;
      height: 25px;
      padding: 1.5px;
    }
  }
  .uploadIcon {
    position: absolute;
    bottom: 130px;
    left: 150px;
    width: 100px;
    height: 100px;
    z-index: 999;
  }
  .submit {
    font-size: 15px;
    color: #000;
    float: right;
    position: relative;
    right: 10px;
    top: -15px;
  }
}
</style>
