// JS: Chunk an Array

// Write a function chunkArray(arr, size) that:
// Splits an array into smaller arrays (chunks) of a given size
// Returns a new array containing these chunks
// Uses reduce
// Uses slice OR index-based logic

// Does not use loops (for, while)

// 1st way

// function chunkArray(arr, chunkSize) {
//   if (chunkSize < 0) throw Error("Invalid Chunk Size");
//   if (chunkSize >= arr || chunkSize == 0) {
//     return arr;
//   }
//   const result = [];
//   const lastChunk = arr.reduce((acc, curr) => {
//     if (acc.length == chunkSize) {
//       result.push(acc);
//       acc = [curr];
//     } else {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
//   result.push(lastChunk);
//   return result;
// }



// 2nd way
// function chunkArray(arr, chunkSize) {
//   if (chunkSize < 0) throw Error("Invalid Chunk Size");
//   if (chunkSize >= arr || chunkSize == 0) {
//     return arr;
//   }
//   return arr.reduce((acc, curr, index) => {
//     if (index % chunkSize == 0) {
//       acc.push(arr.slice(index, index + chunkSize));
//     }
//     return acc;
//   }, []);
// }

const arr = [1, 2, 3, 4, 5];
const chunkSize = 2;
console.log(chunkArray([1, 2, 3, 4, 5], 2));



