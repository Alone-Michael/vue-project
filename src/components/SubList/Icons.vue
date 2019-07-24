<template>
  <div class="icons">
    <section class="content-header">
      <h1>
        Icons
        <small>a set of beautiful icons</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <Icon size="14" style="margin-right: 5px; line-height: 1px" type="ios-speedometer"/>Home >
          </a>
        </li>
        <li>
          <a href="#">UI ></a>
        </li>
        <li style="color:#777;">Icons</li>
      </ol>
    </section>
    <!-- 内容 -->
    <div class="content">
      <Row class="row">
        <Col class="col" span="12">
          <div class="nav-tabs">
            <template>
              <Tabs :animated="false">
                <TabPane label="Font Awesome">
                    <div class="tab-content">
                        <section id="new">
                            <h4>66 New Icons in 4.4</h4>
                            <div class="icon-list">
                                <div class="md-3 icons-l" v-for="data in datas">
                                        <Icon 
                                    size="18"
                                    :type="data.text" />
                                    {{data.text}}
                                </div>
                            </div>
                        </section>
                    </div>
                </TabPane>
                <TabPane label="Glyphicons">
                   <div class="tab-content">
                        <div class="tab-pane">
                          <ul>
                            <li v-for="data in datas">
                              <span class="glyphicon">
                                <Icon 
                                    size="25"
                                    :type="data.text" />
                              </span>
                              <span class="glyphicon-class">{{data.text}}</span>
                            </li>
                          </ul>
                        </div>
                    </div>
                </TabPane>
              </Tabs>
            </template>
          </div>
        </Col>
      </Row>
    </div>

    <div class="footer" style="width:80vw;margin-top: 20px;border-top:1px solid #ddd;padding-top:10px;">
      <Row type="flex" justify="space-around">
        <Col :xl="11" :lg="24" :xs="24">
          <div class="boxs box-solid">
            <div class="box-body">
              <h4
                style="background-color:#f7f7f7; font-size: 18px; text-align: center; padding: 7px 10px; margin-top: 0;"
              >PREMIUM TEMPLATE</h4>
              <div class="media">
                <div class="media-left">
                  <a class="ad-click-event" href="#">
                    <img
                      src="../../assets/material-pro.png"
                      alt
                      style="width: 150px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);width: 150px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,0)"
                    >
                  </a>
                </div>
                <div class="media-body">
                  <div class="clearfix" style="box-sizing: border-box">
                    <p class="pull-right" style="float: right">
                      <Button type="success" size="small" style="font-size: 12px">LEARN MORE</Button>
                    </p>
                    <h3 style="margin-bottom: 10px;">Ample Admin ─ $35</h3>
                    <p>Admin + Frontend Template</p>
                    <p>
                      <Icon type="md-cart" size="20px"/>348+ purchases
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
              <h4
                style="background-color:#f7f7f7; font-size: 18px; text-align: center; padding: 7px 10px; margin-top: 0;"
              >PREMIUM TEMPLATE</h4>
              <div class="media">
                <div class="media-left">
                  <a class="ad-click-event" href="#">
                    <img
                      src="../../assets/ample-admin.png"
                      alt
                      style="width: 150px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);width: 150px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,0)"
                    >
                  </a>
                </div>
                <div class="media-body">
                  <div class="clearfix" style="box-sizing: border-box">
                    <p class="pull-right" style="float: right">
                      <Button type="success" size="small" style="font-size: 12px">LEARN MORE</Button>
                    </p>
                    <h3 style="margin-bottom: 10px;">Webadmin ─ $18</h3>
                    <p>Responsive Admin Dashboard</p>
                    <p>
                      <Icon type="md-cart" size="20px"/>348+ purchases
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
  </div>
</template>
  </div>
</template>
  </div>
</template>

<script>
export default {
  name: "Icons",
  computed:{
      datas(){
          return this.$store.state.store1.data;
      }
  }
};
</script>

<style scoped>
.content-header {
  position: relative;
  padding: 15px 15px 0 15px;
}
.content-header h1 {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.1;
}
.content-header h1 small {
  font-size: 14px;
  padding-left: 4px;
  color: #777;
}
.breadcrumb {
  padding: 7px 5px;
  position: absolute;
  top: 15px;
  right: 10px;
  border-radius: 2px;
}
.breadcrumb > li {
  display: inline-block;
  margin-right: 10px;
}
.content-header > .breadcrumb > li > a {
  color: #444;
  text-decoration: none;
}

/* 内容 */
.content {
    min-height: 250px;
    padding: 15px;
}
.col {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    width: 100%;
    float: left;
}
.nav-tabs {
    margin-bottom: 20px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    border-radius: 3px;
}

.tab-content {
    background: #fff;
    padding: 10px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
h4 {
    margin: 10px 0 20px 0;
    font-size: 20px;
    padding-bottom: 9px;
    border-bottom: 1px solid #eee;
}
.icon-list {
    margin-right: -15px;
    margin-left: -15px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
}
.md-3 {
    width: 24%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    line-height: 2;
}

/* 标签二 */
.tab-pane ul {
    padding-bottom: 1px;
    margin-bottom: 20px;
    list-style: none;
    overflow: hidden;
}
.tab-pane ul li {
    float: left;
    width: 12.5%;
    height: 115px;
    padding: 10px;
    margin: 0 -1px -1px 0;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    border: 1px solid #ddd;
}
.glyphicon {
    margin-top: 5px;
    margin-bottom: 10px;
    line-height: 2;
    position: relative;
    top: 1px;
    display: inline-block;
}
.glyphicon-class {
    display: block;
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
  .media{
  margin-top: 10px;
  vertical-align: top;
  /*display: flex;*/
  /*justify-content: space-around;*/
}
</style>
