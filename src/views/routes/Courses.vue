<template>
  <div class="courses">
    <div class="content-wrapper">
      <Navbar />
      <h3 class="page-header">
        <em>Your {{ courseList.length }} courses</em>
      </h3>
      <CourseClassSession :courseList="courseList" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import Footer from "@/views/components/auxiliaries/Footer.vue";
import { Vue, Component } from "vue-property-decorator";
import CourseClassSession from "@/views/components/functions/CourseClassSession.vue";
import { DataAccess } from "@/services/logics/DataAccess";
import { Course } from "@/services/logics/Course";

@Component({
  components: {
    Navbar,
    CourseClassSession,
    Footer
  }
})
export default class Courses extends Vue {
  private courseList: Course[] = DataAccess.courseList;
}
</script>
