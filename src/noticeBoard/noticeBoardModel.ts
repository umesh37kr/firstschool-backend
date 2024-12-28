import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    notice: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("NoticeBoard", noticeSchema);
