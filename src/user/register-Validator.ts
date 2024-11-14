import { checkSchema } from "express-validator";

export default checkSchema({
  username: {
    errorMessage: "user name is required!",
    notEmpty: true,
    trim: true,
  },
  password: {
    trim: true,
    errorMessage: "password is required!",
    notEmpty: true,
    isLength: {
      options: {
        min: 8,
      },
      errorMessage: "Password length should be at least 8 chars!",
    },
  },
  role: {
    errorMessage: "Role is required!",
    notEmpty: true,
    trim: true,
  },
});
