<template>
  <div>
    <div >
      <img  class="msg_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552990576366&di=e27648614ef4125e66b4662ddd8799c3&imgtype=0&src=http%3A%2F%2Fs7.sinaimg.cn%2Fmw690%2F001m1Utdzy6ZLnVyRxQe6%26690"/>
      <!--<div class="msg_div1">-->
      <!--</div>-->
      <div class="msg_div">
        <div>
          <text class="message">{{msg}}</text>
          <text class="message1 message">{{msg}}</text>
        </div>
        <text class="message2 message">{{msg}}</text>
        <div>
          <text class="message">{{msg}}</text>
          <text class="message1 message">{{msg}}</text>
        </div>
      </div>
    </div>
    <div class="btn_div">
      <button @click="sayhello()" class="but">sayhello</button>
      <button @click="topage()" class="but">topage</button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button size="large">large</mt-button>
    </div>
  </div>

</template>
<script>
  const modal = weex.requireModule('modal');
  const toast = message =>{
      modal.toast({
          message,
          duration:1,
      })
  }
  export default {
      data(){
          return{
              msg:'哈哈哈1122',
          }
      },
      methods: {
          sayhello(){
              console.log("helloss");
              toast(this.msg);
          },
          topage(){
              this.$router.push('/dear')
          }

      }

  }
</script>
<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }

  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
    width: 200px;
    height: 50px;
    margin: 10px;
  }
  .message1 {
    position: absolute;
    right: 100px;

  }
  .msg_img{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    position: absolute;
    top: 0; bottom:0;
    margin: auto;
  }
  .msg_div{
    position: relative;
    left: 150px;
  }
  .msg_div1{
    display: flex;
    justify-content:center;
    align-items:Center;
  }
  .but {
    width: 160px;
    height: 130px;
    font-size: 38px;
  }
  .btn_div{
    display: inline;
  }
</style>