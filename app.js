const request= require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=pes%20university',
  json:true
},(err,response,body)=>{
  console.log(JSON.stringify(body));
});
