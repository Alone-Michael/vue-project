<template>
  <div class="forms">
    <div class="div-center">
      <Form :model="formItem" :label-width="80" class="inp inp1">
        <div class="title">
          <h2>Quick Example</h2>
        </div>
        <FormItem label="Email address">
          <Input v-model="value" placeholder="Enter email" type="email"/>
        </FormItem>
        <FormItem label="Password">
          <Input v-model="value" placeholder="Password"/>
        </FormItem>
        <FormItem label="File input">
          <Upload action="http://192.168.127.128:8080/ge">
            <Button icon="ios-cloud-upload-outline">选择文件</Button>
            <span>------------预留</span>
          </Upload>
          <i>Example block-level help text here.</i>
          <CheckboxGroup>
            <Checkbox>Check out me</Checkbox>
          </CheckboxGroup>
          <div class="child-btn">
            <Button type="primary">Primary</Button>
          </div>
        </FormItem>
      </Form>

      <Form :model="formItem" :label-width="80" class="inp inp3">
        <div class="title">
          <h2>Different Height</h2>
        </div>
        <Input placeholder=".input-lg" class="inp-child1" size="large"/>
        <Input placeholder="Default input" class="inp-child2"/>
        <Input placeholder=".input-sm" class="inp-child3" size="small"/>
      </Form>
      <Form :model="formItem" :label-width="80" class="inp inp3">
        <div class="title">
          <h2>Different Width</h2>
        </div>
        <Row>
          <Col span="7">
            <Input v-model="value" placeholder=".col-xs-7"/>
          </Col>
          <Col span="7" offset="1">
            <Input v-model="value" placeholder=".col-xs-7"/>
          </Col>
          <Col span="7" offset="1">
            <Input v-model="value" placeholder=".col-xs-7"/>
          </Col>
        </Row>
      </Form>

      <Form :model="formItem" :label-width="80" class="inp inp5">
        <div class="title">
          <h2>Input Addon</h2>
        </div>
        <Input type="text" v-model="formItem.input" placeholder="Email">
          <span slot="prepend">@</span>
        </Input>
        <Input type="text" placeholder="Enter text">
          <span slot="append">.00</span>
        </Input>
        <Input type="text" v-model="formItem.input">
          <span slot="append">.00</span>
          <span slot="prepend">$</span>
        </Input>
        <FormItem label="With icons">
          <Input type="text" v-model="formItem.input" placeholder="Email" prefix="md-mail"/>
        </FormItem>
        <FormItem label="With icons">
          <div style="display: flex;justify-content: space-between;">
            <Input type="text" v-model="formItem.input" style="width:48%;">
              <span slot="prepend">
                <Checkbox v-model="single"></Checkbox>
              </span>
            </Input>
            <Input type="text" v-model="formItem.input" style="width:48%;">
              <span slot="prepend">
                <Radio v-model="single"></Radio>
              </span>
            </Input>
          </div>
        </FormItem>

        <FormItem label="With buttons">
          <div>
            <p>
              Large:
              <mark>.input-group.input-group-lg</mark>
            </p>
            <Input placeholder="Enter name" slot="prefix" style="padding-left: 30px">
              <Dropdown slot="prefix">
                <Button type="warning">
                  Action
                  <!--<Icon type="ios-arrow-down"></Icon>-->
                </Button>
                <DropdownMenu slot="list">
                  <DropdownItem>驴打滚</DropdownItem>
                  <DropdownItem>炸酱面</DropdownItem>
                  <DropdownItem disabled>豆汁儿</DropdownItem>
                  <DropdownItem>冰糖葫芦</DropdownItem>
                  <DropdownItem divided>北京烤鸭</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Input>
          </div>

          <div>
            <p>
              Small
              <mark>.input-group.input-group-lg</mark>
            </p>
            <Input search enter-button="Search" placeholder="Enter something..."/>
          </div>
        </FormItem>
      </Form>
    </div>

    <div class="div-center">
      <Form :model="formItem" :label-width="80" class="inp inp2">
        <div class="title">
          <h2>Horizontal Form</h2>
        </div>
        <FormItem label="Email">
          <Input v-model="formItem.input" placeholder="Email"/>
        </FormItem>
        <FormItem label="Password">
          <Input v-model="value" placeholder="Password"/>
        </FormItem>
        <CheckboxGroup>
          <Checkbox>Remember me</Checkbox>
        </CheckboxGroup>
        <div class="child-btn">
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
        </div>
      </Form>

      <Form :model="formItem" :label-width="80" class="inp inp4">
        <div class="title">
          <h2>General Elements</h2>
        </div>
        <FormItem label="Text">
          <Input v-model="value" placeholder="Enter" type="email"/>
        </FormItem>
        <FormItem label="Text Disabled">
          <Input v-model="value" disabled placeholder="Enter"/>
        </FormItem>
        <FormItem label="Textarea">
          <Input v-model="value" type="textarea" :rows="4" placeholder="Enter"/>
        </FormItem>
        <FormItem label="Textarea Disabled">
          <Input v-model="value" disabled type="textarea" :rows="4" placeholder="Enter"/>
        </FormItem>
        <FormItem label=" Input with success" class="has-success">
          <Input v-model="value" placeholder="Enter" style="border: 1px solid #00a65a;"/>Help block with success
        </FormItem>
        <FormItem label=" Input with warning" class="has-warning">
          <Input v-model="value" placeholder="Enter" style="border: 1px solid #f39c12;"/>Help block with warning
        </FormItem>
        <CheckboxGroup>
          <Row span="24">
            <Checkbox label="Checkbox 1"></Checkbox>
          </Row>
          <Row span="24">
            <Checkbox label="Checkbox 2"></Checkbox>
          </Row>
          <Row span="24">
            <Checkbox disabled label="Checkbox 3"></Checkbox>
          </Row>
        </CheckboxGroup>
        <FormItem label="Radio">
          <RadioGroup v-model="formItem.radio">
            <Row span="24">
              <Radio label="option 1">
                <span>Option one is this and that—be sure to include why it's great</span>
              </Radio>
            </Row>
            <Row span="24">
              <Radio label="option 2">
                <span>Option two can be something else and selecting it will deselect option one</span>
              </Radio>
            </Row>
            <Row span="24">
              <Radio label="option 3" disabled>
                <span>Option three is disabled</span>
              </Radio>
            </Row>
          </RadioGroup>
        </FormItem>
        <FormItem label="Select">
          <Select v-model="formItem.select" placeholder="Select your option">
            <Option value="option 1">option 1</Option>
            <Option value="option 2">option 2</Option>
            <Option value="option 3">option 3</Option>
            <Option value="option 4">option 4</Option>
            <Option value="option 5">option 5</Option>
          </Select>
        </FormItem>
        <FormItem label="Select Disabled">
          <Select v-model="formItem.select" placeholder="Select your option" disabled>
            <Option value="option 1">option 1</Option>
            <Option value="option 2">option 2</Option>
            <Option value="option 3">option 3</Option>
            <Option value="option 4">option 4</Option>
            <Option value="option 5">option 5</Option>
          </Select>
        </FormItem>
        <FormItem label="Select Multiple" class="inp-child4">
          <!-- <Select v-model="formItem.select" placeholder="Select your option"> -->
          <div style="height: 73px;">
            <Option value="option 1">option 1</Option>
            <Option value="option 2">option 2</Option>
            <Option value="option 3">option 3</Option>
            <Option value="option 4">option 4</Option>
            <Option value="option 5">option 5</Option>
          </div>
          <!-- </Select> -->
        </FormItem>
        <FormItem label="Select Multiple" class="inp-child4">
          <div style="height: 73px; background: #ddd;">
            <Option value="option 1" disabled>option 1</Option>
            <Option value="option 2" disabled>option 2</Option>
            <Option value="option 3" disabled>option 3</Option>
            <Option value="option 4" disabled>option 4</Option>
            <Option value="option 5" disabled>option 5</Option>
          </div>
        </FormItem>
      </Form>
    </div>

    <div class="footer" style="width:100vw;margin-top: 20px;border-top:1px solid #ddd;padding-top:20px;">
      <Row type="flex" justify="space-around" :style="{}">
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
<script>
export default {
  name: "Forms",
  data() {
    return {
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: "",
        radio1: "option 1"
      },
      value: "",
      single: ""
    };
  }
};
</script>
<style scope>
body {
  height: 0;
}

