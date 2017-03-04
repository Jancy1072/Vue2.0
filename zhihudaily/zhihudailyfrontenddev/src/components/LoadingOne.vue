<template>
	<div class="loading-one center">
		<img src="../../static/zhihu-icon2.png" class="double-flash inline-block"alt="加载图标" height="50">
		<p class="h6">正在加载...</p>
	</div>
</template>
<script>
	export default{
		name:'LoadingOne'
	}
</script>
<style scoped>
	.loading-one{
		width: 100%;
		padding-bottom: 3rem;
	}
	.double-flash{
		animation:double-flash 3s ease infinite;
	}

	@keyframes double-flash{
		0%{
			opacity: 1;
		}
		12.5%{
			opacity: 0;
		}
		25%{
			opacity: 1;
		}
		37.5%{
			opacity: 0;
		}
		50%{
			opacity: 1;
		}
		100%{
			opacity: 1;
		}
	}
</style>