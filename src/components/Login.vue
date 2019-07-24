<template>
    <div class="login">
      <div class="item">
        <div class="top">
          <h1>Please Log in</h1>
        </div>
        <div class="body">
          <p>
            <span>username:</span>
            <Input v-model="user.username" placeholder="Enter something..." clearable style="width: 200px" /></p>
          <p>
            <span>password:</span>
            <Input v-model="user.password" type="password" placeholder="Enter something..." clearable style="width: 200px" /></p>
        </div>
        <div class="bottom">
          <p>
            <Checkbox v-model="single">remeber me on this computer</Checkbox>
          </p>
          <div class="btns">
            <Button class="btn">REGISTER</Button>
            <Button class="btn" @click="login">LOGIN</Button>
          </div>
          <Icon type="ios-lock" class="lock"/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            single:false,
            user:{
              username:'',
              password:'',
            }
          }
      },
      methods:{
          login(){
            if(this.user.username != '' && this.user.password != ''){
              this.$router.push({
                path:'/home/st',
              })
            }else {
              alert('请输入账号密码');
            }
          }
      }
    }
</script>

<style scoped>
  .lock{
    font-size: 50px;
    position: absolute;
    top: 35px;
    left: -90px;
    color: silver;
  }
  .btn{
    background: #000;
  }
.login{
  height: 100vh;
  width: 100%;
  background: #000;
  border-top: 1px solid #000;
  position: relative;
  box-shadow: 0 40px 20px 0 ;
}
  .item{
    position: absolute;
    width: 360px;
    height: 245px;
    background: #fff;
    margin:0 auto;
    border: 1px solid #000;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -150px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 40px 10px 0;
  }
  .top{
    background: #eeeeee;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    /*box-shadow: 0 40px 20px 0 inset;*/
  }
  .body{
    width: 90%;
    margin: auto;
  }
  .body p{
    margin: 20px 0;
  }
  .body span{
    font-size: 16px;
    font-weight: bold;
  }
  .bottom{
    position: absolute;
    left: 120px;
    top: 170px;
  }
  .btns{
    margin-top: 10px;
    -webkit-box-reflect: below 20px -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
</style>
