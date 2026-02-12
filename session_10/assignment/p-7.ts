
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
enum PaymentStatus {
    INITIATED = "INITIATED",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}

// Write a function that accepts only this enum
// function checkStatus(status: PaymentStatus) {
//     if (status === PaymentStatus.INITIATED) {
//         console.log("payment intiated")
//     }
//     else if (status === PaymentStatus.SUCCESS) {
//         console.log("payment success")
//     }
//     else {
//         console.log("payment failed")
//     }
// }

// checkStatus(PaymentStatus.SUCCESS)

// wrirting function with magic string

function checkStatus(status: "INITIATED" | "SUCCESS" | "FAILED") {
    if (status === "INITIATED") {
        console.log("payment intiated")
    }
    else if (status === "SUCCESS") {
        console.log("payment success")
    }
    else {
        console.log("payment failed")
    }
}

checkStatus("INITIATED")


// Why enums are better than magic strings?

// enum gives run time safety as they are converted into objects which exists at run time
// magic strings are basically union of literal types
// so they are gone at run time after compilation
// enum are reusable 
// we can map values with it also




