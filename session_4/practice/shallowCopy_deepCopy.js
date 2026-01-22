const user = {
  name: "shivam",
  age: 21,
  address: {
    city: "Dhrangadhra",
    district: "Surendranagar",
    state: "Gujrat",
  },
  hobbies: ["Watch Movies", "Cricket"],
};


// shallow copy

const shallowUser = {...user}

user.hobbies.push("Reading Book")

console.log(user.hobbies) // [ 'Watch Movies', 'Cricket', 'Reading Book' ]
console.log(shallowUser.hobbies)  // [ 'Watch Movies', 'Cricket', 'Reading Book' ]

user.address.city = "Delhi"
console.log(user.address.city) // Delhi
console.log(shallowUser.address.city) // Delhi

// reason: 
// shallow copy just create copy of only top level primitive types here hobbies is array which is 
// non primitive so its reference is copied not value

// deep copy

// 1) using JSON Serialization

const jsonString = JSON.stringify(user)
const deepUser = JSON.parse(jsonString)

console.log(deepUser)

user.hobbies.push("Music")

console.log(user.hobbies) // [ 'Watch Movies', 'Cricket', 'Reading Book', 'Music' ]
console.log(deepUser.hobbies) // [ 'Watch Movies', 'Cricket', 'Reading Book' ]


user.address.city = "Mumbai"

console.log(user.address.city) // Mumbai
console.log(deepUser.address.city) // Delhi

// 2) Structured Clone

const deepCopy = structuredClone(user)

user.address.city = "Dhrangadhra"

// no change
console.log(user.address.city) // Dhrangadhra
console.log(deepUser.address.city) // Delhi


