<template lang="pug">
ul.production__list
    li.production__item(v-for="product in production")
        Product( v-bind:product="product")
</template>
<script>
import {mapState} from "vuex"
import Product from './product.vue'
export default {
    components: {
        Product
    },
    computed: {
        ...mapState({
            production: state => state.data.production
        }) 
    }
}
</script>
<style lang="scss">

</style>