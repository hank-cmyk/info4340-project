import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// import Navigation from '@/components/Navigation.vue'
// import Star from '@/components/Star.vue'

import Search from "../views/Search.vue";
import Favorites from "../views/Favorites.vue";
import RecipeIngredients from "../views/RecipeIngredients.vue";
import RecipeStep1 from "../views/RecipeStep1.vue";
import RecipeStep2 from "../views/RecipeStep2.vue";
import RecipeEnd from "../views/RecipeEnd.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    // path: '/search',
    // name: 'Search',
    // component: Navigation

    path: "/search",
    name: "Search",
    component: Search,
  },

  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },

  {
    path: "/recipes/tomato_soup",
    name: "RecipeIngredients",
    component: RecipeIngredients,
  },

  {
    path: "/recipes/tomato_soup/step1",
    name: "RecipeStep1",
    component: RecipeStep1,
  },

  {
    path: "/recipes/tomato_soup/step2",
    name: "RecipeStep2",
    component: RecipeStep2,
  },

  {
    path: "/recipes/tomato_soup/end",
    name: "RecipeEnd",
    component: RecipeEnd,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
