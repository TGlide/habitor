<script lang="ts">
	import { habits } from '$stores/habit';
</script>

<svelte:head>
	<title>Habitor</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="contained-xs p-4">
	<a class="btn" href="add">
		<div class="i-tabler-plus" />
		Add a new habit
	</a>
	{JSON.stringify($habits)}
</section>
