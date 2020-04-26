<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search Recipe"
          v-model="name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <h4>Recipes</h4>

      <div class="list-group">
        <section
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(recipe, index) in recipes"
          :key="index"
          @click="setActiveRecipe(recipe, index)"
        >
            {{ recipe.name }} 
        </section>
      </div>
    </div>
     
    <div class="jumbotron">
      <div class="col-md-8" transition="bounce"> 
        <h3>Recipe</h3>
        <div v-if="currentRecipe">
         
          <div>
            <label>
              <strong>{{ currentRecipe.name }}</strong></label>
          </div>
          
          <div>
            <img v-bind:src="`${currentRecipe.imageURL}`" />
          </div>
          
          
          <div>
            <label><strong>Steps:</strong></label>
            <li v-for="index in 15" v-bind:key="index">
              {{ currentRecipe.steps[index] }}
            </li>
          </div>
          <div>
            <label><strong>Status:</strong></label>
            {{ currentRecipe.published ? "Published" : "Pending" }}
          </div>
        </div>        
        <div v-else>
          <br />
          <p>Please click on a Recipe...</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "recipesList",
  data() {
    return {
      recipes: [],
      currentRecipe: null,
      currentIndex: -1,
      name: "",

      
    };
  },
  methods: {
    retrieveRecipes() {
      RecipeDataService.getAll()
        .then(response => {
          this.recipes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveRecipes();
      this.currentRecipe = null;
      this.currentIndex = -1;
    },

    setActiveRecipe(recipe, index) {
      this.currentRecipe = recipe;
      this.currentIndex = index;
    },

    searchName() {
      RecipeDataService.findByName(this.name)
        .then(response => {
          this.recipes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveRecipes();
  }
};
</script>

<style lang="css" scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin-left: none;
  list-style: none;
}
@media screen and (min-width: 320px) {
  

  img{
    max-width:350px;
    max-height:250px;
  }
}

@media screen and (min-width: 1010px) {
  
.jumbotron{
  margin-top: -770px;
    margin-left: 500px;
    margin-bottom: 130px;
  }
  img{
    max-width:350px;
    max-height:250px;
  }
}



.hidden {
  display: none;
}
.bounce-transition {
  display: inline-block; 
  }
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
button{
  color:white;
  background:rgb(172, 170, 170);
}
@import url(//db.onlinewebfonts.com/c/ffea4728b1a325151a1c589e20a992f0?family=Papyrus);
h3,h4 {
  font-family: "papyrus","Bold";
}
</style>
