<template lang="pug">
header.header
    .container
        .header__inner
            .header__logo
                a.header__logo-link
                    img.header__logo-image(v-bind:src="require(`../assets/images/${global.brand.logo}`)")
                    .header__logo-text {{global.brand.name}}
            .header__address
                img(v-bind:src="require(`../assets/images/${header.address.icon}`)").header__address-icon
                span.header__address-text {{global.address}}
            .header__phone
                a(v-bind:href="`tel:${phoneHref}`").header__phone-link 
                    img(v-bind:src="require(`../assets/images/${header.phone.icon}`)").header__phone-icon
                    span.header__phone-text {{global.phone}}
            .header__cta
                Button(v-bind:text="header.cta.text" @click="openModalForm")
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Button from "./button.vue"

export default {
    components: {
        Button
    },
    computed: {
        ...mapState({
            header: state => state.data.header,
            global: state => state.data.global,
            
        }),
        phoneHref() {
            return this.global.phone.replace(/\s/g, "")
        }
    },
    methods: {
        ...mapMutations([
            'formModalVisibility'
        ]),
        openModalForm() {
            this.$modal.show('form-modal')
            this.formModalVisibility()
        }
    }
}
</script>
<style lang="scss">
.header {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
}
.header__inner {
    @include media-breakpoint-down(md) {
        text-align: center;
    }
    @include media-breakpoint-up(lg) {
        display: flex;
        align-items: center;
    }
}
.header__logo {
    @include media-breakpoint-down(md) {
        margin-bottom: 10px;
    }
}
.header__logo-link {
    display: inline-flex;
    align-items: center;
}
.header__logo-image {

}
.header__logo-text {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
}
.header__address {
    &-icon {
        display: inline-block;
        margin-right: 10px;
        vertical-align: bottom;
    }
    &-text {
        font-size: 18px;
    }
    @include media-breakpoint-down(md) {
        margin-bottom: 10px;
    }
    @include media-breakpoint-up(lg) {
        margin-left: auto;
    }
}
.header__phone {
    &-icon {
        display: inline-block;
        margin-right: 10px;
        vertical-align: bottom;
    }
    &-text {
        font-size: 18px;
    }
    @include media-breakpoint-down(md) {
        margin-bottom: 10px;
    }
    @include media-breakpoint-up(lg) {
        margin-left: 30px;
    }
}
.header__cta {
    @include media-breakpoint-up(lg) {
        margin-left: 30px;
    }
}
</style>