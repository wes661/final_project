const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateAppointmentInput = data => {
  let errors = {};

  data.where = !isEmpty(data.where) ? data.where : "";
  data.when = !isEmpty(data.time) ? data.time : "";
  data.name = !isEmpty(data.doctor) ? data.doctor : "";

  if (Validator.isEmpty(data.where)) {
    errors.where = "where name is required";
  }

  if (Validator.isEmpty(data.time)) {
    errors.when = "when date field is required";
  }
  if (Validator.isEmpty(data.doctor)) {
    errors.when = "when date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateAppointmentInput;
