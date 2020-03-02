<template>
  <div id="app">
    <vue-page-transition name="fade-in-up">
    <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
@import 'assets/style/globals.scss';
</style>
