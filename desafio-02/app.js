import ComponentTable from "./components/Table.js"
import Info from "./components/Info.js"
import ComponentHeader from "./components/Header.js"

export default {
	components: {
		ComponentTable,
		Info,
		ComponentHeader
	},
    data() {
        return {
            headerClass: {
                'header-table': true,
                'header-purple': false
            },
			rows: [
				{row: ['a', 'b', 'c', 'd', 'e']},
				{row: [31, 81, 15, 38, 99]},
				{row: [35, 28, 62, 12, 41]},
				{row: [73, 81, 13, 38,  0]}
			],
			rows2: [
				{row: ['a', 'b', 'c', 'd', 'e']},
				{row: [ 5, 70, 84,  6,  2]},
				{row: [84, 79, 84, 21, 73]},
				{row: [28, 12, 71, 84,  4]}
			],
			rows3: [
				{row: ['a', 'b', 'c', 'd', 'e']},
				{row: [97, 60, 91, 99, 73]},
				{row: [91, 81, 90, 37, 38]},
				{row: [92, 91, 20, 35, 28]}
			],
			rowStyle: ['background: white', 'background: gray', '; background: gold']
        }
    },
    created() {},
    methods: {
        toggleColor() {
            this.headerClass['header-purple'] = !this.headerClass['header-purple']
        },
		returnRows(i) {
			const n = i === 0 ? '' : i + 1
			return this[`rows${n}`]
		}
    },
    computed: {}
}
