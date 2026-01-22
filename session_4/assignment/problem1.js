// problem 1

const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };

  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;

  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length);
console.log(registry.active[0].name);
console.log(registry.version);

// output
// 2
// Alpha
// undefined

// Explanation:-

// shallow copy just copies the primitive values
// here we have non primitive values like array
// they are pass by reference
// so original and copy both share the same memory location
// so for both properties like active and achived we have same changes in both original and copy
// and in copy if we add version which is primitive values
// so only copy would have this field not original one
// that's why we have undefined in answer