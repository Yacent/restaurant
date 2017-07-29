<template>
  <div id="comment">
	  <div class="star">
	  	<span>星级</span>
	  	<ul>
		    <li v-for="n in {{me.score}}">
		    	<img :src="starOn" alt="">
		    </li>
		    <li v-for="n in 5 - {{me.score}}">
		    	<img :src="starDown" alt="">
		    </li>
		</ul>
	  </div>
	  <textarea name="" id="" cols="30" rows="10" placeholder="亲，菜品口味如何，服务满意吗？">
	  	{{me.comment}}
	  </textarea>
	  <p>发布评论成功可赢5积分</p>
	  <div>
	  	<img :src="defPhoto" alt="">
	  	<imgupload :compentstyle="imgStyle0" :compentid="fileComponents[0]"> </imgupload>
      <imgupload :compentstyle="imgStyle1" :compentid="fileComponents[1]"> </imgupload>
      <imgupload :compentstyle="imgStyle2" :compentid="fileComponents[2]"> </imgupload>
	  	<p>发布评论成功可赢5积分</p>
	  </div>
  </div>
</template>

<script>
import imgupload from '@/components/upload'

export default{
    name: 'comment',
    data () {
        me: {
          score: 4,
          comment: '美味'
        }
        return {
            me : me,
            starOn: require('../../assets/ic_star_pressed.png'),
            starDown: require('../../assets/ic_star.png'),
            defPhoto: require('../../assets/ic_upload_img_default.jpg'),
            fileComponents:['file0','flie1','file2'],
            imgStyle0:{
                width:'100px',
                height:'100px',
                backgroundColor: '#eee'
            },
           imgStyle1:{
                width:'150px',
                height:'150px',
                backgroundColor: '#eee'
            },
           imgStyle2:{
                width:'200px',
                height:'200px',
                backgroundColor: '#eee'
            },
            imgAll:{}
            /*
                imgAll.file0{}
                imgAll.file1{}
                imgAll.file2{}
            */
        }
    },
    components:{
        imgupload
    },
    events:{
        'imgFormChild':function(obj,id){
            this.imgAll[id]=obj
            console.log('info parent:',JSON.stringify(this.imgAll))
        }
    }
}
</script>

<style lang="less" scoped>
</style>
