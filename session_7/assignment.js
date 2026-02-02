// // Q1

const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

// ouptut :- Dell

// Reason :- laptop is caller object and getBrand is normal function ( not arrow ) 
//          so this refers to laptop object 

// // Q2. Basic Promise Flow

console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

// // output:- 1 3 2

// Reason :- First top level code executes so 1 and 3 executed 
//          promise goes into microtask queue
//          after top level code promise from microtask executes


// // Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

// output :- Error Occurred

// reason :- when promise reject it is caught into catch block 
//           data passed in reject as param recives as err in call back

// // Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());

// output :- Online

// reason :- status variable and status property are completely different thing
//           when getStatus method is called using server object this refers to server object
//           inside function we have this.status (status as a property not variable)
//           that's why we got Online as a answer


// // Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

// output :- 20

// reason :- data passsed in resolve got in .then 
//           .then mulitply it by 2 and return (implicit due to arrow function)
//           next .then recevies 20 and console it


// // Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

// ouptut : undefined

// reason : we are not calling the func using user object just passing its reference to print
//          now print is called by window object (in browser)
//          this refers to window object and window don't have name property so undefined

// // Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// output : Start End Promise Timeout

// reason : first top level code executes -> Start End
//          timer goes to macrotask queue and promise goes to microtask queue
//          priority : microtask > macrotask
//          so first promise get chance to executes -> Promise
//          then time -> Promise


// // Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();

// ouptut : undefined

// reason : arrow function don't have this they inherit from his nearest functional scope parent
//          here there is no funcional scope as parent for arrow function
//          default refers to Window Object
//          window don't have title so undefined

// // Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

// ouptut :- 5 10

// reason :- resolve data goes as val in .then -> 5
//          .then return val + 5 = 10 
//          receives by next .then as val and console log -> 10

// // Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

// output Fail Recovered

// reason :- reject data catch as err in .catch 
//           data return from .catch caught by .then as res
//           now res got console log 

// // Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

// // output : A E C D B

// reason : first top level code executes -> A E
//          timer goes in macro task queue
//          promise goes into microtask queue
//          first microtask promise resolved -> C  and again we have promise goes into microtask
//          still microtask have some resolved promise so it get chance to execute
//          now second promise resolved -> D
//          timer got resolved -> B

// // Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));

// // output Error 1

// // Reason :- Promise.all fail if one of promise is fail 
// //          here second proimse is rejected so all got rejected 
// //          error caught in catch


// // Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

// output :- undefined

// reason :- when updateScore executes it calls setTimeout (web api)
//          callback of settimeout is later on called by window after 100ms
//          now caller object is window and window don't have score so undefined
//          to solve it use arrow function in setTimeout as callback function



// // Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

// output Caught Error 10

// reason :-  resolve data goes into .then ->  it throws error goes into .catch ->
//            it return data -> goes into next .then and console it 


// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

// output : C A D B

// Reason :- logs C
//           foo is called async function logs A
//           then await hit js leave that block and untill await is resolved
//           logs D
//           promise resolved now furthr code starts to executes logs B


// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

// output :- Cleanup Done

// Reason :-  finally() does NOT modify the resolved value
//            Whatever you return from finally is ignored
//            The original promise value continues unchanged


// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

// output : undefined 10

// reason : a is hoisted as undefined beacuae we are try to access it befor init
//          then promise goes to microtask queue
//          when it resolve a is already changed to 10


// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

// output : End P1 P2 T2 T1

// reason : top level code executes -> End logs
//          both promise goes into microque and timer macroqueue
//          first promise resolved -> P1 logs


// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

// output :- Sarah

// Reason:-
// When you write print = () => { ... } inside a class, it is not actually added to the class prototype. Instead, it is defined as an instance property during construction.

// Because it’s an arrow function, this is permanently bound to the instance (m) the moment new Manager("Sarah") is called.
