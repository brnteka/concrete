<template lang="pug">
div
    Header
    Hero
    Main
    Prefooter
    Footer
    Modals
</template>
<script>
import Header from './components/header.vue'
import Hero from './components/hero.vue'
import Main from './components/main.vue'
import Prefooter from './components/prefooter.vue'
import Footer from './components/footer.vue'
import Modals from './components/modals.vue'

export default {
    components: {
      Header,
      Hero,
      Main,
      Prefooter,
      Footer,
      Modals
    }
}
</script>
<style lang="scss">
</style>