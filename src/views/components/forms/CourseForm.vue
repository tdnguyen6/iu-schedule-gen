<template>
  <div class="course-form">
    <label for="course-title">Course Title</label>
    <div>
      <input type="text" id="course-title" v-model="course.title" />
    </div>
    <label for="course-credit">Number of Credits</label>
    <div>
      <input type="text" id="course-credit" v-model="course.credit" />
    </div>
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

<style lang="scss" scoped>
.course-form {
  input {
    background: var(--shadow);
    border: none;
    border-bottom: 1px dashed var(--text-color);
    padding: 0.5rem;
    margin: 1rem 0;
  }
}
</style>
