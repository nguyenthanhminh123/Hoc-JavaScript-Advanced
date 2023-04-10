// var let consti)
// 1. declaretion (khai bao bien)
var a = 1;
let b = 2;
const c = 3;
console.log(a, b, a);

var a = 2;
console.log(a);

// 2. hoisting
function run () {
  console.log(a);
  let a = 1;
}
run();

// 3. block scope (if, for,)
for ( var i = 0; i < 5; i++) {
  console.log(i);
}

for ( let i = 0; i < 10; i+=2) {
  console.log(i);
} 

// 4. redeclaration (khai bao lai)
