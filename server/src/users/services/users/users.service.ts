import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { SerializedUser, User } from "src/users/types";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: "linaNurse@gmail.com",
      password: "Tran",
    },
    {
      username: "danNurse@gmail.com",
      password: "Baggs",
    },
    {
      username: "philSupervisor@gmail.com",
      password: "Lee",
    },
  ];

  getUsers() {
    return this.users.map(user => plainToClass(SerializedUser, new SerializedUser(user)));
  }

  getUserByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }
}
