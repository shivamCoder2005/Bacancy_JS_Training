// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.

function activateUser<T extends {isActive:boolean}>(obj:T){
    if(!obj.isActive) obj.isActive = true
}

activateUser({name:"shivam",isActive:false}) // allowed
// activateUser({name:"shivam"}) // throw err

function loginUser<T extends {id:number,email:string}>(obj:T){
    // db logic to find user by its id
    // then verify its email & optionally password
}

loginUser({name:"shivam",email:"abc@gmail.com",id:12}) // allowed
// loginUser({name:"shivam",email:"abc@gmail.com",password:"abc"}) // not allowed