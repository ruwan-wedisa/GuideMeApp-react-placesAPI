const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
var Client = require('node-rest-client').Client;
var client = new Client();

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/getLocations', (req, res) => {

    const typedKey = req.body.city;
    
    client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+typedKey+"+top+sights&key=AIzaSyCVv5_ogiA2el00Qc0MU_BkU9OF0J9hCuU", function (data, response) {
    // parsed response body as js object
    //console.log(data);
    res.json({msg:true , data:data});

    // raw response
    //console.log(response);
});


    
});



app.listen(3001, () => {
    console.log(`Server started on port 3001`);
});