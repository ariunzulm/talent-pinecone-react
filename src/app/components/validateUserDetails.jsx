export default function validateUserDetails(formData) {
  const detailsErrors = {};

  if (formData.email === "") {
    detailsErrors.email = "Мэйл хаягаа оруулна уу";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
  ) {
    detailsErrors.email = "Зөв мэйл хаяг оруулна уу";
  }
  if (!/^[0-9]{7,8}$/.test(formData.phoneNumber)) {
    detailsErrors.phoneNumber = "Утасны дугаараа оруулна уу.";
  } else if (formData.phoneNumber.length < 8) {
    detailsErrors.phoneNumber = "8 оронтой дугаар оруулна уу.";
  }
  if (formData.password === "") {
    detailsErrors.password = "Нууц үгээ оруулна уу";
  } else if (formData.password.length < 6) {
    detailsErrors.password = "6 оронтой тоо оруулна уу.";
  }
  if (formData.confirmPassword === "") {
    detailsErrors.confirmPassword = "Нууц үгээ давтаж оруулна уу";
  } else if (formData.password !== formData.confirmPassword) {
    detailsErrors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }
  const isEmptyObject = (object) => Object.keys(object).length === 0;
  const isValid = isEmptyObject(detailsErrors);
  return { isValid, detailsErrors };
}
