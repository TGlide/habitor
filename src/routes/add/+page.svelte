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

<section class="contained-xs h-screen p-4 mx-auto ">
	<form class="flex flex-col h-full" on:submit={handleSubmit}>
		<div class="header">
			<span>
				<a class="link inline-flex" href="/">
					<div class="i-tabler-chevron-left" />
					Back
				</a>
			</span>
			<h1 class="text-center font-display fs-3 weight-semibold">New Habit</h1>
		</div>

		<div class="grid gap-4 mt-4">
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
			<a class="btn btn-gray justify-center flex-1" href="/">
				<div class="i-tabler-chevron-left" />
			</a>
			<button class="btn justify-center flex-2" type="submit">Create new habit</button>
		</div>
	</form>
</section>

<style lang="scss">
	.header {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}
</style>
