import { format, compareAsc } from "date-fns";
export default function validateUserProfile(formData) {
  const difference = differenceInYears(
    new Date(2015, 1, 11),
    formData.dateOfBirth,
  );
  const profileErrors = {};
  if (formData.dateOfBirth.length <= 10) {
    format(new Date(), "MM/dd/yyyy");
    profileErrors.dateOfBirth = "Төрсөн өдрөө оруулна уу";
  } else if (difference <= 18) {
    profileErrors.dateOfBirth = "Та 18 ба түүнээс дээш настай байх ёстой.";
  }
  if (formData.image === null) {
    profileErrors.image = "Профайл зурагаа оруулна уу";
  }
  const isEmptyObject = (object) => Object.keys(object).length === 0;
  const isValid = isEmptyObject(profileErrors);

  return { isValid, profileErrors };
}
