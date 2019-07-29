<template>
  <div id="app">
    <!-- 顶部Header区域 -->
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">一个神奇的网站</h1>
    </header>

    <!-- 中间的路由区域 -->
    <div class="t-body">
      <router-view></router-view>
    </div>
    <!-- 底部tabBar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <routerLink class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </routerLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    
  },
  mounted() {
    var mui = this.mui;
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });
    mui('body').on('tap','a',function(){
        document.location.href=this.href;
      })
    var gallery = mui(".mui-slider");
    gallery.slider({
      interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
  }
};
</script>

<style>
#app {
  padding-top: 40px;
}
header {
  background: lightblue !important;
}
.tbody {
  touch-action: none;
}

</style>
