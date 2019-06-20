<template lang="pug">
section.prefooter
    .container
        .row
            .col-lg-4.offset-lg-4
                Form
</template>
<script>
import Form from './form.vue'

export default {
    components: {
        Form
    }
}
</script>
<style lang="scss">
.prefooter {
    padding-top: 40px;
    padding-bottom: 40px;
    background: url(../assets/images/prefooter-bg.jpg) center center / cover no-repeat;
}

</style>