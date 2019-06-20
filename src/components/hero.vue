<template lang="pug">
section.hero
    .container
        .row.align-items-center
            .col-lg-6.offset-lg-1
                Advantages
            .col-lg-4
                Form
</template>
<script>
import Advantages from './advantages.vue'
import Form from './form.vue'
export default {
    components: {
        Advantages,
        Form
    }
}
</script>
<style lang="scss">
.hero {
    padding-top: 40px;
    padding-bottom: 40px;
    background: url(../assets/images/hero-bg.jpg) center center / cover no-repeat;
}
</style>