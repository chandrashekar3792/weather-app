const request= require('request');
const yargs= require('yargs');

const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');
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
geocode.geocodeAddress(argv.address,(err,res)=>{
  if(err){
    console.log(err);
  }else{
    console.log(JSON.stringify(res,undefined,2));
    weather.getWether(res.latitude,res.langitude,(errMessage,weatherResult)=>{
      if(errMessage){
        console.log(errMessage);
      }else{
        console.log(JSON.stringify(weatherResult,undefined,2));
      }
    });
  }
});



//encodeURIComponent('pes JD LW');
//'pes%20JD%20LW'
//decodeURIComponent('pes%20JD%20LW');
//'pes JD LW
