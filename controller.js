
const Scores = require('./models/jumpman');

module.exports = {
    index: (req,res) => {
        Scores.find({}).sort({ "Score": -1 }).limit(8)
        .then(data => {
            res.json({ message: "Success", data:data});
        })
        .catch(err => {
            res.json({ message: "Error", error:err});
        })
    },
    new: (req,res) => {
        Scores.create(req.body)
        .then(data => {
            res.json({ message: "Success", data:data});
        })
        .catch(err => {
            res.json({ message: "Error", error:err});
        })
    },
    test: (req,res) => {
        Scores.create({ Score: req.params.Score})
        .then(data => {
            console.log("Data: ", data);
            res.json({ message: "Success", data:data});
        })
        .catch(err => {
            console.log("Error: ", err);
            res.json({ message: "Error", error:err});
        })
    },
    findOne: (req,res) => {
        Scores.findOne({_id: req.params.id})
        .then(data => {
            console.log("Data: ", data);
            res.json({message: "success", data:data});
        })
        .catch(err => {
            console.log("Error: ", err);
            res.json({message: "error", error:err});
        })
    },
    updateName: (req,res)=> {
        // , {runValidators:true}
        Scores.findOneAndUpdate({ _id: req.params.id }, { Name: req.body.Name})
        .then(data =>{
            console.log("Data: ", data);
            res.json({message: "Success", data:data});
        })
        .catch(err => {
            console.log("Error: ", err);
            console.log("here");
            res.json({message: "Error: ", error:err});
        })
    },
    delete: (req,res) => {
        Scores.findOneAndDelete({ _id: req.params.id })
        .then(data => {
            res.json({ message: "Success", data:data});
        })
        .catch(err => {
            res.json({ message: "Error", error:err});
        })
    }
}