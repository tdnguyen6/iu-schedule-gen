<template>
  <div class="course-class-session">
    <Modal :control="control" />
    <button @click="control.toggle = !control.toggle" class="add-course-btn">
      <font-awesome-icon :icon="['fas', 'plus']" /> Add Course
    </button>
    <transition-group name="ccs-list" tag="ul" appear>
      <li
        v-for="(course, courseIndex) in courseList"
        :key="courseIndex + 0"
        :style="`--i: ${courseIndex}`"
        class="course-li"
      >
        <div
          class="title-pane course-title"
          @click="flipCourseExpand(courseIndex)"
        >
          {{ `${course.credit}: ${course.title}` }}
          <span class="edit-del-btn">
            <button>Edit</button>
            <button>Delete</button>
          </span>
        </div>
        <transition name="ccs-list">
          <div v-if="expandInfoList[courseIndex].courseExpand">
            <button
              @click="control.toggle = !control.toggle"
              class="add-class-btn"
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
                <div
                  class="title-pane class-title"
                  @click="flipClassExpand(courseIndex, classIndex)"
                >
                  {{ `Class ${classIndex}` }}
                  <span class="edit-del-btn">
                    <button>Edit</button>
                    <button>Delete</button>
                  </span>
                </div>
                <transition name="ccs-list">
                  <div
                    v-if="
                      expandInfoList[courseIndex].courseExpand &&
                        expandInfoList[courseIndex].classExpand[classIndex]
                    "
                  >
                    <button
                      @click="control.toggle = !control.toggle"
                      class="add-session-btn"
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
                          {{ `Session ${sessionIndex}` }}
                          <span class="edit-del-btn">
                            <button>Edit</button>
                            <button>Delete</button>
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
// import { Session } from "@/services/logics/Session";
// import { SessionType } from "@/services/logics/Session";
// import { WeekDay } from "@/services/logics/WeekDay";
import Modal from "@/views/components/auxiliaries/Modal.vue";

interface ExpandInfo {
  courseExpand: boolean;
  classExpand: boolean[];
}

@Component({
  components: {
    Modal
  }
})
export default class CourseClassSession extends Vue {
  @Prop() private courseList!: Course[];
  private expandInfoList: ExpandInfo[] = [];
  private control = {
    toggle: false
  };

  constructor() {
    super();
    for (let i = 0; i < this.courseList.length; i++) {
      const course: Course = this.courseList[i];
      const expandInfo: ExpandInfo = {
        courseExpand: false,
        classExpand: new Array(course.classList.length).fill(false)
      };
      this.expandInfoList.push(expandInfo);
    }

    console.log(this.courseList[0].classList[0].getAllSessions());
  }

  flipClassExpand(courseIndex: number, classIndex: number) {
    this.expandInfoList[courseIndex].classExpand[classIndex] = !this
      .expandInfoList[courseIndex].classExpand[classIndex];
    this.$forceUpdate();
  }

  flipCourseExpand(courseIndex: number) {
    this.expandInfoList[courseIndex].courseExpand = !this.expandInfoList[
      courseIndex
    ].courseExpand;
  }
}
</script>

<style lang="scss" scoped>
.course-class-session {
  margin: 1rem auto;
  width: 40%;
  min-width: 400px;
  @media (max-width: 400px) {
    width: 100%;
    min-width: unset;
  }

  .add-course-btn {
    padding: 0.5rem 1rem;
    width: 100%;
    background: linear-gradient(
      to top,
      var(--course-title-bg),
      var(--class-title-bg),
      var(--session-title-bg)
    );
  }
  .add-class-btn {
    padding: 0.5rem 1rem;
    width: 100%;
    background: linear-gradient(
      to bottom,
      var(--course-title-bg),
      var(--class-title-bg)
    );
  }
  .add-session-btn {
    padding: 0.5rem 1rem;
    width: 100%;
    background: linear-gradient(
      to bottom,
      var(--class-title-bg),
      var(--session-title-bg)
    );
  }
  .title-pane {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem;
    margin: 1rem 0;
  }

  .course-title {
    background: var(--course-title-bg);
  }

  .class-title {
    background: var(--class-title-bg);
  }

  .session-title {
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
    transition: all 0.5s ease-in-out calc(var(--i) * 0.1s);
    // transition: all 0.5s ease-in-out;
  }

  .ccs-list-enter,
  .ccs-list-leave-to {
    opacity: 0;
  }
}
</style>
