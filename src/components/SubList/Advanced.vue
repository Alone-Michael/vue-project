<template>
  <div class="Forms">
    <div class="formContent">
      <Row>
        <Col span="24">
          <div class="f_top">
            <h2>高级表单元素</h2>
            <span class="f_top_yl">预览</span>
            <div class="f_top_family">
              <Icon type="md-color-palette" size="15"/>
            </div>
            <Breadcrumb separator=">">
              <BreadcrumbItem to="/">家</BreadcrumbItem>
              <BreadcrumbItem to="/components/breadcrumb">表格</BreadcrumbItem>
              <BreadcrumbItem>高级元素</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Col>
      </Row>
      <div class="f_mid">
        <div v-if="show" class="f_mid_t">
          <Row>
            <Col span="24">
              <div class="f_mid_two">
                <div class="f_mid_xz">选择二</div>
                <Icon @click="min()" class="f_min" type="ios-remove" size="20"/>
                <Icon @click="max()" class="f_move" type="ios-close" size="25"/>
              </div>
            </Col>
          </Row>
          <div v-if="show1" class="f_mid_inp">
            <Form :model="formItem">
              <FormItem label="Minimal">
                <Select v-model="formItem.select">
                  <Option value="Alabama">Alabama</Option>
                  <Option value="alasijiazhou">阿拉斯加州</Option>
                  <Option value="jiazhou">加州</Option>
                  <Option value="telahua">特拉华</Option>
                  <Option value="tiannaxi">田纳西</Option>
                  <Option value="dezhou">德州</Option>
                </Select>
              </FormItem>
            </Form>
          </div>
          <div v-if="show1" class="f_mid_inp2">
            <Form :model="formItem">
              <FormItem label="Multiple">
                <Select v-model="formItem.select">
                  <Option value="Alabama">Alabama</Option>
                  <Option value="alasijiazhou">阿拉斯加州</Option>
                  <Option value="jiazhou">加州</Option>
                  <Option value="telahua">特拉华</Option>
                  <Option value="tiannaxi">田纳西</Option>
                  <Option value="dezhou">德州</Option>
                </Select>
              </FormItem>
            </Form>
          </div>
          <div v-if="show1" class="f_mid_inp3">
            <Form :model="formItem">
              <FormItem label="Disabled">
                <Select v-model="formItem.select">
                  <Option value="Alabama">Alabama</Option>
                  <Option value="alasijiazhou">阿拉斯加州</Option>
                  <Option value="jiazhou">加州</Option>
                  <Option value="telahua">特拉华</Option>
                  <Option value="tiannaxi">田纳西</Option>
                  <Option value="dezhou">德州</Option>
                </Select>
              </FormItem>
            </Form>
          </div>
          <div v-if="show1" class="f_mid_inp4">
            <Form :model="formItem">
              <FormItem label="Disabled Result">
                <Select v-model="formItem.select">
                  <Option value="Alabama">Alabama</Option>
                  <Option value="alasijiazhou">阿拉斯加州</Option>
                  <Option value="jiazhou">加州</Option>
                  <Option value="telahua">特拉华</Option>
                  <Option value="tiannaxi">田纳西</Option>
                  <Option value="dezhou">德州</Option>
                </Select>
              </FormItem>
            </Form>
          </div>
        </div>
        <br>
        <div class="f_mid_data">
          <div class="f_mid_data_t">
            input masks
          </div>
          <div class="f_mid_data_1">
            Date masks:
            <Row>
              <Col span="24">
                <DatePicker type="date" placeholder="Select date" style="width: 100%"></DatePicker>
              </Col>
            </Row>
            <br>
            <Row>
              <Col span="24">
                <DatePicker type="date" placeholder="Select date" style="width: 100%"></DatePicker>
              </Col>
            </Row>
            <br>
            US phone mask:
            <Row>
              <Col span="24">
                <Input v-model="value14" placeholder="Select date" clearable style="width: 100%"/>
              </Col>
            </Row>
            <br>
            Intl US phone mask:
            <Row>
              <Col span="24">
                <Input v-model="value14" placeholder="Select date" clearable style="width: 100%"/>
              </Col>
            </Row>
            <br>
            IP mask:
            <Row>
              <Col span="24">
                <Input v-model="value14" placeholder="Select date" clearable style="width: 100%"/>
              </Col>
            </Row>
          </div>
        </div>

        <div class="f_mid_data_left">
          <div class="f_mid_data_left_t">
            Date picker
          </div>
          <div class="f_mid_data_left_c">
            Date:
            <Row>
              <Col span="24">
                <DatePicker type="date" placeholder="Select date" style="width: 100%"></DatePicker>
              </Col>
            </Row>
            <br>
            Date range:
            <Row>
              <Col span="24">
                <DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 100%"></DatePicker>
              </Col>
            </Row>
            <br>
            Date and time range:
            <Row>
              <Col span="24">
                <DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 100%"></DatePicker>
              </Col>
            </Row>
            <br>
            <div class="f_mid_data_btn">
              <Form :model="formItem" :label-width="80">
                <FormItem label="">
                  <Select v-model="formItem.select">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                  </Select>
                </FormItem>
              </Form>
            </div>

          </div>
        </div>

        <br>

        <br>
        <div class="f_mid_data_left_two">
          <div class="f_mid_data_left_t_t">
            Color & Time Picker
          </div>
          Color picker with addon:
          <div class="f_mid_data_left_ddd">
            <Input v-model="value14" placeholder="Enter something..." clearable style="width: 100%"/>
            <Row>
              <Col span="12">
                <ColorPicker v-model="color2"/>
              </Col>
            </Row>
          </div>


          <br>
          <br>
          Color picker:
          <div class="f_mid_data_left_ddd">
            <Input v-model="value14" placeholder="" clearable style="width: 100%"/>
            <Row>
              <Col span="12">
                <ColorPicker v-model="color2"/>
              </Col>
            </Row>
          </div>
          <br>
          <br>
          <Row>
            <Col span="24">
              <TimePicker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 100%"></TimePicker>
            </Col>
          </Row>
        </div>
        <!---->
        <div class="f_mid_data_left_three">
          <div class="f_mid_data_left_three_t">
            iCheck - Checkbox & Radio Inputs
          </div>
          <div class="f_mid_data_left_three_t_t">
            <CheckboxGroup>
              <Checkbox>&nbsp</Checkbox>
              <Checkbox>&nbsp</Checkbox>
              <Checkbox disabled>Minimal skin checkbox</Checkbox>
            </CheckboxGroup>
          </div>

          <div class="f_mid_data_left_three_ttt">
            <RadioGroup>
              <Radio></Radio>
              <Radio></Radio>
              <Radio disabled>Minimal skin radio</Radio>
            </RadioGroup>
          </div>

          <div class="f_mid_data_left_three_t_t">
            <CheckboxGroup>
              <Checkbox>&nbsp</Checkbox>
              <Checkbox>&nbsp</Checkbox>
              <Checkbox disabled>Minimal skin checkbox</Checkbox>
            </CheckboxGroup>
          </div>

          <div class="f_mid_data_left_three_ttt">
            <RadioGroup>
              <Radio></Radio>
              <Radio></Radio>
              <Radio disabled>Minimal skin radio</Radio>
            </RadioGroup>
          </div>

          <div class="f_mid_data_left_three_t_t">
            <CheckboxGroup>
              <Checkbox>&nbsp</Checkbox>
              <Checkbox>&nbsp</Checkbox>
              <Checkbox disabled>Minimal skin checkbox</Checkbox>
            </CheckboxGroup>
          </div>

          <div class="f_mid_data_left_three_ttt">
            <RadioGroup>
              <Radio></Radio>
              <Radio></Radio>
              <Radio disabled>Minimal skin radio</Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
    <br>
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
</template>

