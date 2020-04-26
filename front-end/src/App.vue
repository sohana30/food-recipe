<template>
  <div id="app">
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a href="#" class="navbar-brand"> <h2>Foodie</h2></a>
      <div class="navbar-nav ">
        <li class="nav-item">
          <a href="/recipes" class="nav-link">Recipes</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
        <li class="nav-item">
          <a href="/about" class="nav-link">About</a>
        </li>
        
      </div>
    </nav>

    <div class="container mt-2">
      <router-view class="container mt-2" />
    </div>
  </div>
  
</template>

<script>
export default {
  name: "app"
};
</script>
<style>
@import url(//db.onlinewebfonts.com/c/ffea4728b1a325151a1c589e20a992f0?family=Papyrus);
h2 {
  font-family: "papyrus";
}
body,html{
background:rgb(201, 98, 98);
}
</style>
