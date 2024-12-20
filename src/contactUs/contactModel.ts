import mongoose from "mongoose";
import { Contact } from "./contactTypes";

const contactSchema = new mongoose.Schema<Contact>({
  name: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

export default mongoose.model<Contact>("Contact", contactSchema);
