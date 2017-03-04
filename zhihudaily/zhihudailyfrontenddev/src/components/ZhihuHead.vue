<template>
  <div class="zhihu-head">
    <p class="h4 bold m1 pl2 pt1">知乎日报</p>
    <div class="mt2">
        <div class="center col col-4">
            <router-link to="/app" class="h5">日报</router-link>
        </div>
        <div class="center col col-4">
            <router-link to="/themes" class="h5">专题</router-link>
        </div>
        <div class="center col col-4">
            <router-link to="/about" class="h5">关于</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZhihuHead'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .zhihu-head{
        border-bottom: 2px solid #f5f2f4;
        height: 4.5rem;
    }
    .router-link-active{
        color:black !important;
        font-weight: bolder;
    }
</style>
