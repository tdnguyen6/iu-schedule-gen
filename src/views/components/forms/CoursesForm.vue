<template>
  <div class="course-form">
    <label for="course-title">title</label>
    <input type="text" id="course-title" v-model="course.title" />
    <label for="course-credit">credit</label>
    <input type="text" id="course-credit" v-model="course.credit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Course } from "@/services/logics/Course";

@Component({
  components: {}
})
export default class CourseForm extends Vue {
  @Prop() course!: Course;
}
</script>

<style lang="scss" scoped></style>
