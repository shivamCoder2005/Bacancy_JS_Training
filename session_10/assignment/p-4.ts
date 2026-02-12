// Create an Order using intersection ( & )
// Remove one required property and observe the compiler error

type OrderBase = {
    orderId: number;
    amount: number;
};
type Auditable = {
    createdAt: Date;
    createdBy: string;
};
type Order = OrderBase & Auditable;

// const myOrder:Order = {
    //     orderId:1,
    //     createdAt:new Date(),
    //     createdBy:"me",
    // }
    
    // amount is missing so it will throw error
    

    
    // Create two small object types and combine them using intersection ( & )
// type Animal = {
//     name: string
// }

// type Cat = {
//     voice: string
// }

// type CatType = Animal & Cat

// const mycat: CatType = {
    //     name: "kitty",
    //     voice: "meow"
// }

// Create the same structure using interfaces and extends

interface Animal {
    name: string
}

interface Cat extends Animal {
    voice: string
}

const mycat: Cat = {
    name: "kitty",
    voice: "meow"
}

// Decide which approach feels clearer and why

// we can't say we just use only interface or types it depedns on the usecases

// reason:-
// Use interface → when defining object shapes (especially for OOP / extendable APIs)
// Use type → when you need flexibility (unions, intersections, primitives, advanced types)
