// Assignment 4
// Create a constant adminUser .
// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically.

const adminUser = {
    name: "shivam",
    age: 21,
    city: "dhg",
    role: "ADMIN",
    access: ["create account","delete account","ban account","update account"]
}

type AdminType = typeof adminUser


// if we change adminUser object like 

// const adminUser = {
//     name: "shivam",
//     password:"abc" // new field
//     age: 21,
//     city: "dhg",
//     role: "ADMIN",
//     access: ["create account","delete account","ban account","update account"]
// }

// now adminType will be chagne accordingly
// const adminUser: {
//     name: string;
//     password: string;
//     age: number;
//     city: string;
//     role: string;
//     access: string[];
// }







