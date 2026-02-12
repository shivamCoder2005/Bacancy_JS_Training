// type Animal = {
//     name: string
// }

// type Myanimal = {
//     name: number
// }

// type mix = Animal & Myanimal

// const obj: mix = {
//     name: 5
// }

// interface Animal  {
//     name: string
// }

// interface Myanimal {
//     name: number
// }

// interface mix extends Animal,Myanimal{
    
// }

// const obj: mix = {
//     name: 5
// }


// intersection when conflciting types
// So TypeScript computes:
// name: string & number
// What is string & number?

// That’s an impossible type.
// There is no value that is both a string AND a number.
// So:
// string & number → never

// # 📌 Key Difference

// | Feature           | `type A & B`              | `interface extends` |
// | ----------------- | ------------------------- | ------------------- |
// | Conflict handling | Intersects property types | Errors immediately  |
// | Conflicting types | `string & number → never` | Compile-time error  |
// | Behavior          | Structural merge          | Strict inheritance  |


// # 🧠 Why Interface Is Stricter?

// Because `extends` models inheritance.

// Inheritance requires:

// > The child must be a valid subtype of both parents.
// If parents disagree on property type → impossible.
// So TypeScript blocks it early.


