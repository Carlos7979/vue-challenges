<script>
	export default {
		components: {},
		props: {
			tableTitle: String,
			headerClass: Object,
			rows: Array,
			rowStyle: Array
		}
	}
</script>
<template>
	<div class="table-container">
		<h3 class="table-title">{{ tableTitle }}</h3>
		<table>
			<tbody>
				<tr
					v-for="(column, i) of rows"
					:key="i + '-column'"
					:style="
						i % 2
							? rowStyle[0]
							: rowStyle[1] + (i === 0 ? rowStyle[2] : '')
					"
				>
					<th :class="i === 0 ? headerClass : ''" scope="row">
						{{ i === 0 ? 'Nº' : i }}
					</th>
					<td
						v-if="i"
						v-for="(row, i) of column.row"
						:key="i + '-row'"
					>
						{{ row }}
					</td>
					<th
						v-if="!i"
						:class="headerClass"
						v-for="(row, i) of column.row"
						:key="i + '-row'"
						scope="col"
					>
						{{ row }}
					</th>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style scoped>
	.table-container {
		margin: 20px auto;
		width: fit-content;
	}

	.table-title {
		text-align: center;
	}

	th,
	td {
		border: 1px solid;
		padding: 0 10px;
		text-align: center;
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
