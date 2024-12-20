import { checkSchema } from "express-validator";

export default checkSchema({
  name: {
    notEmpty: true,
    errorMessage: "Name is required",
    isLength: {
      options: { min: 3 },
      errorMessage: "Name should be at least 3 chars",
    },
  },
  mobile: {
    notEmpty: true,
    errorMessage: "Mobile number is required",
    isLength: {
      options: { min: 10, max: 10 },
      errorMessage: "Mobile number must be 10 digits",
    },
  },
  message: {
    notEmpty: true,
    errorMessage: "Message is required",
    isLength: {
      options: { min: 10 },
      errorMessage: "Message should be at least 10 chars",
    },
  },
});
