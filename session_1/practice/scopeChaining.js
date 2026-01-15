// example 1
// learning:- if variable does not found in local lexical environment(scope) it tries to find out in its parent
//            this process repeat untill we wont't find variable or we don't reach at global lexical
//            environment(scope) if it is not found here the err throw that variable is not defined
//            this is called scope chaining

// lexical environment(scope) of
// a : local execution context of a + global execution context
// b : local execution context of b + local execution context of a + global execution context

function a() {
  var x = 5;
  function b() {
    console.log(z); // undefined because till now our code execution does not reach at init of z just 
    var y = 10;     // the memory is assigned to z and that's why its value is undefined
  }
  b();
}
a();
var z = 15;
