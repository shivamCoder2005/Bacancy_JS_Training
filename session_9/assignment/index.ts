const prices: number[] = [1, 2, 3, 4, 5]

function calculateTotal(prices: number[]): number | string {
    const totalSum = prices.reduce((acc, curr) => acc += curr, 0)
    return totalSum > 100 ? "Sum Exceed 100" : totalSum
}

console.log(calculateTotal(prices))

