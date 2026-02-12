// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties

interface User {
    name: string,
    age: number
}

interface Admin extends User {
    role: "Admin"
    access: string[]
}

interface Customer extends User {
    role: "Customer"
    cart: string[],
}

type myUser = Admin | Customer
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function

function acceptUser(user: myUser) {
    if (user.role == "Admin") {
        console.log("Welcom Admin")
        user.access.forEach(a => {
            console.log(a)
        });
    }
    else {
        console.log("Welcom Admin")
        user.cart.forEach(a => {
            console.log(a)
        });
    }
}

acceptUser({ name: "shivam", age: 21, role: "Customer", cart: ["shirts", "pants"] })

// don't accept throw error
// acceptUser({ name: "shivam", age: 21 ,access:["analysis","add & delete products"]})
// acceptUser({ name: "shivam", age: 21, cart: ["tea", "shirts", "snacks"] })

// Design an interface for an API response object

type Item = {
    name: string,
    price: number,
    quantity: number
}

interface ApiResponse {
    data: [Item],
    status: "Success" | "Fail",
    statusCode: number,
    message: string
}

// Create a function that accepts this interface as a parameter

function show(response: ApiResponse) {
    if (response.status === "Success") {
        console.log(`api Success with status code ${response.statusCode}`)
        console.log(response.message)
        console.log("Data is :", response.data)
    }
    else {
        console.log(`api Fail with status code ${response.statusCode}`)
        console.log(response.message)
    }
}


// Create an interface for a Product
// Create a variable that follows this interface

interface Product {
    brand: string,
    price: number,
    stock: number,
    billing(price: number, quantity: number): number // treat as method and can't be optional and this works as normal function
    // billing?: (a : number) => number // treat as property whose values is function this works differently
}


const tea: Product = {
    brand: "tata tea",
    price: 100,
    stock: 10,
    billing(a, b) {
        return a * b
    }
}

const shoes: Product = {
    brand: "Nike",
    price: 15000,
    stock: 100,
    billing(a, b) {
        return a * b
    }
}