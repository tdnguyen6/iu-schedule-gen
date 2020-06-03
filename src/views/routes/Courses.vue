<template>
  <div class="courses">
    <Navbar />
    <h1>This is courses page</h1>
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
export default class Courses extends Vue {}
</script>
