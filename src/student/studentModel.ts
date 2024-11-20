import mongoose from "mongoose";
import { Student } from "./studentType";

const studentSchema = new mongoose.Schema<Student>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    rollNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    parentId: mongoose.Types.ObjectId,
    mobile: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<Student>("Student", studentSchema);
