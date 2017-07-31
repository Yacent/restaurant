<template>
  <div id="foodset">
    <h3>请选择您喜欢的菜品</h3>

      <Setbtn v-for="item in foods"
            v-on:choiceChange="choicechange"
           :key="item.id"
           :itemid="item.id"
           :text="item.text"
           :isfull="isFull"
           :style="{left: position[item.id].left,top: position[item.id].top}"></Setbtn>
    <div class="commitarea">
      <a :class="['commitbtn', isEmp ? 'defaultbtn' : '' ]" @click="foodset">确定</a>
    </div>
  </div>
</template>

<script>
var foods = [{id: 0, text: '中餐'}, {id: 1, text: '西餐'}, {id: 2, text: '粤菜'}, {id: 3, text: '东南亚'}, {id: 4, text: '粉面食'}, {id: 5, text: '汤锅'}, {id: 6, text: '甜点'}, {id: 7, text: '饮品'}]
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
  left: '50%',
  top: '58%'
}, {
  left: '38%',
  top: '33%'
}, {
  left: '80%',
  top: '40%'
}
]
import Setbtn from '../../components/setbtn'
import {setFavoriteFood, userLogin, getUserInfo} from '../../api'
export default {
  name: 'foodset',
  data () {
    return {
      foods: foods,
      position: position,
      choiced: [],
      isFull: false,
      isEmp: true
    }
  },
  watch: {
    choiced: function () {
      this.isEmp = this.choiced.length === 0
    }
  },
  methods: {
    choicechange: function (param) {
      var choiced = this.choiced
      var len = choiced.length
      var text = param[0]
      var isAdd = param[1]
      if (isAdd) {
        this.choiced.push(text)
        if (len + 1 === 3) {
          this.isFull = true
        }
      } else {
        for (var i = 0; i < len; i++) {
          if (choiced[i] === text) {
            this.choiced.pop(i)
            if (len - 1 === 2) {
              this.isFull = false
            }
          }
        }
      }
    },
    foodset: function () {
      if (this.choiced.length === 0) {
        console.log('还没选择数据')
        return
      }
      var choicedStr = this.choiced.join(' ')
      setFavoriteFood(choicedStr).then(response => {
        if (response.data === 'request error') {
          window.location = '/login.html'
        }
        if (response.data === 'success') {
          this.$router.push('/tasteset')
        }
      }, response => {
        console.log('wrong:', response)
      })
    }
  },
  created () {
    var user = {
      user_id: localStorage.openId,
      age: 0,
      sex: localStorage.gender || 'm',
      name: localStorage.nickname || ''
    }
    userLogin(user).then(response => {
      localStorage.TOKEN = response.data.csrf
    }).then(() => {
      getUserInfo().then(response => {
        console.log(response)
      })
    })
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
  .defaultbtn{
    background: #ccc;
  }
</style>
