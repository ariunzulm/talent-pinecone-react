export default function validateUserInfo(formData) {
  const infoErrors = {};

  if (formData.firstName === "") {
    infoErrors.firstName = "Нэрээ оруулна уу.";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
    infoErrors.firstName =
      "First name cannot contain special characters or numbers.";
  }
  if (formData.lastName === "") {
    infoErrors.lastName = "Овогоо оруулна уу.";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
    infoErrors.lastName =
      "Last name cannot contain special characters or numbers.";
  }
  if (formData.username === "") {
    infoErrors.username = "Хэрэглэгчийн нэрээ оруулна уу.";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.username)) {
    infoErrors.username =
      "This username is already taken. Please choose another one.";
  }

  const isValid = isEmptyObject(infoErrors);

  return {
    isValid,
    infoErrors,
  };
}

const isEmptyObject = (object) => Object.keys(object).length === 0;
