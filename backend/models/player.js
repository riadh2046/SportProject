//import mongoose module
const mongoose = require('mongoose');
//create player schema
const playerSchema = mongoose.Schema({
    // attr: type

    Name: String,
    Number: Number,
    Age: Number,
    Position: String,
    tId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team" //model Name  
    }
});
// affect model name to shcema
const player = mongoose.model("Player", playerSchema);
//make match importable
module.exports = player;