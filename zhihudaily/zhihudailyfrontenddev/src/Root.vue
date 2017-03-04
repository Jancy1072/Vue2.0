<template>
  <div>
    <ZhihuHead></ZhihuHead>
    <div class="root-style">
        <router-view></router-view>      
    </div>
  </div>
</template>

<script>
import ZhihuHead from  './components/ZhihuHead'
require('basscss/css/basscss.min.css')
export default {
  name: 'Root',
  components:{
    ZhihuHead
  }
}
</script>

<style>
*{
    margin:0;
    padding: 0;
}
a{
  text-decoration: none;
  color: black;
}
html{
  font-size: 20px;
}   

@media screen and (min-width: 640px) {
  html {
    font-size: 15px;
  }
  .root-style {
    width: 640px;
    margin-left: 50%;
    transform: translateX(-50%);
    /*transform: translateX(-50%);使得内部元素的position:fixed失效*/
  }
}
</style>
