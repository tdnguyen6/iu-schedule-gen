import { User } from "./UserController";

export class FacebookUser extends User {
  login(): string {
    throw new Error("Method not implemented.");
  }
  logout(): void {
    throw new Error("Method not implemented.");
  }
  getName(): string {
    throw new Error("Method not implemented.");
  }
  getImage(): string {
    throw new Error("Method not implemented.");
  }
  getID(): string {
    throw new Error("Method not implemented.");
  }

}