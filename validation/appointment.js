const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateAppointmentInput = data => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.where = !isEmpty(data.where) ? data.where : "";
  data.when = !isEmpty(data.when) ? data.when : "";

  if (Validator.isEmpty(data.location)) {
    errors.location = "Job name is required";
  }

  if (Validator.isEmpty(data.where)) {
    errors.where = "where name is required";
  }

  if (Validator.isEmpty(data.when)) {
    errors.when = "when date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateAppointmentInput;
