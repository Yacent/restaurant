<template>
  <div id="foodedit" class="foodedit" :style="{textAlign:'left'}">
    <p><span>菜品名称：</span><input v-model="mname"></p>
    <p><span>价格：</span><input v-model="mprice"></p>
    <p><span>位置：</span><input v-model="mposition" placeholder="如 12号窗口"></p>
    <p>
      <span>描述：</span>
      <textarea v-model="mdescribe" placeholder="对菜品的描述"></textarea>
    </p>
    <p>
      <span>口味：</span>
      <select v-model="mtaste">
        <option disabled value="">请选择</option>
        <option v-for="taste in tastes" :value="taste.id">{{taste.text}}</option>
      </select>
    </p>
    <p>
      <span>品类</span>
      <select v-model="mfood">
        <option disabled value="">请选择</option>
        <option v-for="food in foods" :value="food.id">{{food.text}}</option>
      </select>
    </p>
    <p><span>图片（最多3张）</span></p>
    <p><a class="commitbtn">确定</a></p>
  </div>
</template>

<script>
var foods = [{id: 0, text: '中餐'}, {id: 1, text: '西餐'}, {id: 2, text: '粤菜'}, {id: 3, text: '东南亚'}, {id: 4, text: '粉面食'}, {id: 5, text: '汤锅'}, {id: 6, text: '甜点'}, {id: 7, text: '饮品'}]
var tastes = [{id: 0, text: '麻辣'}, {id: 1, text: '香辣'}, {id: 2, text: '咸鲜'}, {id: 3, text: '清淡'}, {id: 4, text: '酱香'}, {id: 5, text: '糖醋'}, {id: 6, text: '劲脆'}, {id: 7, text: '香甜'}, {id: 8, text: '酸辣'}]
export default {
  name: 'foodedit',
  data () {
    return {
      foods,
      tastes
    }
  }
}
</script>

<style lang="less" scoped>
  .foodedit{
    text-aligin: left;

    span{
      display: inline-block;
      width: 200px;
      text-align: right;
    }

    input, textarea, select{
      border: 1px solid #DADADA;
      color: #888;
      height: 30px;
      margin-bottom: 10px;
      margin-right: 6px;
      outline: 0 none;
      padding: 3px 3px 3px 5px;
      width: 200px;
      font-size: 12px;
      line-height:15px;
      box-shadow: inset 0px 1px 4px #ECECEC;
    }
     textarea{
      padding: 5px 3px 3px 5px;
      height: 80px;
      margin-bottom: 0;
      width: 300px;
     }
  }
  .commitbtn{
    display: inline-block;
    background-color: rgb(22,155,213);
    width: 100px;
    height: 40px;
    line-height: 40px;
    color:#fff;
    text-align: center;
    margin-left:40%;
  }
</style>
