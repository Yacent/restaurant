<template>
  <div id="mypoint">
     <headbar :url="'/main/my'" :title="'积分兑换'"></headbar>
     <div class="ponit_static" >     
      <div><img :src="pics.point_icon" alt="" :style="{left:'19%'}">剩余积分：{{points}}分</div>
      <div><img :src="pics.tickets_icon" alt="" :style="{left:'19%'}">剩余夜宵券：{{tickets}}张</div>
    </div>
    <p><a href="#" class="gettic" v-on:click="getTicket"><img :src="pics.ticker" alt=""></a></p>
  </div>
</template>

<script>
import headbar from '../../components/headbar'
export default {
  name: 'mypoint',
  data () {
    var points = 1000
    var tickets = 0
    return {
      points: points,
      tickets: tickets,
      pics: {
        ticker: require('../../assets/ic_food_ticket_card.jpg'),
        point_icon: require('../../assets/ic_food_score.png'),
        tickets_icon: require('../../assets/ic_food_ticket.png')
      }
    }
  },
  methods: {
    getTicket: function () {
      if (this.points > 100) {
        this.points -= 100
        this.tickets += 1
      }
    }
  },
  components: {
    headbar
  }
}
</script>

<style lang="less" scoped>
    .gettic{
      display:block;
      width:100%;
      img{
          width:80%
      }
    }
    .ponit_static{
      margin:20px 0 40px 0;
      div{
        margin-bottom:10px;
      }
      img{
        width:25px;
        position:absolute;
      }
    }
</style>