// callback hell :- when we have multiple async opeartion depend on each other then we need to pass them
//                  as a callback and this ends up growing our code horizontally pyramid fashion and
//                  unmaintainable

const items = ["shirt", "pants", "shoes"];

// async operation depends on each other
function orderItem() {}
function billing() {}
function payment() {}
function generatePaymentSlip() {}

// callback hell
orderItem(function () {
  billing(function () {
    payment(function () {
      generatePaymentSlip();
    });
  });
});

// solved using promise chaining
// need to return for pipelining the data
orderItem()
  .then(function (data) {
    return billing();
  })
  .then(function (data) {
    return payment();
  })
  .then(function (data) {
    return generatePaymentSlip();
  })
  .catch((err) => {
    console.log(err);
  });

// more simpler using arrow function don't need return

orderItem()
  .then((data) => billing())
  .then((data) => payment())
  .then((data) => generatePaymentSlip())
  .catch((err) => console.log(err));

// using async await

// async function orderItem() {
//   await billing();
//   await payment();
//   await generatePaymentSlip();
// }

// orderItem();
