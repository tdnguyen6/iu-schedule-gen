export abstract class User {
  abstract login(): string;
  abstract logout(): void;
  getInfo(): {
    id: string;
    name: string;
    image: string;
  } {
    return {
      id: this.getID(),
      name: this.getName(),
      image: this.getImage()
    }
  };
  abstract getName(): string;
  abstract getImage(): string;
  abstract getID(): string;
}

export class UserController {
  user: User | null = null;
}

