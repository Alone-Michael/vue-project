<template>
    <div class="footer">
      <div class="boxes">
        <span>Copyright © 2014-2016</span>
        <span><a href="#"> Almsaeed Studio.</a></span>
        <span> All rights reserved.</span>
        <span>Version 2.4.0</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Bottom"
    }
</script>

<style scoped>
.footer{
  background: #fFf;
  padding: 20px 30px  ;
}
.footer span{
  margin: 0 2px;
}
  .footer span:nth-child(4){
    float: right;
  }
</style>
