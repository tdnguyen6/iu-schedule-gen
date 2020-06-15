/* eslint-disable */
import { Course } from "./Course";

import * as Flatted from "flatted";

import JSZip from "jszip";

import { saveAs } from "file-saver";

export class DataAccess {
  static zip: JSZip = new JSZip();
  static domain = "http://localhost/webapps/iu-schedule-gen";

  static async authenticate(uname: string, passwd: string) {
    throw new Error("Method not implemented.");
  }

  static persist(courseList: Course[]) {
    console.log("Persisting");
    const flattedCourseList: string = Flatted.stringify(courseList);
    console.log(`flattedCourseList has length: ${flattedCourseList.length}`);
    this.zip.file("flattedCourseList.txt", flattedCourseList);
    this.zip
      .generateAsync({
        type: "blob",
        compression: "DEFLATE",
      })
      .then(function(content) {
        // see FileSaver.js
        // saveAs(content, "flattedCourseList");
        console.log(content);

        fetch("http://localhost/webapps/iu-schedule-gen/public/demo", {
          method: "POST",
          body: content,
          /* headers: {
            "Content-Type": "application/zip"
          }, */
        }).then((response) => response.blob())
        .then(blob => {
          console.log(blob);
          // saveAs(blob, "fetched.zip");
        });
      });
  }
}
