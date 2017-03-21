const request= require('request');
const yargs= require('yargs');

const argv= yargs
  .options({
    a:{
      demand:true,
      alias:'address',
      describe:'Adress to fetch weather for',
      string:true
    }
})
.help()
.alias('help','h')
.argv;
// console.log(argv);
// console.log(argv.address);

var encodedAddress=encodeURIComponent(argv.address);
console.log(encodedAddress);
request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json:true
},(err,response,body)=>{
  // console.log(JSON.stringify(body, undefined,2));
   console.log(`Address:${body.results[0].formatted_address}`);
   console.log(`Latitude:${body.results[0].geometry.location.lat}`);
   console.log(`Langitude:${body.results[0].geometry.location.lng}`);
  console.log(`Address:${body.results[0].formatted_address}`);
});

//encodeURIComponent('pes JD LW');
//'pes%20JD%20LW'
//decodeURIComponent('pes%20JD%20LW');
//'pes JD LW
