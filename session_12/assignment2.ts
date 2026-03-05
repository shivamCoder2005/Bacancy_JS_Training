// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .

type FnType = (id: string, active: boolean) => boolean

type FirstArgument<T> = T extends (first: infer X, ...args: any[]) => infer U ? X : never

let myFirstArg: FirstArgument<FnType> = "5"