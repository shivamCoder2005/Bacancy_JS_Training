// Write a function with required and optional parameters
// Define return types explicitly
// Call it with and without the optional argument

function add(a: number, b: number, c?: number): number {
    return a + b;
}

// Create a small utility function that would exist in a real project
// Write a function with one required and one optional parameter

function addPost(title: string, authroName: string, authorAge?: number) {
    const newPost = {
        title: title,
        authroName: authroName,
        authorAge: authorAge
    }
    
    // db logic to add this post to db
}

addPost("event loop internals", "shivam")
addPost("event loop internals", "shivam", 20)

// both works
// but if we need to perform any operation with authorAge which is optional param
// we need to check wheather it is undefined or not