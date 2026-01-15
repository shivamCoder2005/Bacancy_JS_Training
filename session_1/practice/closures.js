// Question :- How we can access x even if it was removed from stack after complete execution of
//            function a

// Answer :- becuase of closures
// in simple words A closure is a function together with the lexical scope in which it was created.

// Lexical Scope Chain

// Lexical scope is decided by where functions are written in the code, not by how they are called.

// Lexical scope of a
// → a has access to:
// its own variables (x)
// global scope

// Lexical scope of b
// → b has access to:
// its own scope
// a’s scope (so it can access x)
// global scope

// Lexical scope of c
// → c has access to:
// its own scope
// b’s scope
// a’s scope (so it finds x)
// global scope

function a() {
  var x = 5;
  function b() {
    function c() {
      console.log(x);
    }
    c();
  }
  return b;
}
var func = a();

func();
