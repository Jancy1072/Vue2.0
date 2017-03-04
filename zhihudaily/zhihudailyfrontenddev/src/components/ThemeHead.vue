<template>
	<div>
		<img :src="image?'http://119.29.60.189:3000/zhihu/resource?url='+image:''" style="width:100%">
		<div class="theme-head-name ml2">
			<p class="pl1 h4 bold">{{name}}:</p>
			<p class="description">{{description}}</p>
		</div>
		<div class="theme-head-editor ml3">
			<h4 class="inline">主编：</h4>
			<p class="inline h6" v-for="item in editors">
				{{item.name}}&nbsp;
			</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:'ThemeHead',
		props:['image','name','description','editors'],

	}
</script>
<style scoped>
	.description{
		border-left: 5px solid #efefef;
		font-size: 0.5rem;
		text-indent: 1rem;
		margin-left: 2rem;
	}
	.theme-head-editor{
		color:grey;
	}
</style>