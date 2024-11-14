import { checkSchema } from "express-validator";

export default checkSchema({
  username: {
    errorMessage: "user name is required!",
    notEmpty: true,
    trim: true,
  },
  password: {
    trim: true,
    errorMessage: "password cannot be empty!",
    notEmpty: true,
  },
});
