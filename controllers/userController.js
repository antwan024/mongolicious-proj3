const db = require("../models");

// Defining methods for the userController
module.exports = {
    findAll: function(req, res) {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    findById: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addPoints: function(req, res) {
        db.User
            .aggregate(
                { $match: {
                    _id: "foo"
                }},
            
                { $project: {
                    _id: 1,
                    totalEventPoints: { $add: ["$eventPoints"] }
                }}
            )
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    valUser: function(req, res) {
            db.User.findOne({
              where: {
                email: req.params.email,
                password: req.params.password
              }
            }).then(data => {
              // if found user
              if (data) {
                console.log(`---FOUND USER: `, data);
                res.render("Dashboard", { user: data });
                res.redirect("Dashboard");
                console.log("data sent sync");
              }
              // if no user
              else {
                db.User
                    .create(req.body)
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            };
          });

    }
        
        

    

};




