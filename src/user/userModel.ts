import mongoose from "mongoose";
import { User } from "./userType";

const userSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<User>("User", userSchema);
