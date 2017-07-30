<template>
  <div id="tasteset">
    <h3>请选择您喜欢的口味</h3>

      <Setbtn v-for="item in foods"
            v-on:choiceChange="choicechange"
           :key="item.id"
           :itemid="item.id"
           :text="item.text"
           :isfull="isFull"
           :style="{left: position[item.id].left,top: position[item.id].top}"></Setbtn>    
    <div class="commitarea">
      <a class="commitbtn" @click="tasteset">确定</a>
    </div>
  </div>
</template>

<script>
var foods = [{id: 0, text: '麻辣'}, {id: 1, text: '香辣'}, {id: 2, text: '咸鲜'}, {id: 3, text: '清淡'}, {id: 4, text: '酱香'}, {id: 5, text: '糖醋'}, {id: 6, text: '劲脆'}, {id: 7, text: '香甜'}, {id: 8, text: '酸辣'}]
var position = [{
  left: '0%',
  top: '16%'
}, {
  left: '35%',
  top: '13%'
}, {
  left: '70%',
  top: '14%'
}, {
  left: '-2%',
  top: '39%'
}, {
  left: '10%',
  top: '60%'
}, {
  left: '46%',
  top: '54%'
}, {
  left: '38%',
  top: '33%'
}, {
  left: '80%',
  top: '40%'
}, {
  left: '75%',
  top: '63%'
}
]
import Setbtn from '../../components/setbtn'
import {setFavoriteTaste} from '../../api'
export default {
  name: 'tasteset',
  data () {
    return {
      foods: foods,
      position: position,
      choiced: [],
      isFull: false
    }
  },
  methods: {
    tasteset: function () {
      var choicedStr = this.choiced.join(',')
      setFavoriteTaste(1234, choicedStr).then(response => {
        console.log(response)
      }, response => {
        console.log('wrong:', response)
      })
    },
    choicechange: function (param) {
      var choiced = this.choiced
      var len = choiced.length
      console.log(this.choiced)
      var id = param[0]
      var isAdd = param[1]
      if (isAdd) {
        this.choiced.push(id)
        if (len + 1 === 3) {
          this.isFull = true
        }
      } else {
        for (var i = 0; i < len; i++) {
          if (choiced[i] === id) {
            this.choiced.pop(i)
            if (len - 1 === 2) {
              this.isFull = false
            }
          }
        }
      }
    }
  },
  created () {
  },
  components: {
    Setbtn
  }
}
</script>

<style lang="less" scoped>
  .commitarea{
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: center;
  }
  .commitbtn{
    display: inline-block;
    background-color: rgb(245,87,88);
    width: 100px;
    height: 40px;
    line-height: 40px;
    color:#fff;

  }
</style>