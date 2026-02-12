// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers

let myname = "shivam"
const myage = 21

// for let infered as assigned value type here string because of "shivam"
// for const it takes 21 as type for more strict typing it is called literal typing

// myname = 21 // throw err number is not assignable to type string

// myage = 22 // any assignment to const gives error

function sum(a: number, b: number) {
    return a + b;
}

// return type for sum is number becuase here a and b also number so a+b will always be