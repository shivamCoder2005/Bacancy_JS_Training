const name = "shivam"
const age = 21

console.log(name.toUpperCase())

function add(a: number, b: number): number {
    return a + b;
}


function func(a: number, b: "hi" | "hello") {
    console.log(a, b)
}

func(5, "hi")

// tuples

function demo(args: [number, string]) {
    args[0].toString()
    args[1].toLowerCase()
}

demo([5, "hi"]) // allowed
// demo(["hi",5])// not allowd
// demo([5,"hi",10]) // not allowd

