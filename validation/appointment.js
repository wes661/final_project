const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateAppointmentInput = data => {
  let errors = {};

  data.where = !isEmpty(data.where) ? data.where : "";
  data.time = !isEmpty(data.time) ? data.time : "";
  data.doctor = !isEmpty(data.doctor) ? data.doctor : "";
  data.date = !isEmpty(data.date) ? data.date : "";

  if (Validator.isEmpty(data.where)) {
    errors.where = "Please enter the location of your appointment";
  }

  if (Validator.isEmpty(data.time)) {
    errors.time = "Please enter the time of your appointment";
  }
  if (Validator.isEmpty(data.doctor)) {
    errors.doctor = "Please enter your physician's name";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateAppointmentInput;
