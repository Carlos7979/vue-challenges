export default {
	components: {},
	props: {},
	data () {
		return {
			student: 'Carlos Corredor',
            teacher: 'Brian Cuenca',
            tutor: 'Christian Gigena',
            subject: 'Vue JS',
            commission: '40500',
		}
	},
	template: `
		<div class="info-data">
			<ul class="info">
				<li>Nombre: </li>
				<li>Profesor:</li>
				<li>Tutor: </li>
				<li>Curso: </li>
				<li>Comisión: </li>
			</ul>
			<ul class="data">
				<li><strong v-text="student"></strong></li>
				<li><strong v-text="teacher"></strong></li>
				<li><strong v-text="tutor"></strong></li>
				<li><strong v-text="subject"></strong></li>
				<li><strong v-text="commission"></strong></li>
			</ul>
		</div>
	`
}