<script lang="ts">
	import { goto } from '$app/navigation';
	import { habits, isHabit } from '$stores/habit';
	import { formDataToObject } from '$utils/form';
	import { randomPick } from '$utils/random';

	const placeholders = ['Play guitar', 'Learn to code', 'Read a book', 'Learn a new language'];

	function handleSubmit(e: Event) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget as HTMLFormElement);
		const data = formDataToObject(formData);

		// TODO: Error handling
		if (!isHabit(data)) return;

		habits.add(data);
		goto('/');
	}
</script>

<form on:submit={handleSubmit}>
	<div class="grid gap-4">
		<fieldset>
			<label for="name" class="weight-medium">I want to</label>
			<input
				class="block mt-2 border-pink-2 border-2px border-solid p-1 rounded-sm p-2 w-full"
				type="text"
				placeholder={randomPick(placeholders)}
				name="name"
				required
				autofocus
			/>
		</fieldset>
	</div>
	<div class="flex gap-4 mt-auto items-end">
		<a class="btn btn-sand flex-1" href="/">
			<div class="i-tabler-arrow-left" />
		</a>
		<button class="btn flex-3" type="submit">
			<div class="i-tabler-file" />
			Create new habit</button
		>
	</div>
</form>

<style lang="scss">
	form {
		max-width: var(--width-xs);
		height: var(--size-screen-h);
		padding: var(--size-4);
		margin: 0 auto;

		display: flex;
		flex-direction: column;
	}
</style>
