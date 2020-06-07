import { Course } from "./Course";
import { Schedule } from "./Schedule";
import { Session } from "./Session";

export class Class {
  course: Course;
  schedule: Schedule = new Schedule();

  constructor(course: Course) {
    this.course = course;
    course.addClass(this);
  }

  getAllSessions() {
    const clonedSessionByDay: { [key: string]: Session[] } = Object.assign(
      {},
      this.schedule.sessionByDay
    );
    return Object.values(clonedSessionByDay).flat(1);
  }
}
