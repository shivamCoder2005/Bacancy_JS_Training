// practice
type User = {
    id: number
    name: string
    email: string
}

type IdType<T> = T extends { id: infer U } ? U : never

let myid: IdType<User>


// Create a type IsNumber<T> .
type IsNumber<T> = T extends number ? true : false

let checkNum: IsNumber<User>

// Create a type ExtractEmail<T> that extracts email type if present.

type ExtractEmail<T> = T extends { email: infer U } ? U : never

let myemail: ExtractEmail<{ name: string }>

// here it extracts the email type from given type and if not exist then give never