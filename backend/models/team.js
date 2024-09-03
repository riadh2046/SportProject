//import mongoose module
const mongoose = require('mongoose');
//create team shema
const teamSchema = mongoose.Schema({
    // attr: type
    Name: String,
    Owner: String,
    Foundation: Number,
    players : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'player'

        }
    ]
});
// affect model name to shema
const Team = mongoose.model("Team", teamSchema);
//make match importable
module.exports = Team;