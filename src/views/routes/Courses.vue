<template>
  <div class="courses">
    <Navbar />
    <button @click="persist()" id="unique">Persist</button>
    <h1>This is courses page</h1>
    <CourseClassSession :courseList="iCourses" />
  </div>
</template>

<script lang="ts">
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import { Vue, Component } from "vue-property-decorator";
import CourseClassSession from "@/views/components/functions/CourseClassSession.vue";
import { courses } from "@/services/logics/Demo";
import { Course } from "@/services/logics/Course";
import { DataAccess } from "@/services/logics/DataAccess";

@Component({
  components: {
    Navbar,
    CourseClassSession
  }
})
export default class Courses extends Vue {
  private iCourses: Course[] = courses;
  persist() {
    DataAccess.persist(this.iCourses);
  }
}
</script>
