<template>
  <div class="style">
    <b-row class="text-center no-gutters">
      <b-col>
        <b-button class="flex-col w-100" :to="{ name: backName }">
          <!-- <img src="../images/left-arrow.png" />--><h2>&#8249;</h2> back</b-button> 
      </b-col>

      <b-col>
        <b-button class="flex-col w-100" :to="{ name: nextName }">
          <!--<img src="../images/right-arrow.png" />--><h2>&#8250; </h2>  next</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "RecipeNavigation",
  props: {
    // names of the back and next views
    backName: String,
    nextName: String,
  },
};
</script>

<style scoped>
.style {
  position: fixed;
  bottom: 0;
  width: 100%;
}

h2{
  font-size: 40px;
  padding: 0px;
  margin: 0px;
}


.flex-col {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px;
  font-variant: small-caps;
  border: none;
  padding: 0px;
  margin: 0px;
  padding-bottom: 5px;
  font-size: 18px;
  background-color: #9e8e72;
}

.flex-col:hover {
    background-color:#776c58;
  }

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

</style>
