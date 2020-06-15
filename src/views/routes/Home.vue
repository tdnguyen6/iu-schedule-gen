<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/views/assets/images/logo.png" /> -->
    <Navbar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/views/components/auxiliaries/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scope></style>
