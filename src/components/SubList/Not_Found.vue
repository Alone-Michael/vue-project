<template>
  <!-- <div>
    <h1>页面迷路了！</h1>
  </div> -->
  <body bgcolor="#494949" style="background: #494949;height:91vh;">
    <div style="height: 70px;"></div>
    <div class="head404"></div>
    <div class="txtbg404">

  <div class="txtbox">

      <p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>

      <p class="paddingbox">请点击以下链接继续浏览网页</p>
      <p>》<a style="cursor:pointer" onclick="history.back()">返回上一页面</a></p>

      <p>》<a href="http://localhost:8080/home/st">返回网站首页</a></p>

    </div>

  </div>
  </body>
</template>
<script>
export default {
  name: 'notFound'
}
</script>
<style scoped>
  .head404{ width:580px; height:234px; margin:0px auto 0 auto; background:url(https://www.daixiaorui.com/Public/images/head404.png) no-repeat; padding-top: 50px; }

  .txtbg404{ width:499px; height:169px; margin:10px auto 0 auto; background:url(https://www.daixiaorui.com/Public/images/txtbg404.png) no-repeat;}

  .txtbg404 .txtbox{ width:390px; position:relative; top:30px; left:60px;color:#eee; font-size:13px;}

  .txtbg404 .txtbox p {margin:5px 0; line-height:18px;}

  .txtbg404 .txtbox .paddingbox { padding-top:15px;}

  .txtbg404 .txtbox p a { color:#eee; text-decoration:none;}

  .txtbg404 .txtbox p a:hover { color:#FC9D1D; text-decoration:underline;}
</style>
