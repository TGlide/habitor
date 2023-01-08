import { localStorageWritable } from '$lib/localStorageWritable';
import { isObjectType } from '$utils/object';

import { v4 as uuidv4 } from 'uuid';

type Habit = {
	name: string;
};

export function isHabit(obj: unknown): obj is Habit {
	return isObjectType<Habit>(obj, {
		name: 'string',
	});
}

type HabitStore = {
	[id: string]: Habit;
};

function createHabitStore() {
	const store = localStorageWritable<HabitStore>('habitor-habits', {});

	function add(habit: Habit) {
		const id = uuidv4();
		store.update((habits) => {
			habits[id] = habit;
			return habits;
		});
	}

	return {
		...store,
		add,
	};
}

export const habits = createHabitStore();
