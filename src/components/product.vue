<template lang="pug">
.product
    .product__name {{product.name}}
    .product__card
        .row
            .col-lg-8
                .product__table-container
                    Table(v-bind:types="product.types")
            .col-lg-4
                .product__image-container
                    img.product__image(v-bind:src="require(`../assets/images/production/${product.image}`)", alt="")
                .product__cta-container
                    Button(v-bind:text="'Сделать заказ'" @click="openModalForm(product.name)" )
</template>
<script>
import {mapMutations} from "vuex"
import Table from './table.vue'
import Button from './button.vue'
export default {
    props: ['product'],
    components: {
        Table,
        Button
    },
    methods: {
        ...mapMutations([
            'formModalVisibility'
        ]),
        openModalForm(product) {
            this.$modal.show('form-modal', {
                product: product
            })
            this.formModalVisibility()
        }
    }
}
</script>
<style lang="scss">
.product__name {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    padding-top: 30px;
    margin-bottom: 15px;
}
.product__card {
    padding: 20px 15px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.product__table-container {
    @include media-breakpoint-down(md) {
        margin-bottom: 30px;
    }
}
.product__image-container {
    text-align: center;;
    margin-bottom: -30px;
}
.product__cta-container {
    text-align: center;
}
</style>