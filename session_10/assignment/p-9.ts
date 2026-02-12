// Create a service class exposing only required public methods
// Keep internal data private
// Explain which members should be accessible and why
// Create a class with public, private, and protected members
// Try accessing them outside the class
// Which members should be exposed and why?

class UserService {
    public serviceName: string = "User Service";
    private users: string[] = [];
    protected maxUsers: number = 100;

    constructor() { }

    public addUser(name: string) {
        if (this.users.length >= this.maxUsers) {
            throw new Error("User limit reached");
        }
        this.users.push(name);
    }

    public getUsers() {
        return [...this.users];
    }

    private validateName(name: string): boolean {
        return name.length > 2;
    }
}

const myservice = new UserService()

console.log(myservice.serviceName)

// not accessible
// console.log(myservice.users)
// console.log(myservice.maxUsers)

// same for methods

myservice.addUser("shivam")
myservice.getUsers()

// private method can't be invoked outside of the class

// myservice.validatename("shivam")