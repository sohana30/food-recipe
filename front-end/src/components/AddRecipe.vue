<template>
<section class="jumbotron">
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="recipe.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="steps">Steps</label>
        <input
          class="form-control"
          id="steps"
          required
          v-model="recipe.steps"
          name="steps"
        />
      </div>
      
      <div class="form-group">
        <label for="imageURL">Image Url</label>
        <input
          class="form-control"
          id="imageURL"
          required
          v-model="recipe.imageURL"
          name="imageURL"
        />
      </div>
      <button @click="saveRecipe" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newRecipe">Add</button>
    </div>
  </div>
  </section>
</template>

<script>
import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "add",
  data() {
    return {
      recipe: {
        _id: null,
        name: "",
        steps: [],
        imageURL: "",
        ingredients:[],
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveRecipe() {
      var data = {
        name: this.recipe.name,
        steps: this.recipe.steps,
        imageURL: this.recipe.imageURL,
        ingredients:this.recipe.ingredients
      };

      RecipeDataService.create(data)
        .then(response => {
          this.recipe._id = response.data._id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },

    newRecipe() {
      this.submitted = false;
      this.recipe = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 400px;
  
  margin: auto;
}

</style>
