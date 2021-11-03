
// This calculates how many Item Cards we can cram into one item container
export const CramItemCalc = (ItemContainer: HTMLElement) => {
    const { width: containerWidth, rowGap: gap } = window.getComputedStyle(ItemContainer)
    const itemWidth = 270 + parseInt(gap)
    return Math.floor( parseInt(containerWidth) / itemWidth )
}