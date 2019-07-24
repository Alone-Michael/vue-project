<template>
  <div class="left">
    <!--为menu加上width属性不设置值，menu会和器父级保持同样的宽度-->
    <Menu active-name="icons" width theme="dark" @on-select="jumpPage">
      <MenuItem name="" class="admin" v-html="changeWord">AdminLTE</MenuItem>
      <div  class="top">
        <span class="img"></span>
        <span class="name" v-if="changeSize">
          <span>Alexander Pierce</span>
          <p>
            <Icon type="ios-radio-button-on" />
          </p>
        </span>
        <Input placeholder="Enter text" style="width: 90%;margin-left: 5%">
          <Icon type="ios-search" slot="suffix" />
        </Input>
    </div>

      <!--多级菜单-->
      <Submenu name="charts">
        <!--当前父级菜单的自己的信息写在template-->
        <template slot="title">
          <Icon type="ios-people"></Icon>
          <span v-show="changeSize">Echart&Icons</span>
        </template>
        <MenuItem name="chartJS">Echart图例</MenuItem>
        <MenuItem name="flot">Icon图标</MenuItem>

      </Submenu>
      <Submenu name="form">
        <!--当前父级菜单的自己的信息写在template-->
        <template slot="title">
          <Icon type="ios-paper-outline"/>
          <span v-show="changeSize">Form表单</span>
        </template>
        <MenuItem name="ge">General Elements</MenuItem>
        <MenuItem name="ad">Advanced Element</MenuItem>
        <MenuItem name="ed">Editors</MenuItem>

      </Submenu>
      <Submenu name="table">
        <!--当前父级菜单的自己的信息写在template-->
        <template slot="title">
          <Icon type="logo-windows"/>
          <span v-show="changeSize">Table表单实例</span>
        </template>
        <MenuItem name="st">Simple Tables</MenuItem>
        <MenuItem name="dt">Data Tables</MenuItem>

      </Submenu>
      <Submenu name="examples">
        <!--当前父级菜单的自己的信息写在template-->
        <template slot="title">
          <Icon type="md-ribbon" />
          <span v-if="changeSize">Examples</span>
        </template>
        <MenuItem name="in">Invoice</MenuItem>
        <MenuItem name="pr">Profile</MenuItem>
        <MenuItem name="lo">Login</MenuItem>
        <MenuItem name="re">Register</MenuItem>
        <MenuItem name="ls">Lockscreen</MenuItem>
        <MenuItem name="404">404 Error</MenuItem>
        <MenuItem name="500">500 Error</MenuItem>

      </Submenu>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: "Left",
    methods:{
      jumpPage(current){
        console.log(current);
        this.$router.push({
          name:current
        })
      }
    },
    computed:{
        changeSize(){
          if(this.$store.state.leftToggle == false) return true;
        },
        changeWord(){
          if(this.$store.state.leftToggle == true) return "LET"
          else return "AdminLET"
        },
        changefan(){

        }
    }
  }
</script>

<style scoped>
  .left {
    min-height: 700px;
  }
  .admin{
    background: #0d77d1;
    text-align: center;
    font-size: 23px;
    font-weight: bold;
  }
  .img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url(../assets/user2-160x160.jpg);
    background-size: 100%;
    margin:15px 0px 10px 10px;
    vertical-align: top;
  }
  .name{
    color: #eee;
    position: relative;
    left:12px;
    top: 18px;
    width: 60%;
  }
  .name p{
    margin-top: 5px;
    color: #00bf00;
  }
  .top{
    display: flex;
    flex-wrap: wrap;
    padding: 0px 0px 10px;
    background: #1b1c2a;
  }
</style>
