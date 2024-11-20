import { User } from "../user/userType";

export interface Student {
  _id: string;
  userId: User;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  classes: string;
  section: string;
  rollNumber: number;
  parentId: string;
  mobile: number;
  address: string;
  image: string;
}
