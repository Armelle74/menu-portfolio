<template>
    <div id="burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
        <slot>
            <a class="burger__button" title="Menu">
                <span class="burger__button__bar bar--1"></span>
                <span class="burger__button__bar bar--2"></span>
                <span class="burger__button__bar bar--3"></span>
            </a>
        </slot>
    </div>
</template>

<script>
import { store, mutations } from '@/store.js'

export default {
  name: 'menuBurger',
  computed: {
    isBurgerActive() {
      return store.isNavOpen
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav()
    }
  }
}
</script>
<style lang="scss" type="text/scss">
    @import "../scss/_menuBurger.scss";
</style>
