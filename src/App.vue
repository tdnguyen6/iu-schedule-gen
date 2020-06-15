<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  constructor() {
    super();
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      this.$router.push(redirect);
    }
  }
}
</script>

<style lang="scss">
body {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  padding: 0;
  background: var(--bg);
  * {
    color: var(--text-color);
  }
}
</style>
