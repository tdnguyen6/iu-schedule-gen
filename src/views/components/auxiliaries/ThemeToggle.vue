<template>
  <button id="theme-toggle-btn" @click="toggleTheme" :title="title">
    <font-awesome-icon :icon="['fas', 'sun']" v-if="theme == 'dark'" />
    <font-awesome-icon :icon="['fas', 'moon']" v-else />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ThemeToggle extends Vue {
  private theme = localStorage.getItem("theme");
  private title = this.theme == "dark" ? "Dark Theme" : "Light Theme";

  constructor() {
    super();
    this.setUpTheme();
  }

  setUpTheme() {
    try {
      // Checks for the color scheme of the device.
      // In this case it checks for anything that is not light theme.
      const media = window.matchMedia(
          "not all and (prefers-color-scheme: light)"
        ),
        body = document.body;
      if (localStorage.getItem("theme") == "dark") {
        body.setAttribute("data-theme", "dark");
      } else if (localStorage.getItem("theme") == "light") {
        body.setAttribute("data-theme", "light");
      } else if (media.matches) {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
      media.addListener(function() {
        if (media.matches) {
          body.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        } else {
          body.setAttribute("data-theme", "light");
          localStorage.setItem("theme", "light");
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  toggleTheme() {
    if (this.theme == "dark") {
      this.theme = "light";
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      this.theme = "dark";
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }
}
</script>

<style lang="scss" scoped>
#theme-toggle-btn {
  background: Transparent;
  outline: none;
  border: none;
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}
</style>
