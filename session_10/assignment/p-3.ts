// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access

type Admin = {
    role: 'admin';
    permissions: string[];
};
type Customer = {
    role: 'customer';
    purchaseHistory: number[];
};

type Guest = {
    role: 'guest',
    noOfDayStayed: number
}
type User = Admin | Customer | Guest;


function myfunc(user: User) {
    if (user.role === "admin") {
        console.log(user.permissions)
    }
    else if (user.role === 'customer') {
        console.log(user.purchaseHistory)
    }
    else {
        console.log(user.noOfDayStayed)
    }
}

// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely

interface AdminInterface {
    role: 'admin';
    permissions: string[];
}

interface customerInterface {
    role: 'customer';
    purchaseHistory: number[];
}

type superUser = AdminInterface | customerInterface


function myfunc2(user: superUser) {
    if (user.role === "admin") {
        console.log(user.permissions)
    }
    else {
        console.log(user.purchaseHistory)
    }
}