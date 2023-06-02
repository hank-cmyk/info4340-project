<template>
  <div class="main">
    <HomeButton />
    <h1>Tomato Soup</h1>
     
    <div class="content">
      <h2>Step 2</h2>
      <p>
        In the now empty stockpot, melt the butter over medium heat. Stir in the
        flour to make a roux, cooking until the roux is a medium brown.
        Gradually whisk in a bit of the tomato mixture, so that no lumps form,
        then stir in the rest. Season with sugar and salt, and adjust to taste.
      </p>
    </div>

    <Timer :time="15" />
    <RecipeNavigation
      :backName="'RecipeStep1'"
      :nextName="'RecipeEnd'"
    />
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
}
</style>
