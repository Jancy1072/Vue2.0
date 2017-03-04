<template>
	<div class="loading-two">
		<img src="../../static/zhihu-icon2.png" class="double-flash"alt="加载图标">
		<p class="h6">正在加载...</p>
	</div>
</template>
<script>
	export default{
		name:'LoadingTwo',
		
	}
</script>
<style scoped>
	.loading-two{
		width: 100%;
		height: 100vh;
		/*窗口高度的100%*/
		padding-top:25%;
		background-color: white;
	}
	.loading-two p{
		text-align: center;
	}
	.double-flash{
		animation:double-flash 3s ease infinite;
		width: 50px;
		margin-left: 50%;
		transform:translateX(-50%)
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