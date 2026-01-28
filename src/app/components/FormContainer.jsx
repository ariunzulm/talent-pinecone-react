import { useState } from "react";

import FormUserDetails from "./FormUserDetails";
import FormUserProfile from "./FormUserProfile";
import FormSuccess from "./FormSuccess";
import FormUserInfo from "./FormUserInfo";
import { toast, ToastContainer } from "react-toastify";
import validateUserInfo from "./validateUserInfo";
import validateUserDetails from "./validateUserDetails";
import validateUserProfile from "./ValidateUserProfile";

export default function FormContainer() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const stepIsValid = () => {
    const data = { ...isValid };
    if (step === 1) return validateUserInfo(data) === true;
    if (step === 2) return validateUserDetails(data) === true;
    if (step === 3) return validateUserProfile(data) == true;

    return false;
  };
  const handleNext = () => {
    if (stepIsValid) {
      toast.success("Valid form", { position: "top-right" });
      setStep(step + 1);
    } else {
      toast.error("Invalid form", { position: "top-right" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateErrors = (newErros) => {
    setErrors({ ...errors, ...newErros });
  };

  return (
    <div>
      {step === 1 && (
        <FormUserInfo
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          updateErrors={updateErrors}
          step={step}
          handleNext={handleNext}
        />
      )}

      {step === 2 && (
        <FormUserDetails
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          updateErrors={updateErrors}
          step={step}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 3 && (
        <FormUserProfile
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          updateErrors={updateErrors}
          step={step}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}
      {step === 4 && <FormSuccess />}
      <ToastContainer />
    </div>
  );
}
