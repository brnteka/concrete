<template lang="pug">
.advantages
    ul.advantages__list
        li.advantages__item(v-for="(advantage, index) in advantages")
            .advantages__icon-container
                img(v-bind:src="require(`../assets/images/${advantage.icon}`)" , alt="").advantages__icon
            .advantages__text {{advantage.name}}
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
         ...mapState({
            advantages: state => state.data.hero.advantages,
        })
    }
}
</script>
<style lang="scss">
.advantages {

}
.advantages__list {

}
.advantages__item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.advantages__icon-container {
    flex: 0 0 45px;
    margin-right: 20px;
}
.advantages__icon {
    width: 100%;
    height: auto;
}
.advantages__text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    color: #fff;
}
</style>