<template>
<div class="ech">
  <h1>ChartJS / <small> Preview sample</small></h1>
  <div class="echarts">
    <div class="left">
      <div class="box">
        <div class="title">
          <span>三年的变化柱状图</span>
          <div class="btns" style="float: right;margin-right: 6%">
            <Button @click="change" size="small" type="info">-</Button>
            <Button type="error" size="small">x</Button>
          </div>
        </div>
        <div v-show="this.flag" id="myChart" class="cav"></div>
      </div>
      <div class="box">
        <div class="title">
          <span>降水量折现图</span>
          <div class="btns" style="float: right;margin-right: 6%">
            <Button @click="change1" size="small" type="info">-</Button>
            <Button type="error" size="small">x</Button>
          </div>
        </div>
        <div v-show="this.flag1"  id="myChart2" class="cav"></div>
      </div>
    </div>
    <div class="right">
      <div class="box">
        <div class="title">
          <span>气温变化折线图</span>
          <div class="btns" style="float: right;margin-right: 6%">
            <Button @click="change2" size="small" type="info">-</Button>
            <Button type="error" size="small">x</Button>
          </div>
        </div>
        <div v-show="this.flag2"  id="myChart1" class="cav"></div>
      </div>
      <div class="box">
        <div class="title">
          <span>分类饼状图</span>
          <div class="btns" style="float: right;margin-right: 6%">
            <Button @click="change3" size="small" type="info">-</Button>
            <Button type="error" size="small">x</Button>
          </div>
        </div>
        <div v-show="this.flag3"  id="myChart3" class="cav"></div>
      </div>
    </div>

  </div>
</div>

  <!--<someComponent></someComponent>-->
</template>

<script>
  // import someComponent from './someComponent'
  import {mapState} from 'vuex'
  export default {
    name: "Echarts",
    data(){
      return {
        flag:false,
        flag1:true,
        flag2:true,
        flag3:true,
      }
    },
    components: {
      //someComponent
    },
    computed:{
      ...mapState([
        'option1',
        'option2',
        'option3',
        'option4'
      ])
    },
    mounted(){
      this.drawLine();
      this.drawLine1();
      this.drawLine2();
      this.drawLine3();
    },
    methods:{
      change(){

        this.flag = !this.flag;
        console.log(this.flag);
      },
      change1(){
        this.flag1 = !this.flag1;
        console.log(this.flag1);
      },
      change2(){
        this.flag2 = !this.flag2;
        console.log(this.flag2);
      },
      change3(){
        this.flag3 = !this.flag3
        console.log(this.flag3);
      },
      //初始化
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption(this.option1);
      },
      drawLine1(){
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
        myChart1.setOption(this.option2);
      },
      drawLine2(){
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
        myChart2.setOption(this.option4);
      },
      drawLine3(){
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'));
        myChart3.setOption(this.option3);
      }
    }
  }
</script>

<style scoped>
  .title{
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  *{
    overflow: hidden;
  }
  h1 {
    padding: 15px 0 0 15px;
    display: inline-block;
    vertical-align: middle;
  }
  .echarts{
    padding: 0 0 15px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .left, .right{
    width: 48%;
  }
  .echarts .box{
    width: 100%;
    vertical-align: top;
    display: inline-block;
    border-top: 3px solid #d2d6de;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    margin-top: 20px;
    border:1px solid #eee;
  }
  .echarts .box .cav{
    width:620px;
    height: 400px;
  }
  .echarts .title{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
  }

  @media screen and (max-width: 1350px){
    .echarts{
      padding: 0px 0 15px 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
    .left, .right{
      width: 100%;
    }
  }
</style>
