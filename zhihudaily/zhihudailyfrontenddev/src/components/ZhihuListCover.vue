<template>
	<div class="zhihu-list-cover m1">
		<div class="clearfix">
			<div class="col col-3 center">
				<img :src="'http://119.29.60.189:3000/zhihu/resource?url='+images" alt="" width="60" class="rounded m1">
			</div>
			<div class="col col-9">
				<p class="h6">{{title}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'ZhihuListCover',
		props:['title','images']
	}
</script>
<style scoped>
	.zhihu-list-cover{
		border-bottom: 1px solid #efefef;
	}
	p{
		margin:20px 0;
	}
</style>