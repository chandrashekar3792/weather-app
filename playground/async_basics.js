console.log('Starting app');
setTimeout(()=>{
  console.log('First Timeout');
},2000);

setTimeout(()=>{
  console.log('Second Timeout');
},0);
console.log('Finishing app');


//O/p
//Starting app
//Finishing app
//Second Timeout
//First Timeout

var add = (a,b) =>{
  var total=a+b;
  return total;
}

var result=add(3,8);
console.log(res);
