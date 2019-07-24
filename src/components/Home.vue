<template>
  <div class="home">
    <Layout>
      <Sider collapsible
             breakpoint="lg"
             :value="$store.state.leftToggle"
             hide-trigger
             :collapsed-width="100"
             @click="changeSize"
      >
        <Left></Left>
      </Sider>
      <Layout>
        <Header>
          <top></top>
        </Header>
        <Content>
          <Center_>

          </Center_>
        </Content>
        <Footer>
          <Bottom></Bottom>
        </Footer>
      </Layout>

    </Layout>

  </div>
</template>

<script>
  import Center_ from './Center'
  import Left from './Left'
  import Top from './Top'
  import Bottom from './Bottom'

  export default {
    name: "Home",
    computed: {},
    components: {
      Center_, Left, Top,Bottom
    },
    methods:{
      changeSize(){

      }
    }
  }
</script>

<style scoped>
  .ivu-layout-header {
    padding: 0 30px;
  }
  .ivu-layout-footer{
    background: #fff;
    padding: 0;
    color: #515a6e;
    font-size: 14px;
  }
  .ivu-layout-header{
    background: #605ca8;
  }
</style>
