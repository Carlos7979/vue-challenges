<script>
	import HelloWorld from './components/HelloWorld.vue'
	import TheWelcome from './components/TheWelcome.vue'
	import Header from './components/Header/Header.vue'
	import Info from './components/Info.vue'
	import Table from './components/Table.vue'

	export default {
		components: {
			Header,
			Info,
			Table
		},
		data() {
			return {
				headerClass: {
					'header-table': true,
					'header-purple': false
				},
				rows: [
					{ row: ['a', 'b', 'c', 'd', 'e'] },
					{ row: [31, 81, 15, 38, 99] },
					{ row: [35, 28, 62, 12, 41] },
					{ row: [73, 81, 13, 38, 0] }
				],
				rows2: [
					{ row: ['a', 'b', 'c', 'd', 'e'] },
					{ row: [5, 70, 84, 6, 2] },
					{ row: [84, 79, 84, 21, 73] },
					{ row: [28, 12, 71, 84, 4] }
				],
				rows3: [
					{ row: ['a', 'b', 'c', 'd', 'e'] },
					{ row: [97, 60, 91, 99, 73] },
					{ row: [91, 81, 90, 37, 38] },
					{ row: [92, 91, 20, 35, 28] }
				],
				rowStyle: [
					'background: white',
					'background: gray',
					'; background: gold'
				]
			}
		},
		created() {},
		methods: {
			toggleColor() {
				this.headerClass['header-purple'] =
					!this.headerClass['header-purple']
			},
			returnRows(i) {
				const n = i === 0 ? '' : i + 1
				return this[`rows${n}`]
			}
		},
		computed: {}
	}
</script>

<template>
	<Header></Header>
	<div class="main">
		<Info></Info>
		<hr />
		<div class="buttons-container">
			<button @click="toggleColor" class="buttons-element">
				Cambia color
			</button>
		</div>
		<div class="component-table-container">
			<Table
				v-for="(n, i) in 3"
				:key="`${i + 1}-table`"
				:rows="returnRows(i)"
				:row-style="rowStyle"
				:table-title="`Tabla ${i + 1}`"
				:header-class="headerClass"
			></Table>
		</div>
	</div>
</template>

<style scoped>
	header {
		line-height: 1.5;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);
		}

		.logo {
			margin: 0 2rem 0 0;
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
