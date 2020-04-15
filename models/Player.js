const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({    
    nickname: { type: String, required: true},
    points: { type: Number, required: true},
    time: {type:String, required: true}
},{
    timestamps: {
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
});

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;