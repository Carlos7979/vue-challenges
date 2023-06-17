<script >
	export default {
	name: 'Info',
	components: {},
	props: {},
	data () {
		return {
			student: 'Carlos Corredor',
            teacher: 'Félix Blanco',
            tutor: 'Christian Gigena',
            subject: 'Vue JS',
            commission: '40500',
		}
	}
}
</script>
<template>
	<div class="info-data">
		<ul class="info">
			<li>Nombre:</li>
			<li>Profesor:</li>
			<li>Tutor:</li>
			<li>Curso:</li>
			<li>Comisión:</li>
		</ul>
		<ul class="data">
			<li><strong v-text="student"></strong></li>
			<li><strong v-text="teacher"></strong></li>
			<li><strong v-text="tutor"></strong></li>
			<li><strong v-text="subject"></strong></li>
			<li><strong v-text="commission"></strong></li>
		</ul>
	</div>
</template>
<style scoped>
	.info-data {
		width: max-content;
		margin: 5px auto;
		display: flex;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: end;
		line-height: 1.5;
	}

	.data {
		padding-left: 0.5rem;
		line-height: 1.5;
	}
</style>
