const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const {a, ...c} = obj;
console.log(a,c);