<script>
	import vueImg from './vue.png'
	import coderImg from './coderhouse.png'
	export default {
	componentes: {},
	props: {},
	data () {
		return {
			title: 'Desafío 03 | Vite',
            coderImg,
            coderW: 50,
            vueImg,
            vueW: 50,
		}
	}
}
</script>
<template>
	<div class="header">
		<div class="header-container">
			<img class="header-element" :src="vueImg" :width="vueW" alt="Vue" />
			<h1 class="header-element">{{ title }}</h1>
			<img
				class="header-element"
				:src="coderImg"
				:width="coderW"
				alt="Coder"
			/>
		</div>
	</div>
</template>
<style>
	.header {
		background: gold;
		margin: 0 auto;
	}

	.header-container {
		width: max-content;
		margin: 0 auto;
	}

	.header-element {
		display: inline-block;
		margin: auto 10px;
	}
</style>
