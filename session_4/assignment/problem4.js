function masterClone(original) {
  const copy = { ...original };
  for (let key of Object.keys(original)) {
    if (Array.isArray(original[key])) {
      copy[key] = copyArr(original[key]);
    } else if (typeof original[key] == "object") {
      copy[key] = copyObj(original[key]);
    }
  }
  return copy;
}

function copyArr(original) {
  const copy = [...original];
  for (let i = 0; i < original.length; i++) {
    if (Array.isArray(original[i])) {
      copy[i] = copyArr(original[i]);
    } else if (typeof original[i] == "object") {
      copy[i] = copyObj(original[i]);
    }
  }
  return copy;
}

function copyObj(original) {
  const copy = { ...original };
  for (let [key, value] of Object.entries(original)) {
    if (typeof value === "object") {
      copy[key] = copyObj(value);
    }
  }
  return copy;
}

const user = {
  name: "shivam",
  age: 21,
  address: {
    city: "Dhrangadhra",
    district: "Surendranagar",
    state: "Gujrat",
  },
  hobbies: [
    "Watch Movies",
    "Cricket",
    {
      key1: "val1",
      key2: "val2",
    },
  ],
};

const copy = masterClone(user);
copy.hobbies[2].key1 = "hi";
console.log(copy);
console.log(user);
