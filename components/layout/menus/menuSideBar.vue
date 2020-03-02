<template>
  <div class="sidebar">
    <transition name="zoom">
      <div class="sidebar--overlay" v-if="isPanelOpen"></div>
    </transition>
    <transition name="show">
      <div v-if="isPanelOpen" class="sidebar--panel">
        <slot>
          <nav class="sidebar--panel__menu">
            <ul class="sidebar--panel__menu__list">
              <li
                class="sidebar--panel__menu__list__link"
                v-for="routes in links"
                v-bind:key="routes.id">
                <router-link :to="`${routes.page}`" :data-text="routes.text">{{routes.text}}</router-link>
              </li>
            </ul>
          </nav>
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";
export default {
  name: "menuSideBar",
  data: () => ({
    links: [
      {
        id: 0,
        text: "Portfolio",
        page: "/portfolio"
      },
      {
        id: 1,
        text: "Skills",
        page: "/skills"
      },
      {
        id: 2,
        text: "Experience",
        page: "/experience"
      },
      {
        id: 3,
        text: "Contact",
        page: "/contact"
      }
    ]
  }),
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    }
  }
};
</script>
<style lang='scss' type="text/scss">
@import "../scss/_menuSideBar.scss";
</style>