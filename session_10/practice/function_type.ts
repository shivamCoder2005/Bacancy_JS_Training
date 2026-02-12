type myfunc = (a: number, b: number) => number

const func1: myfunc = (x: number, y: number): number => {
    return x + y
}

// optional param

function demo(x: number, y?: string) {
    // y.toString() // throw err becuase y : string | undefined
    y?.toLowerCase()
}

// default param

function demo2(x: number, y: string = "abc") {
    // not give any err becuae y is always be string type
    y.toLowerCase()
}


function sum({ a, b, c }: { a: number, b: number, c: number }) {
    console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });