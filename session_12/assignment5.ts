// Create a constructor type for UserRepository .

type User = {
    id: number,
    name: string
    email: string
}

abstract class BaseRepository<T> {
    abstract getById(id: string): T
}

class UserRepository extends BaseRepository<User> {
    getById(id: string): User {
        return {
            id: 5,
            name: "Alex",
            email: "alex@test.com",
        }
    }
}

type ctrType<T> = new (...args: any[]) => T

type UserRepositoryCtr = ctrType<UserRepository>

function createUserInstance(ctr: UserRepositoryCtr): UserRepository {
    return new ctr()
}

createUserInstance(UserRepository)

// more general verison

// function createInstance<T>(ctrFn: ctrType<T>, ...args: any[]): T {
//     return new ctrFn(...args)
// }


// Create a callable type that formats User name.

type Formatter = {
    (name: string): string,
    greetMsg: string
}

const nameFormatter: Formatter = (name: string) => {
    return name.toLowerCase().trim()
}

nameFormatter.greetMsg = "hii"





