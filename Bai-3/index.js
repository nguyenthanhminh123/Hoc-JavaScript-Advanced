// global context
var mouse = {
  name: 'Mickey',
  sayHi: function() {
    console.log('Hi, my name is', this.name);
  }
};
var cat = {
  name: 'Tom'
};
//mouse.sayHi();
var say = mouse.sayHi.bind(cat);
//say = function() { console.log..}
say();

// function context
function run (cb){
  console.log('run...');
  cb();
}
var mouse = {
  name: 'Mickey',
  sayHi: function(){
    console.log(this.name);
  }
};
run(mouse.sayHi.bind(mouse));

// bind