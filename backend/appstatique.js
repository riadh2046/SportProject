// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

//Créates express application (app)
const app = express();

//App configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );

  next();
});

//Models Importation
const Match = require("./models/match");



//DB simulation
let matchesTab = [
  { id: 1, scoreOne: 2, scoreTow: 2, teamOne: "RMD", teamTow: "FCB" },
  { id: 2, scoreOne: 0, scoreTow: 0, teamOne: "JUV", teamTow: "ROM" },
  { id: 3, scoreOne: 0, scoreTow: 0, teamOne: "MUN", teamTow: "LIV" },
  { id: 3, scoreOne: 0, scoreTow: 0, teamOne: "MUN", teamTow: "LIV" },
  { id: 3, scoreOne: 0, scoreTow: 0, teamOne: "MUN", teamTow: "LIV" },
  { id: 3, scoreOne: 0, scoreTow: 0, teamOne: "MUN", teamTow: "LIV" },
];
let teamsTab = [
  { id: 1, name: "RMD", owner: "Florentino Pérez Rodríguez", foundation: "1902" },
  { id: 2, name: "FCB", owner: "Joan Laporta", foundation: "1899"},
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919"},
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919"},
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919"},
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919"},
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919"},
];
let playersTab = [
    { id: 1, name: "Ronaldo", number:7 , position:'ATK',age:38 },
    { id: 1, name: "Messi", number:10 , position:'ATK',age:36 },
    
  ];

//business logic : Add Match

//business logic : Edit Match
app.put("/matches", (req, res) => {
  console.log("Here into BL: Edit Match",req.body);
  let newMatch = req.body;
  let pos = matchesTab.findIndex((elt)=>elt.id==newMatch.id)
  matchesTab[pos]=newMatch;
  res.json({msg:"ok"})
});
//business logic : Edit Player
app.put("/players", (req, res) => {
  console.log("Here into BL: Edit Player",req.body);
  let newPlayer = req.body;
  let pos = matchesTab.findIndex((elt)=>elt.id==newPlayer.id)
  matchesTab[pos]=newPlayer ;
  res.json({msg:"ok"})
});

//business logic : Get All MAtches
app.get("/matches", (req, res) => {
  console.log("Here into BL:Get All Matches");
  res.json({ T: matchesTab });
});

//business logic: Get Match By Id
app.get("/matches/:id", (req, res) => {
  console.log("Here into BL:Get Match By Id" ,req.params.id );
  //get ID from param
  let matchId = req.params.id;
  //.find()
  let match = matchesTab.find((elt) => elt.id == matchId);
  console.log("Here founded match", match);
  //send Res res.json({})
  res.json({match:match})
  
});
//business logic: Get Player By Id
app.get("/players/:id", (req, res) => {
  console.log("Here into BL:Get Player By Id" ,req.params.id );
  //get ID from param
  let playerId = req.params.id;
  //.find()
  let player = playersTab.find((elt) => elt.id == playerId);
  console.log("Here founded match", player);
  //send Res res.json({})
  res.json({player:player})
  
});

//business logic: Delete Match By Id
app.delete("/matches/:id", (req, res) => {
  console.log("Here into BL:Delete Match By Id ",req.params.id);
  let matchId = req.params.id
  let pos = matchesTab.findIndex((elt)=>elt.id == matchId);
  console.log("here position",pos);
  matchesTab.splice(pos,1);
  res.json({isDeleted:true})
  
});
//business logic: Delete Team By Id
app.delete("/teams/:id", (req, res) => {
    console.log("Here into BL:Delete team By Id ",req.params.id);
    let teamId = req.params.id
    let pos = teamsTab.findIndex((elt)=>elt.id == teamId);
    console.log("here position",pos);
    teamsTab.splice(pos,1);
    res.json({isDeleted:true})
    
  });
  //business logic: Delete Player By Id
app.delete("/players/:id", (req, res) => {
    console.log("Here into BL:Delete player By Id ",req.params.id);
    let playerId = req.params.id
    let pos = playersTab.findIndex((elt)=>elt.id == playerId);
    console.log("here position",pos);
    playersTab.splice(pos,1);
    res.json({isDeleted:true})
    
  });
  

//business logic : Get All Teams
app.get("/teams", (req, res) => {
  console.log("Here into BL:Get All Teams");
  res.json({ teams: teamsTab });
});

//business logic : Get All Player
app.get("/matches/", (req, res) => {
    
    res.json({ P: playersTab });
  });
  //business logic : Search Match
app.post("/players/search ", (req, res) => {
  console.log("Here into BL:Get All Players");
  res.json({ P: playersTab });
});

//make app importable from another files
module.exports = app;
