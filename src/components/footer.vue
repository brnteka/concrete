<template lang="pug">
footer.footer
    .container
        ul.footer-info__list
            li.footer-info__item {{global.IP}}
            li.footer-info__item {{global.UNP}}
            li.footer-info__item {{global.address}}
            li.footer-info__item 
                a(v-bind:href="'mailto:' + global.email") {{global.email}}
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            global: state => state.data.global
        })
    }
}
</script>
<style lang="scss">
.footer {
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
}
.footer-info__item {
    &:not(:last-child) {
        margin-bottom: 15px;
    }
}
</style>