// problem 3

function SmartPhone(brand) {
  this.brand = brand;

  return {
    brand: "Generic",
    os: "Android",
  };
}

SmartPhone.prototype.getBrand = function () {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand); // Generic
console.log(myPhone.getBrand); // undefined

// Explnation:-

// Rule:- If a constructor returns an object, JavaScript ignores this and returns that object instead.

// that's why myPhone.brand gives Generic not Apple

// now same way,
// {
//   brand: "Generic",
//   os: "Android",
// }

// we don't have any getBrand property here so undefined
