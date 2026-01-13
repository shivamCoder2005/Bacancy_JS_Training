// task-1 :- Number check
const checkNum = (num) => {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
};

console.log(`Given Number is ${checkNum(0)}`);

// task 2 :- Even/Odd In Range
for (let i = 1; i <= 20; i++) {
  let type = i % 2 == 0 ? "Even" : "Odd";
    console.log(i, " -> ", type);
}

// task 3:-Role Access using switch-case
const checkAccess = (role) => {
  switch (role) {
    case "ADMIN":
      console.log("Full Access");
      break;
    case "USER":
      console.log("Limited Access");
      break;
    case "MANAGER":
      console.log("Moderate Access");
      break;
    default:
      console.log("Invalid Role");
  }
};

checkAccess("USER");

// task 4: Total Price Function

const calculateTotalPrice = (price, quantity) => {
  return price * quantity;
};

console.log(
  `Total Price For 4 Products of 100$ each is ${calculateTotalPrice(100, 4)}$`
);

// task 5: Coupon Discount Function

// Number(string) vs parseInt(string)
// parseInt :- Empty string ("") or null results in NaN.
// Number :- Empty string ("") or null results in 0.

const applyCoupon = (amount, couponCode) => {
  if (couponCode === "NONE") return amount;
  const discount = Number(couponCode.slice(4));
  return amount - (amount * discount) / 100;
};

console.log(`You Have Saved ${applyCoupon(1000, "SAVE20")}$`);