<script>
  import Icons from "./Icons";

  export default {
    name: "Forms",
    components: {Icons},
    data() {
      return {
        show: true,
        show1: true,
        color2: '',
        value14:'12312',
        formItem: {
          select: '',

        }
      }
    },
    methods: {
      max() {
        this.show = !this.show;
      },
      min() {
        this.show1 = !this.show1;
      },
    }
  }
</script>

<style scoped>
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
  .formContent {
    width: 100%;
    background: transparent;
  }

  .f_top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
    display: flex;
  }

  .f_top_yl {
    width: 30px;
    line-height: 60px;
    font-size: 15px;
    margin-left: 20px;
    color: #777;
  }

  .f_top_family {
    margin-left:70%;
  }

  .f_mid_t {
    width: 98%;
    /*height: 250px;*/
    background: #fff;
    margin-left: 15px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);;
  }

  .f_mid_two {
    width: 100%;
    height: 40px;
    background: transparent;
    font-size: 16px;
    line-height: 40px;
    display: flex;
  }

  .f_mid_xz {
    width: 60px;
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
  }

  .f_min {
    padding: 5px;
    margin-left: 88%;
  }

  .f_move {
    padding: 5px;
    margin-left: 0.5%;
  }

  .f_mid_inp {
    width: 48%;
    padding: 10px;
    font-weight: bold;
  }

  .f_mid_inp2 {
    width: 48%;
    padding: 10px;
    font-weight: bold;
  }

  .f_mid_inp3 {
    width: 48%;
    padding: 10px;
    font-weight: bold;
  }

  .f_mid_inp4 {
    width: 48%;
    padding: 10px;
    font-weight: bold;
  }

  .f_mid_inp, .f_mid_inp2 {
    display: inline-block;
  }

  .f_mid_inp3, .f_mid_inp4 {
    display: inline-block;
  }

  .f_mid_data {
    width: 45%;
    background: #fff;
    margin-left: 15px;
    display: flex;
    flex-wrap: wrap;
  }

  .f_mid_data_t {
    width: 50%;
    height: 40px;
    font-size: 15px;
    line-height: 40px;
    margin-left: 10px;
    font-weight: bold;
  }

  .f_mid_data_1 {
    padding: 10px;
  }

  .f_mid_data_left {
    width: 51%;
    background: #fff;
    margin-left: 20px;
  }

  .f_mid_data, .f_mid_data_left {
    display: inline-block;
    vertical-align: top;
  }

  .f_mid_data_left_t {
    width: 100%;
    height: 40px;
    font-size: 13px;
    line-height: 20px;
    padding: 10px;
    font-weight: bold;
  }

  .f_mid_data_left_c {
    width: 100%;
    padding: 10px;
  }

  .f_mid_data_btn {
    width: 300px;
    margin-left: -80px;
  }

  .f_mid_data_left_two {
    width: 45%;
    height: 280px;
    background: #fff;
    margin-left: 15px;
    padding: 10px;
  }

  .f_mid_data_left_t_t {
    width: 100%;
    height: 40px;
    font-size: 13px;
    line-height: 20px;
    font-weight: bold;
    /*padding: 10px;*/
  }

  .f_mid_data_left_ddd {
    display: flex;
    background: transparent;
  }
  .f_mid_data_left_three{
    width: 51%;
    background: #fff;
    margin-left: 20px;
    padding: 10px;
  }
  .f_mid_data_left_three,.f_mid_data_left_two{
    display: inline-block;
    vertical-align: top;
  }
  .f_mid_data_left_three_t{
    width: 100%;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    font-weight: bold;
  }

  .end{
    width: 98%;
    height: 50px;
    background: #fff;
    margin-left: 15px;
    line-height: 50px;
    font-size: 15px;
  }
  .end_s{
    margin-left: 55%;
  }

  .demo-breadcrumb-separator {
    color: #ff5500;
    padding: 0 5px;
  }
</style>
