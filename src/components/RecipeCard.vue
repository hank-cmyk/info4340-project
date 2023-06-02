<template>
<div>
    <b-card no-body style="width: 80%; margin: 10px auto;">
        <b-row no-gutters>
            <b-col cols="3">
                <img :src="require('../'+recipe.image_src)" :alt="recipe.name" style="width: 100px; height: 100px; align-self: left;"/>
            </b-col>
            <b-col cols="6" style="text-align: left;">
                <a :href="'/recipes/' + recipe.index" class="stretched-link"></a>
                <b-card-body>
                    <b-card-title class="fs-5">
                        {{recipe.name}}
                    </b-card-title>
                    <b-card-text>
                        {{recipe.total_time}}
                    </b-card-text>
                </b-card-body>
            </b-col>
            <b-col cols="3" align-self="center">
                <Star :is_favorite="recipe.is_favorite" v-on="$listeners"/>
            </b-col>
        </b-row>
    </b-card>
</div>
    
</template>


<script>
import Star from '@/components/Star.vue'

export default {
    name: 'Navigation',
    components: {
        Star
    },
    data: function () {
        return {
        }
    },

    props: {
        recipe: Object
    },

    methods: {

    }
}

</script>


<style scoped>

</style>