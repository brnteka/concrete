<template lang="pug">
div
    modal(name="form-modal" @before-close="beforeCloseForm" @before-open="beforeOpenForm" :maxWidth="350" :adaptive="true")
        .modal__inner
            button(@click="$modal.hide('form-modal')").modal__close Close
            Form(v-bind:product="product")
    modal(name="form-submission" @before-open="beforeOpenSubmission" height="auto" v-bind:maxWidth="250" v-bind:adaptive="true")
        .modal__inner
            button(@click="$modal.hide('form-submission')").modal__close Close
            .modal__content
                p {{messageSubmission}}
</template>
<script>
import { mapMutations } from 'vuex'
import Form from './form.vue'
export default {
    components: {
        Form
    },
    data() {
        return {
            product: null,
            messageSubmission: null
        }
    },
    methods: {
        ...mapMutations([
            'formModalVisibility'
        ]),
        beforeOpenForm(event) {
            if (event.params) {
                this.product = event.params.product
            } else {
                this.product = null
            }
        },
        beforeCloseForm() {
            this.formModalVisibility()
        },
        beforeOpenSubmission(event) {
            this.messageSubmission = event.params.message
        }
    }
}
</script>
<style lang="scss">
.modal__inner {
    position: relative;
}
.modal__content {
    padding: 30px;
}
.modal__close {
    position: absolute;
    width: 30px;
    height: 30px;
    top: -15px;
    right: 15px;
    border-radius: 15px;
    background-color: #e53935;
    font-size: 0;
    box-shadow: 0 1px 3px #9B0703, 0 1px 2px #9B0703;
    cursor: pointer;

    @include media-breakpoint-up(md) {
        right: -15px;
    }

    &:before,
    &:after {
        content: '';
        width: 18px;
        height: 2px;
        background-color: #fff;
        display: block;
        position: absolute;
        top: 14px;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
    &:active {
        box-shadow: none;
    }
}
</style>