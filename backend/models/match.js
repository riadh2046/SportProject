//importe mongoose module
// const  express= require('@angular/compiler');
const mongoose = require('mongoose');

//Create match Schema
const matchSchema = mongoose.Schema({
    //attribut : type
    scoreOne : Number,
    scoreTow : Number,
    teamOne : String,
    teamTow : String,
});

//affect model name to schema
const Match = mongoose.model("Match", matchSchema);
 //make model importable
 module.exports = Match;