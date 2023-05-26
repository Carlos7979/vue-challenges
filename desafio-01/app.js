const { createApp } = Vue

createApp({
    data() {
        return {
			title: 'Contador',
			counter: 0,
			coderImg: './img/coderhouse.png',
			coderW: 50,
			vueImg: './img/vue.png',
			vueW: 50,
			student: 'Carlos Corredor',
			teacher: 'Brian Cuenca',
			tutor: 'Christian Gigena',
			subject: 'Vue JS',
			commission: '40500'
		}
    },
	created() {},
	methods: {
		add() {
			++this.counter
		},
		minus() {
			--this.counter
		}
	},
	computed: {}
}).mount('#app')