<template>
	<transition name="themeTransition">
		<div>
			<LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
			<div class="m2">
				<div v-for="item in DONE_THEMES.others">
					<router-link :to="{name:'theme-list',params:{id:item.id}}">
						<div class="clearfix themes-list mt1">
							<div class="col col-2 center">
								<img :src="'http://119.29.60.189:3000/zhihu/resource?url='+item.thumbnail" width="40"style="border-radius:40px"class="mb1">
							</div>
							<div class="col col-10">
								<p class="h6">{{item.name}}</p>
							</div>
							<div class="col col-10" style="margin-top:6px">
								<p style="color:#898888;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{item.description}}</p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>	
	</transition>
</template>
<script>
	import {mapGetters} from 'vuex'
	import LoadingTwo from '../components/LoadingTwo'
	export default{
		name:'Themes',
		components:{
			LoadingTwo
		},
		computed:{
			...mapGetters(['DONE_LOADING_TWO','DONE_THEMES'])
		},
		created:function(){
			this.$store.dispatch('FETCH_THEMES');
		}
	}
</script>
<style scoped>
	p{
		margin: 0 0;
	}
	.themes-list{
		border-bottom: 1px solid #f1efef;
	}
	.themeTransition-enter,.themeTransition-leave-active{
		opacity: 0;
	}
	.themeTransition-enter-active,.themeTransition-leave-active{
		transition:opacity 0.5s;
	}
</style>