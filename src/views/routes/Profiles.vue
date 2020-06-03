<template>
  <div class="about">
    <Navbar />
    <h1>This is Profiles page</h1>
  </div>
</template>

<script lang="ts">
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Navbar
  }
})
export default class Profiles extends Vue {}
</script>
