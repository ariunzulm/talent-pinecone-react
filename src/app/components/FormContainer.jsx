import { useState } from "react";

import FormUserDetails from "./FormUserDetails";
import FormUserProfile from "./FormUserProfile";
import FormSuccess from "./FormSuccess";

import { toast, ToastContainer } from "react-toastify";
import FormUserInfo from "./FormUserInfo";

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

  const validateUserInfo = () => {
    const infoErrors = {
      firstName: "",
      lastName: "",
      username: "",
    };

    if (formData.firstName === "") {
      infoErrors.firstName = "Нэрээ оруулна уу.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      infoErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    if (formData.lastName === "") {
      infoErrors.lastName = "Овогоо оруулна уу.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      infoErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (formData.username === "") {
      infoErrors.username = "Хэрэглэгчийн нэрээ оруулна уу.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      infoErrors.username =
        "This username is already taken. Please choose another one.";
    }
    setErrors(infoErrors);
  };
  const validateUserDetails = () => {
    const detailsErrors = {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };
    if (formData.email === "") {
      detailsErrors.email = "Мэйл хаягаа оруулна уу";
    } else if (
      !/^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      detailsErrors.email = "Зөв мэйл хаяг оруулна уу";
    } else {
      detailsErrors.email = "";
    }
    if (!/^[0-9]{7,8}$/.test(formData.phoneNumber)) {
      detailsErrors.phoneNumber = "Утасны дугаараа оруулна уу.";
    } else if (formData.phoneNumber.length < 8) {
      detailsErrors.phoneNumber = "8 оронтой дугаар оруулна уу.";
    }
    if (formData.password === "") {
      detailsErrors.password = "Нууц үгээ оруулна уу";
    } else if (formData.password < 6) {
      detailsErrors.password = "6 оронтой тоо оруулна уу.";
    }
    if (formData.confirmPassword === "") {
      detailsErrors.password = "Нууц үгээ давтаж оруулна уу";
    } else if (formData.confirmPassword !== formData.passWord) {
      detailsErrors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
    }
    setErrors(detailsErrors);
  };

  const handleNext = () => {
    const isValid = validateUserInfo() || validateUserDetails();
    if (isValid) {
      toast.success("Valid form", { position: "top-right" });
    } else {
      toast.error("Invalid form", { position: "top-right" });
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  console.log(step);

  return (
    <div>
      {step === 1 && (
        <FormUserInfo
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          handleNext={handleNext}
          step={step}
        />
      )}

      {step === 2 && (
        <FormUserDetails
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          handleNext={handleNext}
          step={step}
          handleBack={handleBack}
        />
      )}
      {step === 3 && (
        <FormUserProfile
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          handleBack={handleBack}
          handleNext={handleNext}
          step={step}
        />
      )}
      {step === 4 && <FormSuccess />}
      <ToastContainer />
    </div>
  );
}
