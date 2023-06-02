<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

#app {
  height:100%;
  width:100%;
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   /* background-image: linear-gradient(#ebd7b5, white); */
 background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);

}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

  /* background-image: linear-gradient(#ebd7b5, white); */
  /* background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%); */

</style>
