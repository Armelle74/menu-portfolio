<template>
    <div class="header">
      <MenuDesktop></MenuDesktop>
      <MenuSideBar></MenuSideBar>
      <MenuBurger></MenuBurger>
    </div>
</template>

<script>
/* eslint-disable eol-last */
import MenuDesktop from '@/components/layout/menus/menuDesktop.vue'
import MenuSideBar from '@/components/layout/menus/menuSideBar.vue'
import MenuBurger from '@/components/layout/menus/menuBurger.vue'
export default {
  name: 'AppHeader',
  components: {
    MenuDesktop,
    MenuBurger,
    MenuSideBar
  }
  
}
</script>
<style lang='scss' type="text/scss">
@import "/scss/_appHeader.scss";
</style>