.forms {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.forms > .div-center {
  width: 49%;
}
.inp {
  border-top: 3px solid green;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
.title h2 {
  font-size: 22px;
  font-weight: 400;
  border-bottom: 1px solid #999999;
}
.inp {
  padding: 15px;
  font-size: 14px;
}
h4 {
  font-weight: 600;
}
.inp-child > div {
  margin-top: 8px;
}
.inp i {
  font-size: 16px;
}
.ivu-form-item {
  margin-top: 12px;
}
.ivu-inp {
  font-size: 14px;
}
.inp1 .ivu-form-item-content,
.inp4 .ivu-form-item-content,
.inp5 .ivu-form-item-content {
  margin-left: 0 !important;
  margin-top: 8px;
}
.inp5 > div {
  margin: 16px 0;
}
.inp5 input {
  height: 35px;
}
.ivu-form .ivu-form-item-label {
  padding: 10px 3px 10px 0;
  font-size: 13px;
  font-weight: 600;
  margin-top: 5px;
}
.inp1 .ivu-form-item-label,
.inp4 .ivu-form-item-label,
.inp5 .ivu-form-item-label {
  text-align: right;
  vertical-align: middle;
  line-height: 1;
  box-sizing: border-box;

  float: none;
}
.child-btn {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
}
.ivu-form-item {
  margin-bottom: 15px;
}
.ivu-form-item-label {
  width: 60px !important;
}
.inp3 > div {
  margin-top: 15px;
}
.inp-child1 input {
  font-size: 20px;
}
.inp-child3 input {
  font-size: 12px;
}
.has-warning > label {
  color: #f39c12 !important;
}
.has-success > label {
  color: #00a65a !important;
}
.has-warning {
  color: #f39c12 !important;
}
.has-success {
  color: #00a65a !important;
}
.inp-child4 .ivu-select-dropdown {
  display: block !important;
  top: -3px !important;
  position: relative !important;
  height: 93px !important;
}
.inp-child4 .ivu-form-item-content {
  overflow: scroll;
  overflow: auto;
}
p {
  font-size: 14px;
  font-weight: 600;
}
mark {
  padding: 2px 4px;
  background-color: #f9f2f4;
  color: #c7254e;
  font-size: 12px;
}
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

