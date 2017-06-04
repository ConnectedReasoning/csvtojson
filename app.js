var fs = require('fs');
var csv = require('fast-csv');

var stream = fs.createReadStream("my.csv");
 
csv
 .fromStream(stream, {headers : true})
 .on("data", function(data){
     console.log(data);
 })
 .on("end", function(){
     console.log("done");
 });
