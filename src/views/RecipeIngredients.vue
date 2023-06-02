<template>
  <div class="main">
    <HomeButton />

    <h1>Tomato Soup</h1>
    <div class="ingredient_header">
      <h2>35 min</h2>
      <p>A quick and easy recipe for real homemade tomato soup like no other you've had before.</p>
    </div>
    <div class="checkbox">
    <hr/>
    <h4>Ingredients</h4>
      <div>
        <input type="checkbox" id="ingredient1" name="ingredient1" value="tomatoes">
        <label class="singleCheckbox" for= "ingredient1"> 4 cups chopped fresh tomatoes</label>
      </div>
      <div>
        <input type="checkbox" id="ingredient2" name="ingredient2" value="onion">
        <label class="singleCheckbox" for= "ingredient2"> 1 slice onion</label>
      </div>
      <div>
        <input type="checkbox" id="ingredient3" name="ingredient3" value="cloves">
        <label class="singleCheckbox" for= "ingredient3"> 4 whole cloves</label>
      </div>
      <div>
        <input type="checkbox" id="ingredient4" name="ingredient4" value="broth">
        <label class="singleCheckbox" for= "ingredient4"> 2 cups chicken broth</label>
      </div>
      <div>
        <input type="checkbox" id="ingredient5" name="ingredient5" value="butter">
        <label class="singleCheckbox" for= "ingredient5"> 2 tablespoons butter</label>
      </div>
      <div>
        <input type="checkbox" id="ingredient6" name="ingredient6" value="flour">
        <label class="singleCheckbox" for= "ingredient6"> 2 tablespoons all-purpose flour</label>
      </div>
      <div>
        <input type="checkbox" id="ingredient7" name="ingredient7" value="salt">
        <label class="singleCheckbox" for= "ingredient7"> 1 teaspoon salt</label>
      </div>
      <div id="lastCheckbox">
        <input type="checkbox" id="ingredient8" name="ingredient8" value="sugar">
        <label class="singleCheckbox" for= "ingredient8"> 2 teaspoons white sugar or to taste</label>
      </div>
    </div>

     <RecipeNavigation :backName="'Search'" :nextName="'RecipeStep1'" />
  </div>
</template>

<script>
// @ is an alias to /src

import RecipeNavigation from "../components/RecipeNavigation.vue";
import HomeButton from "../components/HomeButton.vue";

export default {
  name: "Recipe",
  components: { RecipeNavigation, HomeButton},
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.ingredient_header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.checkbox {
  display: flex;
  margin-bottom: 0;
  vertical-align: middle;
  align-items: left;
  text-align: left;
  flex-direction: column;
}

.singleCheckbox {
  padding-left: 10px;
}

#lastCheckbox {
  margin-bottom: 100px;
}

h1 {
  padding: 0;
}

h2 {
  padding: 0;
}

p {
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
