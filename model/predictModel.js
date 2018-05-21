var mongoose = require('mongoose')
mongoose.connect('mongodb://Hsiao:b10433018@ds111050.mlab.com:11050/bcp');
var express = require('express');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database Connected.");
});

var predictSchema = new mongoose.Schema({
    x: Number,
    Date: String,
    Cycle:Number 
}, {collection: 'cycle'});



var p = mongoose.model('predict', predictSchema);//建立一個叫做predict的model,二個參數就是建立schema的地方

console.log("in suggest model");
module.exports = p;

