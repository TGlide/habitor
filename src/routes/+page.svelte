<script lang="ts">
	import { habits } from '$stores/habit';
	import { dayjs } from '$utils/date';
	import { objectEntries } from '$utils/object';

	let date = dayjs();
	let formattedDate = date.format('YYYY-MM-DD');

	$: isToday = date.isSame(dayjs(), 'day');
</script>

<svelte:head>
	<title>Habitor</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="font-display fs-4 weight-extrabold text-center">
		{isToday ? 'Today' : date.format('dddd')}
	</h1>
	<h2 class="font-display weight-medium text-center color-gray-6 mt-2px">
		{isToday ? date.format('MMM D') : date.format('ddd, MMM D')}
	</h2>

	<div class="grid grid-cols-2 gap-2 mt-4">
		{#each objectEntries($habits) as [id, habit] (id)}
			<div class="habit">
				<h3 class="fs-1 weight-semibold">{habit.name}</h3>
				<input
					type="checkbox"
					class="checkbox"
					checked={$habits[id].dates?.includes(formattedDate)}
					on:change={() => habits.toggleCheck(id, formattedDate)}
				/>
			</div>
		{/each}
	</div>
	<div class="flex items-end mt-auto">
		<a class="btn w-full" href="add">
			<div class="i-tabler-plus" />
		</a>
	</div>
</section>

<style lang="scss">
	section {
		max-width: var(--width-xs);
		height: var(--size-screen-h);
		padding: var(--size-4);
		margin: 0 auto;

		display: flex;
		flex-direction: column;
	}

	.habit {
		aspect-ratio: var(--ratio-square);
		background: var(--color-sand-11);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);

		padding: var(--size-4);

		position: relative;

		.checkbox {
			position: absolute;
			bottom: var(--size-4);
			right: var(--size-4);
		}
	}

	.checkbox {
		border: 2px solid var(--color-sand-1);
		border-radius: var(--radius-sm);
		cursor: pointer;

		width: var(--size-6);
		height: var(--size-6);

		transition: background 100ms ease;

		&:checked {
			background: var(--color-teal-8);
			border-color: var(--color-teal-1);

			&::after {
				@apply i-tabler-check;

				color: var(--color-teal-1);
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
</style>
