// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.

type UserProfile = {
    name: string,
    age: number,
    email: string
    isActive: boolean
}

type UserPublicProfile = Omit<UserProfile, "email" | "isActive">

type myRecordType = Record<string, UserPublicProfile>


const records: myRecordType = {
    "1": { name: "shivam", age: 21 },
    "2": { name: "shivam", age: 21 },
    "3": { name: "shivam", age: 21 }
    // 4: { name: "shivam" } it will throw error
}

// here key must be string and value must be type of UserPublicProfile