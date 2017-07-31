<template>
  <div id="box">
    <vue-core-image-upload
      :class="['pure-button','pure-button-primary','js-btn-crop']"
      :crop="true" :url="url" :extensions="extensions" :text="text"  :input-of-file="inputOfFile" :up-img-src="'http://119.29.0.211:8001' + upImgSrc"
      :crop-ratio="cropRatio"
    >
    </vue-core-image-upload>
  </div>
</template>
<script>
import vueCoreImageUpload from '@/components/imgUp'

export default {
  data () {
    return {
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
  methods: {
    imgSrc () {
      console.log(this.upImgSrc)
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
</style>