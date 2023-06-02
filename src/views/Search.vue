<template>
  <div>
    <!-- search bar -->
    <b-container style="padding: 0 10%; margin: 0;">
      <b-row>
        <b-col cols="8">
          <b-form-input class='top-margin' v-model="keyword" type="text" style="width: 100%;">
          </b-form-input>
        </b-col>
        <b-col cols="4">
          <b-button class='top-margin' variant="light" v-on:click="search(keyword)" style="width: 100%;">
            SEARCH
          </b-button>
        </b-col>
      </b-row>
    </b-container>

    <!-- show all recipes by default -->
    <div v-show="!is_searched" style="padding-bottom:90px;">
      <h2>All Recipes</h2>
      <RecipeCard 
      v-for="recipe in all_recipes"
      :key="recipe.id"
      :recipe="recipe"
      v-on:updateFavorite="updateFavoriteRecipe(recipe, $event)"
      >
      </RecipeCard>
    </div>

    <!-- display search result -->
    <div v-show="is_searched" style="padding-bottom:90px;">
      <h2>"{{search_keyword}}"</h2>
      <RecipeCard 
      v-for="recipe in search_result"
      :key="recipe.id"
      :recipe="recipe"
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
  
  name: 'Search',
  components: {
    RecipeCard,
    Navigation
  },
  data: function() {
    return {
      keyword: '',
      all_recipes: RecipeData,
      search_result: {},
      is_searched: false,
      search_keyword: ''
    }
  },
  methods: {
    search(keyword) {
      let result = {}
      let recipe = {}

      // term is the regex form of the keyword
      let regex = ""
      for (let i = 0; i < keyword.length; i++) {
        regex = regex + "(" + keyword[i].toLowerCase() + ")([\\s]*)"
      }
      let term = new RegExp(regex)

      // loop through all recipes
      for (let key in this.all_recipes) {
        recipe = this.all_recipes[key]
        // search through name and time
        if (recipe.name.toLowerCase().match(term) || recipe.total_time.toLowerCase().match(term)) {
          result[key] = recipe
        }
        // search through ingredients
        for (let i in recipe.ingredients) {
          if (recipe.ingredients[i].toLowerCase().match(term)) {
            result[key] = recipe
          }
        }
      }
      this.search_result = result
      this.is_searched = true
      this.search_keyword = keyword
    },
    updateFavoriteRecipe(recipe, $event){
      recipe.is_favorite = $event
    } 
  }
}

</script>

<style>
h2 {
  text-align: left;
  padding-left: 10%;
  padding-top: 10px;
}

.top-margin{
  margin-top: 20px;
}



</style>