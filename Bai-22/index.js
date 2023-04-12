function waiAndRun(ms, func){
  setTimeout(func, ms);
}
function run(){
  console.log('Run');
}
waiAndRun(2000,run);