<template>
  <div>
      <h1> Favorites </h1>
      <div style="padding-bottom:90px;">
        <RecipeCard 
        v-for="recipe in favorite_recipe"
        :key="recipe.id"
        :recipe="recipe"
        v-on:updateFavorite="updateFavoriteRecipe(recipe, $event)"
        >
        </RecipeCard>
      </div>

      <Navigation 
      :route_name="this.$route.name"
      />
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'
import Navigation from '@/components/Navigation.vue'
import RecipeData from '../data/recipes.json'

export default {
  name: 'Favorites',
  components: {
    RecipeCard,
    Navigation
  },
  data: function() {
    return {
      recipedata: RecipeData,
      favorite_recipe: {}
    }
  },
  // executed when the page is created
  mounted: function() {
      let result = {}
      let recipe = {}

      for (let key in this.recipedata) {
        recipe = this.recipedata[key]
        if (recipe.is_favorite) {
          result[key] = recipe
        }
      }
      this.favorite_recipe = result
  },
  methods: {
    updateFavoriteRecipe(recipe, $event){
      recipe.is_favorite = $event
    }
  }
}


</script>



<style>

</style>

