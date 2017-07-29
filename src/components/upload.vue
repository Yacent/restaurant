<template>
  <div class="imgBox" v-bdstyle="compentstyle">
    ![](info.filePath)
  </div>
  <div class="btnBox">
    <input type="file" class="hidden" v-bindimgid="compentid" @change="sendFile">
    <div class="btn" @click="checkFile">上传</div>
    <div class="perBar" v-binduploadper="picUploadPer"></div>
  </div>
</template>

<script>
  import { fileImage } from ""  //上传接口

  export default {
    props: ['compentstyle', 'compentid'],  //父组件中,传递给图片上传组件的样式和ID,ID为了出来一个页面需要多个上传情况
    data() {
      return {
        info: {  //服务器返回的图片信息
          imgName: '',
          imgPath: './../assets/ic_upload_img_default.jpg',
          imgPreviewPath: ''
        },
        picUploadPer: "",//进度条
        isFinish: false,
      }
    },
    watch: {
      'info': function (now, old) {   //监听info,当图片信息更新时,子组件向父组件发送自定义事件
        this.$dispatch('imgFormChild', now, this.compentid)
      }
    },
    methods: {
      checkFile() {
        //let DOM = document.querySelector(`#${this.compentid}`)
        let DOM = this.els[this.compentid]
        DOM.click()
      },
      sendFile(e) {  //头像
        this.picUploadPer = ''
        this.isFinish = false

        let image = e.target,
        file = image.files[0]

        this.fileInfo(file)  //获取上传图片的本地信息
        this.uploadImg(file) //进行上传
      },
      postImagePath(imgObj) {   //通过对this.info的监听,获得服务器返回信息后,才向父组件派发
        this.$dispatch('imgFormChild', imgObj)
      },
      fileInfo(file) {
        this.fileName = file.name
        this.fileSize = parseInt(file.size / 1000) + "KB"
      },
      uploadImg(file) {
        let _this = this

        function getData(data) {
          let img = data.files[0]
          _this.info = img
        }

        function getPer(per) {
          _this.picUploadPer = per
          _this.isFinish = per == "100" ? true : false
        }

        fileImage(file, getData, getPer)
      }
    }
  }

</script>
