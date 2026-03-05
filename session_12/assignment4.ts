// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .

type myUser = {
    name: string,
    age: number
}

type Product = {
    name: string,
    price: number
}

abstract class Service<T> {
    abstract execute(input: T): void
}

class UserService extends Service<myUser> {
    execute(input: myUser): void {
        console.log(`Hi from ${input.name}!!!`)
    }
}

class ProductService extends Service<Product> {
    execute(input: Product): void {
        console.log(`prodcut detalis are  name : ${input.name}  price: ${input.price}`)
    }
}