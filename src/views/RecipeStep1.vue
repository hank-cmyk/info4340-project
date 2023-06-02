<template>
  <div class="main">
     <HomeButton />
    <h1>Tomato Soup</h1>
    <div class="content">
      <h2>Step 1</h2>
      <p>
        In a stockpot, over medium heat, combine the tomatoes, onion, cloves and
        chicken broth. Bring to a boil, and gently boil for about 20 minutes to
        blend all of the flavors. Remove from heat and run the mixture through a
        food mill into a large bowl, or pan. Discard any stuff left over in the
        food mill.
      </p>
    </div>

    <Timer :time="20" />
    <RecipeNavigation :backName="'RecipeIngredients'" :nextName="'RecipeStep2'" />
  </div>
</template>

<script>
// @ is an alias to /src

import RecipeNavigation from "../components/RecipeNavigation.vue";
import Timer from "../components/Timer.vue";
import HomeButton from "../components/HomeButton.vue";

export default {
  name: "RecipeStep1",
  components: { RecipeNavigation, Timer, HomeButton },
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

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

h1 {
  padding: 0;
}

h2 {
  padding: 0;
  margin-bottom: 0px;
}

p {
  text-align: center;
  padding: 2rem;
  text-align: left;
  margin-bottom: 0px;
}
</style>
