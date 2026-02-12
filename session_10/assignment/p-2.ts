// Which one forces you to write safer code?

// Create a function that accepts any and performs operations without checks
function withAny(data: any) {
    console.log(data.toUpperCase())
    console.log(data.toString())
    console.log(data * 15)
}

// Create the same function using unknown and add proper type guards

function withUnknown(data: unknown) {
    // console.log(data.toString()) 
    // not allowd before type checking must need to determine its type before using it

    if (typeof data === "string") {
        console.log(data.toLowerCase())
    }
}
// any vs unknown

// any means no type safety
// it allows all types 
// so basically if we are using any we are avoiding typescript

// wheras unknown is safer option rather than any
// it accepts all the type of values
// but before using the values we must decide its type 
// otherwise typescript will throw error


// Compare the compiler behavior and runtime safety

function getParsedData(jsonString: string) {
    const data = JSON.parse(jsonString)
    console.log(data.name)
}

// here JSON.parse return type as any so ts don't give any error at compile time
// but at run time it may be possible that data don't have name property 

