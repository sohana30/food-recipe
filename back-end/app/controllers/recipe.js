const db = require("../models");
const Recipe = db.recipes;

exports.create = (req, res) => {
  
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  const recipe = new Recipe({
    name: req.body.name,
   
    imageURL: req.body.imageURL,
    steps: req.body.steps,
    published: req.body.published ? req.body.published : false
  });

 
  recipe
    .save(recipe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Recipe."
      });
    });
};


exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Recipe.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recipe."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params._id;
  Recipe.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found recipe with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Recipe with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params._id;

  Recipe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Recipe with id=${id}. Maybe recipe was not found!`
        });
      } else res.send({ message: "Recipe was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Recipe with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params._id;

  Recipe.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Recipe with id= ${id}. Maybe Recipe was not found!`
        });
      } else {
        res.send({
          message: "Recipe was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Recipe with id= " + id
      });
    });
};



exports.findAllPublished = (req, res) => {
  recipe.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Recipes."
      });
    });
};
