
// init project
var express = require('express');
var app = express();


// timestamp 
app.get("/api/timestamp/:date", function (req,res) {
  let date = req.params.date;
  if(date) {
    let newDate = new Date(date);
    res.json({unix: newDate.getTime(), utc: newDate.toUTCString()});
  } 
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
