<script lang="ts">
	import { habits } from '$stores/habit';
</script>

<svelte:head>
	<title>Habitor</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<a class="btn" href="add">
		<div class="i-tabler-plus" />
		Add a new habit
	</a>
	{JSON.stringify($habits)}
</section>

<style lang="scss">
	section {
		max-width: var(--width-xs);
		height: var(--size-screen-h);
		padding: var(--size-4);
		margin: 0 auto;
	}
</style>
