<template>
	<div>
		<LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
		<ThemeHead :image="DONE_THEME_LIST.image" :name="DONE_THEME_LIST.name" :description="DONE_THEME_LIST.description" :editors="DONE_THEME_LIST.editors"></ThemeHead>
		<div class="theme-list ml2 mr2 mb2">
			<div v-for="item in DONE_THEME_LIST.stories">
				<router-link :to="{name:'news-detail',params:{id:item.id}}">
					<ZhihuListCover :title="item.title" :images="item.images?item.images[0]:'http://daily.zhihu.com/img/new_home_v3/mobile_top_logo.png'"></ZhihuListCover>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	import ThemeHead from '../components/ThemeHead'
	import LoadingTwo from '../components/LoadingTwo'
	import ZhihuListCover from '../components/ZhihuListCover'
	export default{
		name:"ThemeList",
		computed:{
			...mapGetters(['DONE_THEME_LIST','DONE_LOADING_TWO'])
		},
		components:{
			ThemeHead,LoadingTwo,ZhihuListCover
		},
		created:function(){
			this.$store.dispatch('FETCH_THEME_LIST',this.$route.params.id);
		}
	}
</script>