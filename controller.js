
const Scores = require('./models/jumpman');

module.exports = {
    index: (req,res) => {
        Scores.find({}).sort({ "Score": -1 })
        .then(data => {
            res.json({ message: "Success", data:data});
        })
        .catch(err => {
            res.json({ message: "Error", error:err});
        })
    }
}