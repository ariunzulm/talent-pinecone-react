import {
  isEmpty,
  isEmptyObject,
  isValidEmail,
  isValidNumber,
} from "./validate";

export default function validateUserDetails(formData) {
  const { email, phoneNumber, password, confirmPassword } = formData;
  const detailsErrors = {};

  if (isEmpty(email)) {
    detailsErrors.email = "Enter your email.";
  }
  if (isValidEmail(email)) {
    detailsErrors.email = "Your email must be valid.";
  }
  if (isValidNumber(phoneNumber)) {
    detailsErrors.phoneNumber = "Enter your phone number.";
  }
  if (phoneNumber.length < 8) {
    detailsErrors.phoneNumber = "Enter 8 digits phone number.";
  }
  if (isEmpty(password)) {
    detailsErrors.password = "Enter your password";
  }
  if (password.length < 6) {
    detailsErrors.password = "Your password must consist of 6 digits.";
  }
  if (isEmpty(confirmPassword)) {
    detailsErrors.confirmPassword = "Confirm you password.";
  }
  if (password !== confirmPassword) {
    detailsErrors.confirmPassword = "Your password doesn't match.";
  }
  const isValid = isEmptyObject(detailsErrors);
  return { isValid, detailsErrors };
}
