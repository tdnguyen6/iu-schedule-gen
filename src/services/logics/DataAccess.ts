/* eslint-disable */
import { Course } from "./Course";

import * as Flatted from "flatted";

import JSZip from "jszip";

export class DataAccess {
  static courseList: Course[] = [];
  static currentProfileID: number = -1;
  // static domain = "http://localhost/webapps/iu-schedule-gen";
  static domain = "https://tidu.000webhostapp.com";

  static async getProfileIDs(platform_id: string, platform_name: string) {
    const toBeSent = {
      platform_id: platform_id,
      platform_name: platform_name,
    };
    const resp = await fetch(`${this.domain}/get-profile-ids`, {
      method: "POST",
      body: JSON.stringify(toBeSent),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const resp_json = await resp.json();
    return (<string[]> resp_json).map(e => +e);
  }

  static async newProfile(platform_id: string, platform_name: string) {
    const toBeSent = {
      platform_id: platform_id,
      platform_name: platform_name,
    };
    const resp = await fetch(`${this.domain}/new-profile`, {
      method: "POST",
      body: JSON.stringify(toBeSent),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const resp_json = await resp.json();
    return resp_json;
  }

  static async load(profileID: number) {
    const zip = new JSZip();
    try {
      const resp = await fetch(`${this.domain}/load?id=${profileID}`);
      const data = await resp.blob();
      if (data.size > 0) {
        const zipFolder = await zip.loadAsync(data);
        const flattedCourseList = await zipFolder.file("flattedCourseList.txt").async('text');
        this.revive(Flatted.parse(flattedCourseList));
      }
      this.currentProfileID = profileID;
    } catch (e) {
      console.log(e);
    }
  }

  static async save() {
    const zip = new JSZip();
    const flattedCourseList: string = Flatted.stringify(this.courseList);
    zip.file("flattedCourseList.txt", flattedCourseList);
    try {
      const zipData = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
      });
      const resp = await fetch(`${this.domain}/save?id=${this.currentProfileID}`, {
        method: "POST",
        body: zipData,
      });
      // const resp_json = await resp.json();
      // console.log(resp_json);
    } catch (e) {
      console.log(e);
    }
  }

  static async delete(profileID: number) {
    try {
      const resp = await fetch(`${this.domain}/delete?id=${profileID}`);
      // const resp_json = await resp.json();
      // console.log(resp_json);
    } catch (e) {
      console.log(e);
    }
  }

  static revive(rawCourseList: {}[]) {
    this.courseList = [];
    rawCourseList.forEach(rawCourse => {
      const c: Course = Course.revive(rawCourse);
      this.courseList.push(c);
    })
  }
}
