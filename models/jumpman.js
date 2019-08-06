
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/GameFlix");

var JumpmanSchema = new mongoose.Schema( {
    Name: { type: String, minLength:2},
    Score: { type: Number},
}, { timestamps: true })

module.exports = mongoose.model("Score", JumpmanSchema);