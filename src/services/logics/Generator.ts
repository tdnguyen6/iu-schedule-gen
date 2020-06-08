import { Course } from "./Course";
import { Schedule } from "./Schedule";
import { Class } from "./Class";

// @ts-ignore
import * as fastCartesian from "fast-cartesian";

export class Generator {
  static generate(courseList: Course[]): Schedule[] {
    const scheduleList: Schedule[] = [];
    const _2DclassList: Class[][] = [];
    courseList.forEach((c) => _2DclassList.push(c.classList));
    const processed2DClassList = fastCartesian(_2DclassList);
    classList_loop: for (let i = 0; i < processed2DClassList.length; i++) {
      const processedClassList = processed2DClassList[i];
      const schedule: Schedule = new Schedule();
      for (let j = 0; j < processedClassList.length; j++) {
        const _class: Class = processedClassList[j];
        const sessionList = _class.getAllSessions();
        for (let k = 0; k < sessionList.length; k++) {
          const session = sessionList[k];
          const addSessionResult = schedule.addSession(session);
          if (addSessionResult == -1) {
            continue classList_loop;
          }
        }
      }
      scheduleList.push(schedule);
    }
    return scheduleList;
  }
}
