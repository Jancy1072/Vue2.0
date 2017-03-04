<template>
	<transition name="aboutTransition">
		<div class="p2">
			<h4>版权声明</h4>
			<p class="h6">
				©️知乎 与 ©️知乎日报 所有内容版权归 ©️知乎Zhihu 公司所有。该网页任何内容不得用于会影响、触犯知乎公司利益的地方。
			</p>
		</div>
	</transition>
</template>
<script>
	export default{
		name:'About'
	}
</script>
<style scoped>
	p{
		text-indent: 1rem;
	}
	.aboutTransition-enter,.aboutTransition-leave-active{
		opacity: 0;
	}
	.aboutTransition-enter-active,.aboutTransition-leave-active{
		transition:opacity 0.5s;
	}
</style>