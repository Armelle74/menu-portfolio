<template>
   <nav class="menu-desktop">
    <router-link :to="`/`" class="menu-desktop--logo">
      <img class="menu-desktop__logo__image logo--small" src="@/assets/images/armelle-lossouarn-logo-small.svg" alt="">
      <img class="menu-desktop__logo__image logo--desktop" src="@/assets/images/armelle-lossouarn-logo.svg" alt="">
    </router-link>
    <ul class="menu-desktop--list">
        <li class="menu-desktop--list__link" 
            v-for="routes in links" 
            v-bind:key="routes.id" >
            <router-link :to="`${routes.page}`" :data-text="routes.text">{{routes.text}}</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'MenuDesktop',
  data () {
    return {
       links: [ 
        { 
         id: 0,
         text: 'Portfolio', 
         page: '/portfolio' 
      },
      { 
         id: 1,
         text: 'Skills', 
         page: '/skills' 
      },
       { 
         id: 2,
         text: 'Experience', 
         page: '/experience' 
      },
       { 
         id: 3,
         text: 'Contact', 
         page: '/contact' 
      }   
    ] 
    }
  }
}
</script>
<style lang='scss' type="text/scss">
@import "../scss/_menuDesktop.scss";
</style>