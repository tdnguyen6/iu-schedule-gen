<template>
  <footer>
    <router-link to="/about">By TiDu Nguyen at HCMIU</router-link>
    <a href="https://github.com/tidunguyen/iu-schedule-gen" target="_blank">
      Fork me on GitHub
      <font-awesome-icon
        :icon="['fab', 'github']"
        size="2x"
      ></font-awesome-icon>
    </a>
    <div>MIT License June 2020</div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 0.5rem 2rem;
  font-weight: 700;
  display: flex;
  z-index: -10;
  position: relative;
  box-shadow: 0 -10px 5px -5px var(--shadow);
  justify-content: space-between;
  align-items: center;
  // border-top: 1px dotted var(--text-color);
  @media (max-width: 600px) {
    flex-direction: column;
    a,
    div {
      margin: 0.5rem 0;
    }
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.1s ease-out;
    &:hover {
      opacity: 0.7;
    }
    svg {
      margin: 0 0.5rem;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Footer extends Vue {}
</script>
