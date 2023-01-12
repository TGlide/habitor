import { localStorageWritable } from '$lib/localStorageWritable';
import { toggle } from '$utils/array';
import { isObjectType } from '$utils/object';

import { v4 as uuidv4 } from 'uuid';

type Habit = {
	name: string;
	dates?: string[];
};

export function isHabit(obj: unknown): obj is Habit {
	return isObjectType<Habit>(obj, {
		name: 'string',
		dates: (v) => v === undefined || (Array.isArray(v) && v.every((d) => typeof d === 'string')),
	});
}

type HabitStore = Record<string, Habit>;

function createHabitStore() {
	const store = localStorageWritable<HabitStore>('habitor-habits', {});

	function add(habit: Habit) {
		const id = uuidv4();
		store.update((habits) => {
			habits[id] = habit;
			return habits;
		});
	}

	function remove(id: string) {
		store.update((habits) => {
			delete habits[id];
			return habits;
		});
	}

	function toggleCheck(id: string, date: string) {
		store.update((habits) => {
			if (habits[id]) {
				console.log(habits[id].dates);
				habits[id].dates = toggle(habits[id].dates ?? [], date);
			}
			return habits;
		});
	}

	return {
		...store,
		add,
		toggleCheck,
		remove,
	};
}

export const habits = createHabitStore();
