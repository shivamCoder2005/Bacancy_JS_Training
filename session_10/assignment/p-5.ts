// Create reusable aliases for union and intersection types
// Observe how readability improves

type Vehicle = {
    type: string,
    brand: string
}

type Car = {
    fuel: string,
    luxuary: boolean
}

type BMW = Vehicle & Car
type MyVehilce = Vehicle | Car


// Refactor earlier assignments to use these aliases
type BaseOrder = {
    orderId: number;
    amount: number;
}

type AuditedOrder = BaseOrder & {
    createdAt: Date;
    createdBy: string;
}


// Create a type alias for string | number
// Use it in two variables

type mobileNo = string | number

let myMobile: mobileNo = "9723674270"
myMobile = 9909174270


// How does this improve readability?

// Interface improves readability ,especially in OOP-style or large structured models.
// Type aliases are better when you need composed types (A & B, "a" | "b").

