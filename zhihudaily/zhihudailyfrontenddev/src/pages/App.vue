<template>
	<transition name="homeTransition">
		<div>
			<div :class="ZhihuHeadFixClass" v-show="ZhihuHeadFixIsShow">
				<ZhihuHeadFix></ZhihuHeadFix>
			</div>
			<LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
			<TopNews :TopNewsData="DONE_NEWS_LATEST.top_stories"></TopNews>
			<div class="ml2 mt1 mr2">
				<div v-for="list in DONE_NEWS_LIST_ROOT">
					<p class="news-latest-time bold ml2">{{list.date|formatDate}}</p>
					<div v-for="item in list.stories">
						<router-link :to="{name:'news-detail',params:{id:item.id}}">
							<ZhihuListCover :title="item.title" :images="item.images[0]"></ZhihuListCover>
						</router-link>
					</div>
				</div>
				<button v-show="!DONE_LOADING_ONE&&!DONE_LOADING_TWO" @click="LoadMoreNews" class="load-more-button pl2 pr2 pt1 pb1 mb2 mt1">更多</button>
				<LoadingOne v-show="DONE_LOADING_ONE"></LoadingOne>
				<button class="back-to-top p1" v-show="backToTopIsShow" @click="backToTop">
					<img src="../../static/top.png" alt="返回顶部" style="width:1rem;color:none;background-color:white">
				</button>
			</div>
		</div>
	</transition>
	
</template>
<script>
	import ZhihuHeadFix from "../components/ZhihuHeadFix"
	import LoadingTwo from "../components/LoadingTwo"
	import {mapGetters} from 'vuex'
	import TopNews from "../components/TopNews"
	import ZhihuListCover from '../components/ZhihuListCover'
	import LoadingOne from "../components/LoadingOne"
	export default{
		name:'App',
		data:function(){
			return {
				ZhihuHeadFixClass:'ZhihuHeadFixClass-on',
				ZhihuHeadFixIsShow:false,
				backToTopIsShow:false
			}
		},
		components:{
			ZhihuHeadFix,
			LoadingTwo,
			LoadingOne,
			ZhihuListCover,
			TopNews
		},
		computed:{
			...mapGetters(['DONE_LOADING_TWO','DONE_LOADING_ONE','DONE_NEWS_LATEST','DONE_NEWS_LIST_ROOT'])
		},
		created:function(){
			if(window.innerWidth>640){
				this.ZhihuHeadFixIsShow=false;
				this.backToTopIsShow=true;
			}else{
				this.ZhihuHeadFixIsShow=true;
			}
			var that=this;
			(function backToTop(){
				setInterval(function(){
					if(window.scrollY>400){
						that.ZhihuHeadFixClass='ZhihuHeadFixClass-on';
						that.backToTopIsShow=true;
					}else{
						that.ZhihuHeadFixClass='ZhihuHeadFixClass-none';
						that.backToTopIsShow=false;
					}
				},500)
			})();
			if(!!this.DONE_NEWS_LATEST.stories&&this.DONE_NEWS_LATEST.stories.length>0){//两个感叹号，一个是将它转为布尔值，一个是将它转为相反的布尔值
			}else{
				this.$store.dispatch('FETCH_NEWS_LATEST');
			}
		},
		methods:{
			backToTop(){
				window.scrollTo(0,0);
				this.ZhihuHeadFixClass='ZhihuHeadFixClass-none';
			},
			LoadMoreNews(){
				this.$store.dispatch('FETCH_NEWS_LATEST_MORE');
			}
		}
	}
</script>
<style>
	.homeTransition-enter-active,.homeTransition-leave-active{
		transition:opacity 0.5s;
	}
	.homeTransition-enter,.homeTransition-leave-active{
		opacity: 0;
	}
	.ZhihuHeadFixClass-none{
		position: fixed;
		z-index: 2;
		top:-2rem;
		width: 100%;
		transition:all 0.5s ease;
	}
	.ZhihuHeadFixClass-on{
		position: fixed;
		top:0rem;
		width: 100%;
		transition:all 0.5s ease;
		z-index: 2;
	}
	.news-latest-time{
		border-left: 5px solid #efefef;
		font-size: 0.8rem;
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
	.load-more-button{
		border-style: none;
		outline: none;
		background-color: white;
		border-bottom:1px solid #efefef;
		width: 100%;
		font-size: 0.8rem;
	}
	.back-to-top{
		background-color: white;
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		outline:none;
		border-style: none;

	}
</style>