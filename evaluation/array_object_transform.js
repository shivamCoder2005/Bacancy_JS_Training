// JS: Transform Array of Objects into Tag-Based Mapping

// You are given an array of objects. Each object contains:
// an id (number)
// a tags array (list of strings)

// Some objects may have duplicate id values.
// Your task is to transform this array into an object where:
// Each key is a unique tag
// Each value is an array of unique IDs associated with that tag
// IDs inside each array should be sorted in ascending order

// Duplicate IDs for the same tag should appear only once

// Example:

// const input = [
// { id: 3, tags: ["a", "b"] },
// { id: 1, tags: ["b", "c"] },
// { id: 2, tags: ["a", "c", "d"] },
// { id: 2, tags: ["d", "e"] }, // duplicate id
// ]

// const output = {
// a: [2, 3],
// b: [1, 3],
// c: [1, 2],
// d: [2],
// e: [2]
// }

const input = [
  { id: 3, tags: ["a", "b"] },
  { id: 2, tags: ["d", "e"] },
  { id: 1, tags: ["b", "c"] },
  { id: 2, tags: ["a", "c", "d"] },
];

const output = input.reduce((acc, curr) => {
  for (let tag of curr.tags) {
    if (!acc[tag]) {
      acc[tag] = [curr.id];
    } else {
      if (!acc[tag].includes(curr.id)) {
        acc[tag].push(curr.id);
        acc[tag].sort()
      }
    }
  }
  return acc;
}, {});

console.log(output)
