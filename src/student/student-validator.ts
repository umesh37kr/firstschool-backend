import { checkSchema } from "express-validator";

export default checkSchema({
  firstName: {
    trim: true,
    notEmpty: true,
    errorMessage: "FirstName is required!",
  },
  lastName: {
    trim: true,
    notEmpty: true,
    errorMessage: "LastName is required!",
  },
  dateOfBirth: {
    notEmpty: true,
    errorMessage: "please enter date of birth",
  },
  classes: {
    notEmpty: true,
    errorMessage: "please enter class",
  },
  section: {
    notEmpty: true,
    errorMessage: "please select section",
  },
  rollNumber: {
    notEmpty: true,
    errorMessage: "please enter roll number",
  },
  mobile: {
    notEmpty: true,
    errorMessage: "please enter mobile number",
  },
  address: {
    notEmpty: true,
    errorMessage: "address cannot be empty!",
  },
});
