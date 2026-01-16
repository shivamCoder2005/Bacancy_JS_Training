// shadowing:- Shadowing means one variable hides another variable with the same name in an inner scope

// var a = 10; 
// {
//   var a = 20;
//   console.log(a); // 20
// }
// console.log(a); // 10

// let a = 10;
// {
//     let a = 20;
//     console.log(a); // 20
// }
// console.log(a); // 10


// allowed because var is global and let is local both have their different scopes
// var a = 10;
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);

// not allwed because both refer to the same scope 

// let a = 10;
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);

// allowed now both refer to different scopes 
// let a = 10;
// function demo(){
//     var a = 20;
//     console.log(a);
// }
// demo();
// console.log(a);