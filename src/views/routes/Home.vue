<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/views/assets/images/logo.png" /> -->
    <Navbar />
    <courses-form :course="course" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import CoursesForm from "@/views/components/forms/CoursesForm.vue";
import { courses } from "@/services/logics/Demo";

@Component({
  components: {
    Navbar,
    CoursesForm
  }
})
export default class Home extends Vue {
  private course = courses[0];
}
</script>

<style lang="scss" scope></style>
