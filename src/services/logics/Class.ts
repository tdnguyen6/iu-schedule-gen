import { Course } from "./Course";
import { Schedule } from "./Schedule";

export class Class {
  course: Course;
  schedule: Schedule = new Schedule();

  constructor(course: Course) {
    this.course = course;
    course.addClass(this);
  }

  getAllSessions() {
    return Object.values(this.schedule.sessionByDay).flat(1);
  }
}
