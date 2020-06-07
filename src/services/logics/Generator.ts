import { Course } from "./Course";
import { Schedule } from "./Schedule";

export class Generator {
  static generate(courseList: Course[]): Schedule[] {
    const scheduleList: Schedule[] = [];
    for (let i = 0; i < 10; i++) {
      scheduleList.push(new Schedule());
    }
    for (let i = 0; i < 10; i++) {
      // eslint-disable-next-line
      courseList.forEach((c) => {
        // eslint-disable-next-line
        c.classList.forEach((_class) => {
          // eslint-disable-next-line
          _class.getAllSessions().forEach((s) => {
            scheduleList[i].addSession(s);
          });
        });
      });
    }
    return scheduleList;
  }
}
