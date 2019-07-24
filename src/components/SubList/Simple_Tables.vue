<template>
    <div class="table">
      <h1>Simple Tables <small>preview of simple tables</small></h1>
      <!--<div class="content">-->
        <Row class="row" type="flex" justify="space-around">
          <Col :lg="11" :xs="24">
            <div class="box">
              <h2>Bordered Table</h2>
              <Table border :columns="loadings.columns12" :data="loadings.data6">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row }" slot="progress">
                  <Progress :percent="row.progress.num" :stroke-width="7" :stroke-color="row.progress.color" hide-info/>
                </template>
                <template slot-scope="{ row }" slot="lable">
                  <Button :type="row.lable.btnColor" shape="circle" size="small">{{row.progress.num}}%</Button>
                </template>
              </Table>
              <div class="page">
                <Page :total="30" :style="{margin:'0px'}"/>
              </div>
            </div>
            <div class="box">
              <h2>Simple Full Width Table</h2>
              <Table :columns="loadings.columns12" :data="loadings.data6">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row }" slot="progress">
                  <Progress :percent="row.progress.num" :stroke-width="7" :stroke-color="row.progress.color" hide-info/>
                </template>
                <template slot-scope="{ row }" slot="lable">
                  <Button :type="row.lable.btnColor" shape="circle" size="small">{{row.progress.num}}%</Button>
                </template>
              </Table>
            </div>
          </Col>
          <Col :lg="11" :xs="23">
            <div class="box">
              <h2>Condensed Full Width Table</h2>
              <span class="page1">
                <Page :total="30" :style="{margin:'0px'}"/>
              </span>
              <Table :columns="loadings.columns12" :data="loadings.data6">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row }" slot="progress">
                  <Progress :percent="row.progress.num" :stroke-width="7" :stroke-color="row.progress.color" hide-info/>
                </template>
                <template slot-scope="{ row }" slot="lable">
                  <Button :type="row.lable.btnColor" shape="circle" size="small">{{row.progress.num}}%</Button>
                </template>
              </Table>
            </div>
            <div class="box">
              <h2>Striped Full Width Table</h2>
              <Table border :columns="loadings.columns12" :data="loadings.data6">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row }" slot="progress">
                  <Progress :percent="row.progress.num" :stroke-width="7" :stroke-color="row.progress.color" hide-info/>
                </template>
                <template slot-scope="{ row }" slot="lable">
                  <Button :type="row.lable.btnColor" shape="circle" size="small">{{row.progress.num}}%</Button>
                </template>
              </Table>
            </div>
          </Col>

        </Row>
        <Row type="flex" justify="space-around">
          <Col :xl="24" :lg="24" :xs="24">
            <div class="box">
              <h2>Responsive Hover Table</h2>
              <span class="page1">
                <Input placeholder="Enter text" style="width: auto">
                    <Icon type="ios-search" slot="suffix" />
                </Input>
              </span>
              <Table border="" stripe :columns="loadings.columns1" :data="loadings.data1">
                <template slot-scope="{ row }" slot="status">
                  <Button :type="row.status.color"  size="small">{{row.status.text}}</Button>
                </template>
              </Table>
            </div>
          </Col>

        </Row>
        <Row type="flex" justify="space-around">
          <Col :xl="11" :lg="24" :xs="24">
            <div class="boxs box-solid">
                <div class="box-body">
                  <h4 style="background-color:#f7f7f7; font-size: 18px; text-align: center; padding: 7px 10px; margin-top: 0;">PREMIUM TEMPLATE</h4>
                  <div class="media">
                      <div class="media-left">
                        <a class="ad-click-event" href="#"><img src="../../assets/ample-admin.png" alt="" style="width: 150px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);width: 150px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,0)"></a>
                      </div>
                      <div class="media-body">
                        <div class="clearfix" style="box-sizing: border-box">
                          <p class="pull-right" style="float: right"><Button type="success" size="small" style="font-size: 12px">LEARN MORE</Button></p>
                          <h3 style="margin-bottom: 10px;">Ample Admin ─ $35</h3>
                          <p>Admin + Frontend Template</p>
                          <p>
                            <Icon type="md-cart" size="20px"/> 348+ purchases
                          </p>
                        </div>
                      </div>
                  </div>
                </div>

            </div>
          </Col>
          <Col :xl="11" :lg="24" :xs="24">
            <div class="boxs box-solid">
            <div class="box-body">
              <h4 style="background-color:#f7f7f7; font-size: 18px; text-align: center; padding: 7px 10px; margin-top: 0;">PREMIUM TEMPLATE</h4>
              <div class="media">
                <div class="media-left">
                  <a class="ad-click-event" href="#"><img src="../../assets/ASFEDAA8_v1.2.0_595b0b787d2e5.png" alt="" style="width: 150px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);width: 150px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,0)"></a>
                </div>
                <div class="media-body">
                  <div class="clearfix" style="box-sizing: border-box">
                    <p class="pull-right" style="float: right"><Button type="success" size="small" style="font-size: 12px">LEARN MORE</Button></p>
                    <h3 style="margin-bottom: 10px;">Webadmin ─ $18</h3>
                    <p>Responsive Admin Dashboard</p>
                    <p>
                      <Icon type="md-cart" size="20px"/> 348+ purchases
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </Col>
        </Row>
      </div>
    <!--</div>-->
</template>

<script>
  import {mapState}from 'vuex'
    export default {
      name: "Simple_Tables",
      data () {
        return {
        }
      },
      computed:{
        loadings(){
          console.log(this.$store.state.lodaings);
          return this.$store.state.lodaings
        }
      }
    }
</script>

<style scoped>
  h1{
    margin: 15px 0 15px 15px;
  }
  h2{
    margin: 5px 0 10px 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #f4f4f4;
    display: inline-block;
  }
  .row{
    margin-right: -15px;
    margin-left: -15px;
  }
  .box{
    margin-bottom: 20px;
    padding: 10px;
    position: relative;
    border-radius: 3px;
    background: #ffffff;
    border-top: 3px solid #d2d6de;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
  .page{
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top: 1px solid #f4f4f4;
    padding: 10px 0 0 0px;
    background-color: #fff;
    text-align: right;
  }
  .page1{
    position: absolute;
    right: 10px;
    top: 12px;
  }
  .box-body{
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 10px;
  }
  .boxs {
    position: relative;
    border-radius: 3px;
    background: #ffffff;
    border-top: 3px solid #d2d6de;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
  .media-body, .media-left, .media-right {
    display: table-cell;
    vertical-align: top;
  }
  .media-left, .media>.pull-left {
    padding-right: 10px;
  }
  .media-body {
    width: 10000px;
    overflow: hidden;
  }
  p{
    margin: 0 0 10px;
  }
  .media{
  margin-top: 10px;
  vertical-align: top;
  /*display: flex;*/
  /*justify-content: space-around;*/
}
</style>
