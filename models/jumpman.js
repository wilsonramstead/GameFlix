
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/GameFlix");

var JumpmanSchema = new mongoose.Schema( {
    Name: { type: String, required: true, minLength:2},
    Score: { type: Number, required: true},
}, { timestamps: true })

module.exports = mongoose.model("Score", JumpmanSchema);