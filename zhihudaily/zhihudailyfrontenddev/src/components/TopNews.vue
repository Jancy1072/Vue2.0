<template>
	<div class="top-news m2">
		<p class="top-news-title ml2 bold">今日要闻</p>
		<div v-for="item in TopNewsData">
			<router-link :to="{name:'news-detail',params:{id:item.id}}">
				<ZhihuListCover :title="item.title" :images="item.image"></ZhihuListCover>
			</router-link>	
		</div>
	</div>
</template>
<script>
	import ZhihuListCover from './ZhihuListCover'
	export default{
		name:'TopNews',
		props:['TopNewsData'],
		components:{
			ZhihuListCover
		}
	}
</script>
<style scoped>
	.top-news-title{
		font-size: 0.8rem;
		border-left: 5px solid #efefef;
		color:grey;
		padding: 0.1rem;
		text-indent: 0.5rem;
		animation:newsLatestTime 0.5s ease 1;
	}
	@keyframes newsLatestTime{
		from{
			transform:translateX(100px);
			opacity: 0;
		}
		to{
			transform:translateX(0);
			opacity: 1;
		}
	}
	p{
		margin: 20px 0;
	}
</style>