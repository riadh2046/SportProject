// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");
// import bcrypt module
const bcrypt = require("bcrypt");

// import jsonwebtoken module
const jwt = require("jsonwebtoken");
// import express-session module
const session = require("express-session");
//import multer module
const multer = require("multer");
//import path module
const path = require("path");

//Créates express application (app)
const app = express();

//App configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const secretKey = "your-secret-key";
app.use(
  session({
    secret: secretKey,
  })
);

app.use("/shortcut", express.static(path.join("backend/images")));
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    if (isValid) {
      cb(null, "backend/images");
    }
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

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
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");

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
  {
    id: 1,
    Name: "RMD",
    Owner: "Florentino Pérez Rodríguez",
    Foundation: "1902",
  },
  { id: 2, name: "FCB", owner: "Joan Laporta", foundation: "1899" },
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919" },
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919" },
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919" },
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919" },
  { id: 3, name: "EST", owner: "Meddeb", foundation: "1919" },
];
let playersTab = [
  { id: 1, name: "Ronaldo", number: 7, position: "ATK", age: 38 },
  { id: 1, name: "Messi", number: 10, position: "ATK", age: 36 },
];

// Bussiness Logic Match Service*********

//business logic : Add Match
app.post("/matches", (req, res) => {
  console.log("Here into BL:Add  Matches", req.body);
  //Create match instance (type : Match)
  let match = new Match(req.body);
  //Insert/save match into matches (collection name)
  match.save();
  res.json({ isAdded: true });
});
//business logic : Edit Match
app.put("/matches", (req, res) => {
  console.log("Here into BL: Edit Match", req.body);
  let newMatch = req.body;
  let pos = matchesTab.findIndex((elt) => elt.id == newMatch.id);
  matchesTab[pos] = newMatch;
  res.json({ msg: "ok" });
});

//business logic : Get All MAtches
app.get("/matches", (req, res) => {
  console.log("Here into BL:Get All Matches");
  res.json({ T: matchesTab });
});

//business logic: Get Match By Id
app.get("/matches/:id", (req, res) => {
  console.log("Here into BL:Get Match By Id", req.params.id);
  //get ID from param
  let matchId = req.params.id;
  //.find()
  let match = matchesTab.find((elt) => elt.id == matchId);
  console.log("Here founded match", match);
  //send Res res.json({})
  res.json({ match: match });
});
//business logic: Delete Match By Id
app.delete("/matches/:id", (req, res) => {
  console.log("Here into BL:Delete Match By Id ", req.params.id);
  let matchId = req.params.id;
  let pos = matchesTab.findIndex((elt) => elt.id == matchId);
  console.log("here position", pos);
  matchesTab.splice(pos, 1);
  res.json({ isDeleted: true });
});

//business logic : Search Match
app.post("/players/search ", (req, res) => {
  console.log("Here into BL:Get All Players");
  res.json({ P: playersTab });
});

// Bussiness Logic player Service*********

// BUSINESS LOGIC Player Service*****

// business Logic:Get All Players
app.get("/players/:id", (req, res) => {
  console.log("here into bl:get player by id", req.params.id);
  Player.findById(req.params.id).then((doc) => {
    res.json({ players: doc });
  });
});

// business Logic:Get Player by id
app.get("/players/:id", (req, res) => {
  console.log("here into bl:get player by id", req.params.id);
  Player.findById(req.params.id).then((doc) => {
    res.json({ T: doc });
  });
});

