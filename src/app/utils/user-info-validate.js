import { isContainSpecialChars, isEmpty, isEmptyObject } from "./validate";

export default function validateUserInfo(formData) {
  const { firstName, lastName, username } = formData;

  const infoErrors = {};

  if (isEmpty(firstName)) {
    infoErrors.firstName = "Enter your first name.";
  }

  if (isContainSpecialChars(firstName)) {
    infoErrors.firstName =
      "First name cannot contain special characters or numbers.";
  }

  if (isEmpty(lastName)) {
    infoErrors.lastName = "Enter your last name.";
  }

  if (isContainSpecialChars(lastName)) {
    infoErrors.lastName =
      "Last name cannot contain special characters or numbers.";
  }

  if (isEmpty(username)) {
    infoErrors.username = "Enter your username.";
  }

  if (isContainSpecialChars(username)) {
    infoErrors.username =
      "This username is already taken. Please choose another one.";
  }

  const isValid = isEmptyObject(infoErrors);

  return {
    isValid,
    infoErrors,
  };
}
