<template>
  <div id="detail">
    <div class="interval">
      <interval></interval>
      <span>{{food.name}}</span>
    </div>
    <div class="intro">
      <p>{{food.introduction}}</p>
    </div>
    <div class="rec">
      <span>菜品点评</span>
      <span>{{food.recommend}}人推荐</span>
    </div>
    <ul>
      <li v-for="user in users">
        <div class="userList">
          <img :src="user.head" alt="">
          <div>
            <span>{{user.name}}</span>
            <span>{{user.date}}</span>
            <span>打分</span>
            <div>
              <ul>
                <li v-for="n in {{user.score}}">
                  <img :src="starOn" alt="">
                </li>
                <li v-for="n in 5 - {{user.score}}">
                  <img :src="starDown" alt="">
                </li>
              </ul>
            </div>
            <p>{{user.comment}}</p>
          </div>
          <div>
            <div>
              <img :src="starRecommend" alt="">推荐
            </div>
            <div>
              <a href=""><img :src="starComment" alt="">写点评</a>
            </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  import interval from '@/components/interval'

  export default {
    name: 'detail',
    data: {
      food: {
        name: '水晶豆腐',
        introduction: '极其美味',
        recommend: 520
      },
      users: [
        {
          head: require('../../assets/ic_head_default.png'),
          name: 'haha',
          date: '1月1日',
          score: 5,
          comment: '好吃'
        },
        {
          head: require('../../assets/ic_head_default.png'),
          name: 'haha',
          date: '1月1日',
          score: 5,
          comment: '好吃'
        }],
      me: {
        recommend: false
      },
      starOn: require('../../assets/ic_star_pressed.png'),
      starDown: require('../../assets/ic_star.png'),
      starRecommend: require('../../assets/ic_like.png'),
      starComment: require('../../assets/ic_edit.png')
    },
    components: {
      interval
    }
  }

</script>

<style lang="less" scoped>

</style>
