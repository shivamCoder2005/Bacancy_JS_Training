// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

function format(num: number): string
function format(date: Date): string
function format(input: number | Date): string {
    if (typeof input === "number") {
        return input.toString()
    }
    return input.toString()
}

console.log(format(5))
console.log(format(new Date()))