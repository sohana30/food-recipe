import Vue from "vue";
import Router from "vue-router";
import recipes from "../src/components/RecipeList.vue";

import add from "../src/components/AddRecipe.vue";
import about from "../src/components/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/recipes",
      name:recipes,
      component:recipes
      
    },
    
    {
      path: "/add",
      name: "add",
      component: add
    },
    {
      path: "/about",
      name: "about",
      component: about
    }
  ]
});
