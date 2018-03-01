/**
 * Created by Seth on 2/20/2018.
 */
// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');

// CONFIG //
// var config = require('config');

// EXPRESS //
var app = module.exports = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../src'));

// CONNECTIONS //
app.listen(3052, function() {
    console.log('Listening on port thirty fifty two...');
});