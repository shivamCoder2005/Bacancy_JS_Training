// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number


function wrapInArray<T>(value: T): T[] {
    const arr: T[] = []
    arr.push(value)
    return arr
}

type User = {
    name: string
    age: number
}

interface PaginatedResponse<T> {
    data: T,
    pageNo: number,
    message: string
    status: "SUCCESS" | "FAILURE"
}

const reponse: PaginatedResponse<User[]> = {
    data: [{ name: "shivam", age: 21 }, { name: "manav", age: 18 }],
    pageNo: 5,
    message: "data fetch successfully",
    status: "SUCCESS"
}