<template>
  <div id="mypoint">
    <div>     
      <p><i class="ip"></i>剩余积分：{{points}}分</p>
      <p><i class="it"></i>剩余夜宵券：{{tickets}}张</p>
    </div>
    <p><a href="#" class="gettic" v-on:click="getTicket"><img :src="tickerpic" alt=""></a></p>
  </div>
</template>

<script>
export default {
  name: 'mypoint',
  data () {
    var points = 1000
    var tickets = 0
    return {
      points: points,
      tickets: tickets,
      tickerpic: require('../../assets/u749.jpg')
    }
  },
  methods: {
    getTicket: function () {
      if (this.points > 100) {
        this.points -= 100
        this.tickets += 1
      }
    }
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
</style>