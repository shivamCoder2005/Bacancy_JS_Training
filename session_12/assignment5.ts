// Create a constructor type for UserRepository .

abstract class BaseRepository<T> {
    abstract getById(id: string): T
}

class UserRepository extends BaseRepository<User> {
    constructor(public repoName: string, public repoSize: number) {
        super()
    }
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


function createInstance(ctrFn: UserRepositoryCtr): UserRepository {
    return new ctrFn()
}

// more general verison

// function createInstance<T>(ctrFn: ctrType<T>, ...args: any[]): T {
//     return new ctrFn(...args)
// }

createInstance(UserRepository)

// Create a callable type that formats User name.

type Formatter = {
    (name: string): string,
    greetMsg: string
}

const nameFormatter: Formatter = (name: string) => {
    return name.toLowerCase().trim()
}

nameFormatter.greetMsg = "hii"



