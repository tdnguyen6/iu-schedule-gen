<template>
  <div class="course-form">
    <label for="course-title">Course Title</label>
    <input type="text" id="course-title" v-model.trim="content.title" />
    <label for="course-credit">Number of Credits</label>
    <select id="course-credit" v-model.number="content.credit">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Course } from "@/services/logics/Course";

@Component({
  components: {}
})
export default class CourseForm extends Vue {
  @Prop() content!: Course;
}
</script>

<style lang="scss" scoped>
.course-form {
  input,
  select,
  option {
    display: block;
    background: var(--shadow);
    border: none;
    border-bottom: 1px dashed var(--text-color);
    padding: 0.5rem;
    margin: 1rem 0;
  }
}
</style>
