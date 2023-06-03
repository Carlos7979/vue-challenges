export default {
	componentes: {},
	props: {},
	data () {
		return {
			title: 'Desafío 02 | Componentes',
            coderImg: './img/coderhouse.png',
            coderW: 50,
            vueImg: './img/vue.png',
            vueW: 50,
		}
	},
	template: `
		<div class="header">
			<div class="header-container">
				<img class="header-element" :src="vueImg" :width="vueW" alt="Vue" />
				<h1 class="header-element">{{title}}</h1>
				<img class="header-element" :src="coderImg" :width="coderW" alt="Coder" />
			</div>
		</div>
	`
}