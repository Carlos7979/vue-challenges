<script>
	import Header from './components/Header.vue'
	import Info from './components/Info.vue'
	import Table from './components/Table.vue'

	const rows = [
		{ row: ['a', 'b', 'c', 'd', 'e'] },
		{ row: [31, 81, 15, 38, 99] },
		{ row: [35, 28, 62, 12, 41] },
		{ row: [73, 81, 13, 38, 0] }
	]

	const rows2 = [
		{ row: ['a', 'b', 'c', 'd', 'e'] },
		{ row: [5, 70, 84, 6, 2] },
		{ row: [84, 79, 84, 21, 73] },
		{ row: [28, 12, 71, 84, 4] }
	]

	const rows3 = [
		{ row: ['a', 'b', 'c', 'd', 'e'] },
		{ row: [97, 60, 91, 99, 73] },
		{ row: [91, 81, 90, 37, 38] },
		{ row: [92, 91, 20, 35, 28] }
	]

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
				rows,
				rows2,
				rows3,
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
	.buttons-container {
		border: solid 1px;
		border-radius: 5px;
		width: fit-content;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: larger;
		background-color: cornflowerblue;
		margin: 0 auto;
	}

	.buttons-element {
		margin: 5px 10px;
	}

	.component-table-container {
		display: flex;
	}

	.header-table {
		background: gold;
		margin: 0 auto;
	}

	.header-purple {
		background: slateblue;
		color: cornsilk;
		border: 1px solid black !important;
	}
</style>
