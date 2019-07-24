<template>
    <div class="top">
      <Menu mode="horizontal" theme="dark" active-name="1" class="ssss">
        <MenuItem name="logo" class="logo">
          <Icon type="md-reorder"
                @click="toggleLeft()"
                size="30"
                color="#fff"/>
        </MenuItem>

        <div class="navbar">
          <ul>
            <li>
              <a href="#">
                <Icon
                  size="22"
                  type="ios-mail-outline"
                />
                <span>4</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Icon
                  size="20"
                  type="ios-notifications-outline"
                />
                <span style="background: #f39c12">10</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Icon
                  size="22"
                  type="ios-flag-outline"
                />
                <span style="background: #dd4b39">9</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/user2-160x160.jpg">
                <mark style="color: #fff;background: none">Alexander Pierce</mark>
              </a>
            </li>
            <li>
              <a href="#">
                <Icon
                  size="22"
                  type="logo-steam" />
              </a>
            </li>
          </ul>
        </div>

      </Menu>
    </div>
</template>

<script>
    export default {
      name: "Top",
      computed:{

      },
      methods:{
        //通过点击当前图标切换left中的menu是否展开
        toggleLeft(){
            // 设置vuex中的leftToggle
          this.$store.commit("setLeftToggle");
        }
      }
    }
</script>

<style scoped>
  .navbar {
    float: right;
  }
  .navbar ul {
    float: left;
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  .navbar ul li {
    position: relative;
    float: left;
    display: block;
  }
  .navbar ul li a {
    text-decoration: none;
    color: #fff;
    line-height: 20px;
    position: relative;
    display: block;
    padding: 10px 15px;
  }
  .navbar ul li a span {
    position: absolute;
    border-radius: .25em;
    font-weight: 700;
    top: 10px;
    right: 10px;
    padding: 2px 3px;
    line-height: .9;
    background-color: #00a65a;
  }
  .navbar ul li img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
    vertical-align: middle;
  }
  @media (min-width: 768px) {
    .navbar ul li a {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .navbar ul li {
      float: left;
    }
  }

  .ivu-badge-count-success{
    font-size: 12px;
    width: 12px;
    height: 12px;
    line-height: 12px;
  }
  .ssss{
    background: #605ca8;
  }
  .fan{
    margin:0px 20px;
  }
  .demo-badge{
    width: 32px;
    height: 32px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
  .ivu-icon{
    margin-top: 10px;
  }
  .logo{
    margin-left: -30px;
    margin-top:0px;
  }
  .layout-nav{
    float: right;
  }

  .img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: url(../assets/user2-160x160.jpg);
    background-size: 100%;
    margin-top: 20px;
    display: inline-block;
  }
  .word{
    color: #fff;
    position: relative;
    top: -10px;
    left: 10px;

  }
</style>
