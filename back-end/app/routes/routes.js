module.exports = app => {
  const recipes = require("../controllers/recipe.js");
  var router = require("express").Router();

  router.post("/", recipes.create);
  router.get("/", recipes.findAll);
  router.get("/recipes/:id", recipes.findOne);  
 
  app.use("/api/recipes", router);
};
