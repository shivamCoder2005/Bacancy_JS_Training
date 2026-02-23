// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.

type myUserType = {
    name: string
    age: number
    city: string
}

type ReadOnlyUser<T> = {
    readonly [K in keyof T]: T[K]
}

type StringifiedUser<T> = {
    readonly [K in keyof T]: string
}

type OptionalAndNullableUser<T> = {
    [K in keyof T]?: T[K] | null
}

const user1: ReadOnlyUser<myUserType> = {
    name: "shivam",
    age: 21,
    city: "dhg"
}

// user1.name = "manav" not allowed as it makes all field readonly

const user2: StringifiedUser<myUserType> = {
    name:"shivam",
    age:"21", // here age must be in string 
    city:'dhg'
}

const user3:OptionalAndNullableUser<myUserType> = {
    name:null,
    age:21
}

// here we are giving name as null still it is allowing as we have made all field nullable
// here we are not assiging city also it is allowing as we have mad all field optional also