const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: { e: 10 }
};

let obj2 = {};
for (let key in obj1){
  obj2[key] = obj1[key];
}
obj2.d.e = 11;
console.log(obj1,obj2)