<template>
<div>
    <button type="button" class="btn" @click='favorite()' v-if='!is_favorite_local'> 
        <img src="../images/outline-star.png">  
    </button>

    <button type="button" class="btn" @click='favorite()' v-if='is_favorite_local'> 
        <img src="../images/filled-star.png">  
    </button>

</div>
    
</template>


<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: 'Navigation',
    data: function () {
        return {
            is_favorite_local: this.is_favorite
        }
    },

    props: {
        is_favorite: Boolean
    },

    methods: {
        favorite(){
            this.is_favorite_local = !this.is_favorite_local
            this.$emit("updateFavorite", this.is_favorite_local)
        }
    }
}
</script>


<style scoped>

div {
    z-index: 2;
    position: relative;
}

img {
    width: 25px;
    height: 23.75px;
}

button:focus {
    outline: none;
    box-shadow: none;
}
</style>