<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/views/assets/images/logo.png" /> -->
    <Navbar />
    <course-form :content="course" />
    <session-form :content="session" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import CourseForm from "@/views/components/forms/CourseForm.vue";
import SessionForm from "@/views/components/forms/SessionForm.vue";
import { courses } from "@/services/logics/Demo";

@Component({
  components: {
    Navbar,
    CourseForm,
    SessionForm
  }
})
export default class Home extends Vue {
  private course = courses[0];
  private session = this.course.classList[0].getAllSessions()[0];
}
</script>

<style lang="scss" scope></style>
