// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios.

type test = {
    name: string
    age: number,
    email: string,
    password: string,
    marks: number
}

type ReadonlyByKeys<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

const data: ReadonlyByKeys<test, "age" | "email"> = {
    name: "shivam",
    age: 21,
    email: "demo@gmail.com",
    password: "1230",
    marks: 52
}

// data.age = 50
// data.email = "newemail@gmail.com"

// not allowed as they are readonly
// but

data.name = "manav" // allowed becuase it is not readonly

type NonNullableFields<T> = {
    [P in keyof T]: T[P]
}

// const data2:NonNullableFields<test> = {
//     name:null,
//     email:undefined
// }

// null and undefined are not allowed

