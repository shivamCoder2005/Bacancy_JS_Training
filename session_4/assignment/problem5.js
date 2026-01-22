class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount()); // 10
console.log(Counter.getStaticCount()); // 2
console.log(c1.getStaticCount()); // error

// Explanation:-

// static methods are bound to Class not Object
// they are used to access and modify the static variable
// object can't access static method that's why we have error "c1.getStaticCount is not a function"
