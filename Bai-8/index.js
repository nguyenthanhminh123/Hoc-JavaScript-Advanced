// Array-like object & isArgumentsObject 
// const names = ['Thanh', 'Nguyen', 'Minh'];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// const obj = {
//   0: 'Thanh',
//   1: 'Thanh',
//   2: 'Thanh',
//   length: 3
// };
// for (let i = 0; i < obj.length; i++){
//   console.log(obj[i]);
// }

function sum (){
  let result = 0;
  for (let i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
}

sum(1,2,3,4,10,20);