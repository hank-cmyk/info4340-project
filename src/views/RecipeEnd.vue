<template>
  <div class="main">
    <HomeButton />

    <h1>Tomato Soup</h1>
    <div class="congrats_header">
        <p>CONGRATS!</p>
    </div>
    <div class="congrats_message">
        <p>You made it!</p>
    </div>
    <div class="finish_recipe">
        <b-button class = 'finish_recipe' :to="{ name: 'Home'}">FINISH</b-button>
    </div> 

    <RecipeNavigation :backName="'RecipeStep2'" :nextName="'Home'" />
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

.congrats_header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 80px;
}

.congrats_message {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 40px;
}

.finish_recipe {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  /* padding: 20px 40px; */
  font-size: 70px;
  background-color: rgb(4, 151, 4);
  border-radius: 5px;

}

h1 {
  padding: 0;
}

h2 {
  padding: 0;
}

p {
  text-align: center;
}
</style>
