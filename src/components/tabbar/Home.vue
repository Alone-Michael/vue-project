<template>
  <div class="home">
    <div id="slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!--支持循环，需要重复图片节点-->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../assets/4.jpg" />
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../assets/1.jpg" />
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../assets/2.jpg" />
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../assets/3.jpg" />
          </a>
        </div>
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../assets/4.jpg" />
          </a>
        </div>
        <!--支持循环，需要重复图片节点-->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../assets/1.jpg" />
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import mui from '../../lib/mui-master/dist/js/mui.js'
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
img {
  height: 210px;
  width: 100%;
}
</style>
