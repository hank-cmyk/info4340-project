<template>

    <div id="home">
      <h1> Hello! </h1>

      <div class = 'content'> 
      <h3> Suggested for you </h3>

        <div class="card border-dark mt-2">
          <img class="card-img-top" src="../images/mac-cheese.jpg" alt="Mac and cheese">
          <div class="card-body">
            <h5> 30 min </h5> 

            <b-row class = 'second-line'>
            <b-col> <h6 class="card-text">Mac and Cheese</h6> </b-col>
            <b-col class = 'star'> <Star />
            </b-col>
            </b-row>
            
          </div>
        </div>
      </div>

      <Navigation 
      :route_name="this.$route.name"
      />

    </div>


</template>

<script>
// @ is an alias to /src

import Navigation from '@/components/Navigation.vue'
import Star from '@/components/Star.vue'

export default {
  
  name: 'Home',
  components: {
    Navigation,
    Star
  }
}
</script>

<style>
  h5{
    background-color: black;
    color: white;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 4px;
    border-radius: 0px 0px 0px 6px;

  }

  hr{
    border-top: 5px solid black;
  }

  .card{
    margin: auto;
    width: 300px;
    position: relative;

  }

  h1 {
    text-align: left;
    padding-left: 20px;
    font-family: "Brush Script MT", cursive;
  }

  div h1{
    font-size: 60px;

  }

  div h3{
    font-size: 30px;
  }

  .content h3{
    margin-top: 30px;
    text-align: center;
  }

  .second-line{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

</style>
