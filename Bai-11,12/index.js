// Call 
function greeting(){
  console.log(`Hi! ${this.name}. I am ${this.age}.`);
}
const cat = {
  name: 'top',
  age: '100'
};

greeting.call(cat);