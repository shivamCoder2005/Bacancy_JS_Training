type User = {
    name: string,
}

function isUser(data: unknown): data is User {
    if (typeof data === "object" && data != null && typeof (data as any).name === "string") {
        return true
    }
    return false
}

const myobj = {
    name: 21
}

console.log(isUser(myobj))