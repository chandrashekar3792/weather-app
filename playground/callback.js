var getUser = (id,callback)=>{
  var user={
    id:id,
    name:'Chandru'
  };
  callback(user);
}

getUser(25,(userObject)=>{
  console.log(userObject);
});



var getUserDelay = (id,callback)=>{
  var user={
    id:id,
    name:'Shekar'
  };

  setTimeout( ()=>{
    callback(user);
  },3000);
}

getUserDelay(24,(userObject)=>{
  console.log(userObject);
});
