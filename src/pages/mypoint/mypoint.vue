<template>
  <div id="mypoint">
     <headbar :url="'/main/my'" :title="'积分兑换'"></headbar>
     <div class="ponit_static" >
      <div><img :src="pics.point_icon" alt="" :style="{left:'19%'}">剩余积分：{{points}}分</div>
      <div><img :src="pics.tickets_icon" alt="" :style="{left:'19%'}">剩余夜宵券：{{tickets}}张</div>
    </div>
    <p><a href="#" class="gettic" v-on:click="getTicket"><img :src="pics.ticker" alt=""></a></p>
    <confirm-status :iconName="name" :content="cont" v-if="show" @hideStatus="hideShow"></confirm-status>
  </div>
</template>

<script>
import headbar from '../../components/headbar'
import confirm from '../../components/confirm'
import {exchangeVoucher} from '../../api'
import confirmStatus from '../../components/confirmStatus.vue'
export default {
  name: 'mypoint',
  data () {
    var points = 0
    var tickets = 0
    return {
      points: points,
      tickets: tickets,
      name: '',
      cont: '',
      show: false,
      pics: {
        ticker: require('../../assets/ic_food_ticket_card.jpg'),
        point_icon: require('../../assets/ic_food_score.png'),
        tickets_icon: require('../../assets/ic_food_ticket.png')
      }
    }
  },
  methods: {
    getTicket: function () {
      if (this.points >= 20) {
        exchangeVoucher(1).then(response => {
          if (response.data === 'request error') {
            window.location = '/login.html'
          }
          var data = response.data
          this.name = 'check'
          this.cont = '成功'
          this.show = true
          this.points = data.score
          this.tickets = data.voucher
        })
      }
    },
    hideShow () {
      this.show = false
    }
  },
  created () {
    exchangeVoucher(0).then(response => {
      if (response.data === 'request error') {
        window.location = '/login.html'
      }
      var data = response.data
      this.points = data.score
      this.tickets = data.voucher
    })
  },
  components: {
    headbar,
    confirm,
    confirmStatus
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
