// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.


function updateField<T, K extends keyof T>(obj: T, key: K, updatedValue: T[K]): T {
    obj[key] = updatedValue
    return obj
}


type MyUser = {
    name:string,
    age:number,
    city:string
}

const myuser:MyUser = {
    name:"shivam",
    age:21,
    city:"dhg"
}

updateField(myuser,"name","manav")
// updateField(myuser,"marks",50) // not allowed as marks is not the valid key not in user type