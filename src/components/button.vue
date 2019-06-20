<template lang="pug">
button.button(@click="action" v-bind:class="[block ? 'button--block' : '']") {{text}}
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        block: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        action(event) {
            this.$emit('click', event)
        }
    }
}
</script>
<style lang="scss">
.button {
    display: inline-block;
    padding: 10px 30px;
    color: #fff;
    background-color: #e53935;
    border-radius: 4px;
    cursor: pointer;
    //box-shadow: 0 1px 1px #9B0703;
    //transition: box-shadow .1s;
    box-shadow: 0 1px 3px #9B0703, 0 1px 2px #9B0703;
    &:hover,
    &:active {
        background-color: #C21915;
        //box-shadow: 0 1px 1px transparent;
    }
    &--block {
        display: block;
        width: 100%;
    }
    &:active {
        box-shadow: none;
    }
}
</style>