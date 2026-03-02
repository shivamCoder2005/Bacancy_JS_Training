// task 1 : create a PaymentState discriminated union

type PaymentState =
    | { status: "Pending" }
    | { status: "Failure", reason: string }
    | { status: "Success", amount: number, msg: string }


// task 2: add exhaustive checking to check all the states

function checkPaymentStatus(payment: PaymentState) {
    switch (payment.status) {
        case "Success":
            console.log("Payemnt Successful!!!!")
            return
        case "Failure":
            console.log("Payment Failed!!!!")
            return
        case "Pending":
            console.log("Pending ........")
            return
        default:
            const _flag: never = payment
            console.log("Invalid Status")
    }
}

// task 3 : Create a generic APIResponse<T> for products

type Success<T> = { type: "Success", data: T[], msg: string, statusCode: number }

type Failure = { type: "Failure", statusCode: number, reason: string }

type APIResponse<T> = Success<T> | Failure

// task 4 : write a type guard to check if response is success

function isSuccess<T>(res: APIResponse<T>): res is Success<T> {
    return res.type === "Success" ? true : false
}

// this does not work because 
// TS only know isSuccess returns a boolean. It don’t know that res is now a Success type

// function isSuccess<T>(res: APIResponse<T>) {
//     return res.type === "Success" ? true : false
// }

// using typeguard to determine response 

function sendResponse<T>(res: APIResponse<T>) {
    if (isSuccess(res)) {
        console.log(res.data)
        console.log("sending success response.....")
    }
    else {
        console.log(res.reason)
        console.log("sending failure response")
    }
}

// testing 

type Product = {
    name: string,
    price: number,
    quantity: number
}

const myResponse: APIResponse<Product> = {
    data: [
        { name: "tea", price: 10, quantity: 50 },
        { name: "bag", price: 100, quantity: 5 },
        { name: "shirts", price: 1000, quantity: 2 }
    ],
    msg: "Products fetch successfully",
    type: "Success",
    statusCode: 200
}

sendResponse<Product>(myResponse)
