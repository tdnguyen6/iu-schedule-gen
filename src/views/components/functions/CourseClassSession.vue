<template>
  <div class="course-class-session">
    <Modal :control="control" />
    <button @click="addCourse()" class="add-btn add-course-btn">
      <font-awesome-icon :icon="['fas', 'plus']" /> Add Course
    </button>
    <transition-group name="ccs-list" tag="ul" appear>
      <li
        v-for="(course, courseIndex) in courseList"
        :key="courseIndex + 0"
        :style="`--i: ${courseIndex}`"
        class="course-li"
      >
        <div class="title-pane course-title">
          <span @click="flipCourseExpand(courseIndex)" class="info-pane">
            {{ `Course ${courseIndex}: ${course.title}` }}
          </span>
          <span class="edit-del-btn">
            <button @click="onViewCourse(course)">Details</button>
            <button @click="onDeleteCourse(courseIndex)">Delete</button>
          </span>
        </div>
        <transition name="ccs-list">
          <div v-if="course.expand">
            <button
              @click="addClass(courseIndex)"
              class="add-btn add-class-btn"
            >
              <font-awesome-icon :icon="['fas', 'plus']" /> Add Class
            </button>
            <transition-group name="ccs-list" tag="ul" appear>
              <li
                v-for="(_class, classIndex) in course.classList"
                :key="classIndex + 0"
                :style="`--i: ${classIndex}`"
                class="class-li"
              >
                <div class="title-pane class-title">
                  <span
                    class="info-pane"
                    @click="flipClassExpand(courseIndex, classIndex)"
                  >
                    {{
                      `Class ${classIndex}: ${Object.keys(
                        _class.schedule.sessionByDay
                      )}`
                    }}
                  </span>
                  <span class="edit-del-btn">
                    <button @click="onDeleteClass(courseIndex, classIndex)">
                      Delete
                    </button>
                  </span>
                </div>
                <transition name="ccs-list">
                  <div v-if="course.expand && _class.expand">
                    <button
                      @click="addSession(courseIndex, classIndex)"
                      class="add-btn add-session-btn"
                    >
                      <font-awesome-icon :icon="['fas', 'plus']" /> Add Session
                    </button>
                    <transition-group name="ccs-list" tag="ul" appear>
                      <li
                        v-for="(session,
                        sessionIndex) in _class.getAllSessions()"
                        :key="sessionIndex + 0"
                        :style="`--i: ${sessionIndex}`"
                        class="session-li"
                      >
                        <div class="title-pane session-title">
                          <span class="info-pane">
                            {{ `Session ${sessionIndex}: ${session.weekDay}` }}
                          </span>
                          <span class="edit-del-btn">
                            <button @click="onViewSession(session)">
                              Details
                            </button>
                            <button
                              @click="
                                onDeleteSession(
                                  courseIndex,
                                  classIndex,
                                  sessionIndex
                                )
                              "
                            >
                              Delete
                            </button>
                          </span>
                        </div>
                      </li>
                    </transition-group>
                  </div>
                </transition>
              </li>
            </transition-group>
          </div>
        </transition>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Course } from "@/services/logics/Course";
import { Session } from "@/services/logics/Session";
import { Class } from "@/services/logics/Class";
import Modal from "@/views/components/auxiliaries/Modal.vue";
import { ModalControl } from "@/views/components/auxiliaries/Modal.vue";

@Component({
  components: {
    Modal
  }
})
export default class CourseClassSession extends Vue {
  @Prop() private courseList!: Course[];
  private control: ModalControl = {
    title: "",
    toggle: false,
    type: "",
    content: null
  };

  flipClassExpand(courseIndex: number, classIndex: number) {
    this.courseList[courseIndex].classList[classIndex].expand = !this
      .courseList[courseIndex].classList[classIndex].expand;
    this.$forceUpdate();
  }

  flipCourseExpand(courseIndex: number) {
    this.courseList[courseIndex].expand = !this.courseList[courseIndex].expand;
  }

  onViewCourse(course: Course) {
    this.control.title = "Course Details";
    this.control.content = course;
    this.control.type = "course-form";
    this.toggleModal();
  }

  onViewSession(session: Session) {
    this.control.title = "Session Details";
    this.control.content = session;
    this.control.type = "session-form";
    this.toggleModal();
  }

  onDeleteCourse(courseIndex: number) {
    this.courseList.splice(courseIndex, 1);
  }

  onDeleteClass(courseIndex: number, classIndex: number) {
    const course: Course = this.courseList[courseIndex];
    const _class: Class = course.classList[classIndex];
    course.removeClass(_class);
  }

  onDeleteSession(
    courseIndex: number,
    classIndex: number,
    sessionIndex: number
  ) {
    const course: Course = this.courseList[courseIndex];
    const _class: Class = course.classList[classIndex];
    const session: Session = _class.getAllSessions()[sessionIndex];
    _class.schedule.removeSession(session);
    this.$forceUpdate();
  }

  toggleModal() {
    this.control.toggle = !this.control.toggle;
  }

  addCourse() {
    const course: Course = new Course();
    this.courseList.push(course);
    this.onViewCourse(course);
  }

  addClass(courseIndex: number) {
    new Class(this.courseList[courseIndex]);
  }

  addSession(courseIndex: number, classIndex: number) {
    const session: Session = new Session(
      this.courseList[courseIndex].classList[classIndex]
    );
    this.onViewSession(session);
    this.$forceUpdate();
  }
}
</script>

<style lang="scss" scoped>
.course-class-session {
  * {
    font-weight: 700;
  }
  margin: 1rem auto;
  width: 40%;
  min-width: 400px;
  z-index: 100;
  @media (max-width: 400px) {
    margin: 1rem;
    width: auto;
    min-width: unset;
  }

  .add-btn {
    // width: 80%;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: left;
    // border: 1px dotted var(--text-color);
    // background: var(--shadow);
  }
  .title-pane {
    display: flex;
    // flex-wrap: wrap;
    cursor: pointer;
    margin: 1rem auto;
    justify-content: space-evenly;
    border: 1px dotted var(--text-color);
    align-items: stretch;
    background: var(--shadow);
    .info-pane {
      display: flex;
      align-items: center;
      flex-grow: 1;
      padding: 1rem;
    }

    .edit-del-btn {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      align-items: stretch;
      button {
        padding: 1rem;
      }
    }
  }

  .course-title {
    // width: 100%;
    background: var(--course-title-bg);
  }

  .class-title {
    // width: 90%;
    background: var(--class-title-bg);
  }

  .session-title {
    // width: 80%;
    background: var(--session-title-bg);
    cursor: default;
  }

  ul {
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      margin: 0;
      list-style: none;
      // width: 100%;
      // height: 100%;
    }
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .ccs-list-enter-active,
  .ccs-list-leave-active {
    transition: all 0.2s ease-in-out calc(var(--i) * 0.05s);
    // transition: all 0.5s ease-in-out;
  }

  .ccs-list-enter,
  .ccs-list-leave-to {
    opacity: 0;
  }
}
</style>
