<template>
	<div class="zhihu-head-fixed pt1">
		<div class="col col-4 center">
			<router-link to="/app" class="h5">日报</router-link>
		</div>
		<div class="col col-4 center">
			<router-link to="/themes" class="h5">专题</router-link>
		</div>
		<div class="col col-4 center">
			<router-link to="/about" class="h5">关于</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		name:'ZhihuHeadFix'
	}
</script>
<style>
	.zhihu-head-fixed{
		height: 2rem;
		background-color:white;
		opacity: 1;
	}
</style>