// business logic: delete player
app.delete("/players/:id", async (req, res) => {
  try {
    console.log("here into bl:delete player by id", req.params.id);
    await Player.deleteOne({ _id: req.params.id }).then((result) => {
      console.log("here after", result);
      if (result.deletedCount == 1) {
        res.json({ msg: " delete ok" });
      } else {
        res.json({ msg: " delete notok" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});
// business Logic:edit Player
app.put("/players", (req, res) => {
  Player.updateOne({ _id: req.body._id }, req.body).then((result) => {
    console.log("update", result);
    if (nModified == 1) {
      res.json({ msg: " ubdate ok" });
    } else {
      res.json({ msg: " ubdate not ok" });
    }
  });
});
// business Logic:add Player
app.post("/players", (req, res) => {
  console.log("here into add player", req.body);
  Team.findById(req.body.teamId).then((team) => {
    console.log("here Team", Team);
    if (!Team) {
      res.json({ msg: "Team Not Found" });
    } else {
      //Add player
      const playerObj = new Player({
        Name: req.body.Name,
        Age: req.body.Age,
        Position: req.body.Position,
        Number: req.body.Number,
        tId: Team._id, //object ID // value from teams collection
      });
      playerObj.save(
        //err : error
        //savedPlayer : sacess (obj + _id)
        (err, savedPlayer) => {
          if (err) {
            res.json({ msg: "player not saved" });
          } else {
            //add saved player id into players attribut(team)
            team.players.push(savedPlayer._id);
            //apdate players atrribute into teams collection
            team.save();
            //send json response to FE
            res.json({ msg: "Player Added" });
          }
        }
      );
    }
  });
});

// Bussiness Logic TeamService*********

//business logic : Get All Teams
app.get("/teams", (req, res) => {
  console.log("Here into BL:Get All Teams");
  Team.find()
    .populate("players")
    .then((docs) => {
      res.json({ teams: docs });
    });
});

// business Logic:Get Teamby id
app.get("/teams/:id", (req, res) => {
  console.log("here into bl:get Teamby id", req.params.id);
  Team.findById(req.params.id).then((doc) => {
    res.json({ teams: doc });
  });
});

// business logic: delete Team by id
app.delete("/teams/:id", async (req, res) => {
  try {
    console.log("here into bl:delete Teamby id", req.params.id);
    this.team.deleteOne({ _id: req.params.id }).then((result) => {
      console.log("here after", result);
      if (result.deletedCount == 1) {
        res.json({ msg: " delete ok" });
      } else {
        res.json({ msg: " delete not ok" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// business Logic:add Team
app.post("/teams", (req, res) => {
  console.log("here into add team", req.body);
  let teamObj = new Team(req.body);
  teamObj.save();
  res.json({ isAdded: true });
});
// business Logic:edit Team
app.put("/teams", (req, res) => {
  this.team.updateOne({ _id: req.body._id }, req.body).then((result) => {
    console.log("update", result);
    if (nModified == 1) {
      res.json({ msg: " update ok" });
    } else {
      res.json({ msg: " update not ok" });
    }
  });
});

// Bussiness Logic User Service*********

// business Logic:add User/signup

app.post("/users/signup", multer({ storage: storageConfig }).single("img"), (req, res) => {
  console.log("here user object", req.body);
  User.findOne({ email: req.body.email }).then((doc) => {
    console.log("here user doc", doc);
    if (doc) {
      res.json({ msg: "User exist" });
    } else {
      bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log(("here crypted pwd", cryptedPwd));
        req.body.pwd = cryptedPwd;
        // if (req.file) {
        //   req.body.avatar = `http://localhost:3000/shortcut/${req.file.filename}`;

        // } else {
        //   req.body.avatar = `http://localhost:3000/shortcut/avatar.png`;
          
        // }
        (req.file)?
        req.body.avatar = `http://localhost:3000/shortcut/${req.file.filename}`:
        req.body.avatar = `http://localhost:3000/shortcut/avatar.png`;



        let userObj = new User(req.body); 
        userObj.save();
        res.json({ isSaved: true });
      });
    }
  });
});

// Bussiness Logic login Service*********

//business logic: login
app.post("/users/login", (req, res) => {
  console.log("here into LB : login", req.body);

  User.findOne({ email: req.body.email }).then((doc) => {
    console.log("here doc by email", doc);
    if (!doc) {
      res.json({ msg: "email does not exist" });
    } else {
      //compare Pwds
      bcrypt.compare(req.body.pwd, doc.pwd).then((result) => {
        console.log("here result from bcrypt", result);
        if (result) {
          let userToSend = {
            id: doc._id,
            fName: doc.firstName,
            lName: doc.lastName,
            role: doc.role,
            img: doc.avatar
          };
          let token = jwt.sign(userToSend, secretKey, { expiresIn: "1h" });
          console.log("here token", token);
          res.json({ msg: "welcom", user: token });
        } else {
          res.json({ msg: "check PWD" });
        }
      });
    }
  });
});

//make app importable from another files
module.exports = app;
