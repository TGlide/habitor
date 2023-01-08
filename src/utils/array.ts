// function that given an array and an item, toggles the item in the array
export const toggle = <T>(array: T[], item: T): T[] => {
	const index = array.indexOf(item);
	if (index === -1) return [...array, item];
	return [...array.slice(0, index), ...array.slice(index + 1)];
};
