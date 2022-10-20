export const shuffleArray: <T>(arg0: T[]) => T[] = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
};

// This calculates how many Item Cards we can cram into one item container
export const CramItemCalc = (ItemContainer: HTMLElement) => {
	const { width: containerWidth, rowGap: gap } = window.getComputedStyle(ItemContainer);
	const itemWidth = 270 + parseInt(gap);
	return Math.floor(parseInt(containerWidth) / itemWidth);
};
