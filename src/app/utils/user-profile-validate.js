import { format, differenceInYears } from "date-fns";
import { isEmpty, isEmptyObject } from "./validate";
format(new Date(), "MM/dd/yyyy");
export default function validateUserProfile(formData) {
  const { image, dateOfBirth } = formData;
  const profileErrors = {};
  const today = new Date();
  const userDate = new Date(dateOfBirth);
  const difference = differenceInYears(today, userDate);

  console.log(difference, "difference");
  console.log(today);

  if (isEmpty(dateOfBirth)) {
    profileErrors.dateOfBirth = "Enter your date of birth.";
  }
  if (difference < 18) {
    profileErrors.dateOfBirth = "You must be 18 years old or older.";
  }
  if (image === null) {
    profileErrors.image = "Enter your profile image.";
  }

  const isValid = isEmptyObject(profileErrors);

  return { isValid, profileErrors };
}
