var somepromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
       resolve('Message sent successfully!');
      // reject('Unable to fullfill Promise');
    },2500);
});

somepromise.then((message)=>{
  console.log('Success:',message);
},(errMessage)=>{
  console.log('Err:',errMessage);
});

var asyncAdd= (a,b)=>{
  return  new Promise((resolve, reject)=> {
    setTimeout(()=>{
        if(typeof a==='number' && typeof b==='number'){
          resolve(a+b);
        }else{
          reject('Arguments must be numbers');
        }
    },1500);
  });
};

asyncAdd(20,12).then((successMsg)=>{
  console.log('Result:',successMsg);
},(errorMsg)=>{
  console.log(errorMsg)
});
