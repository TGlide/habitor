<script lang="ts">
	import '$styles/index.scss';
	import 'uno.css';

	export const ssr = false;
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		height: var(--size-full);
	}
</style>
