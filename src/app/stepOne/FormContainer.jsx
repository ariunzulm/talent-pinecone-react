import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import InputContainer from "./InputContainer";
import ButtonContainer from "./ButtonContainer";

export default function FormContainer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateFormData = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      username: "",
    };

    if (formData.firstName === "") {
      newErrors.firstName = "Нэрээ оруулна уу.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    if (formData.lastName === "") {
      newErrors.lastName = "Овогоо оруулна уу.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (formData.username === "") {
      newErrors.username = "Хэрэглэгчийн нэрээ оруулна уу.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      newErrors.username =
        "This username is already taken. Please choose another one.";
    }
    setErrors(newErrors);
  };

  const handleContinue = () => {
    const isValid = validateFormData();
    if (isValid) {
      toast.success("Valid form", { position: "top-right" });
    } else {
      toast.error("Invalid form", { position: "top-right" });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <InputContainer
        label="First Name:"
        placeholder="Your first name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        required={true}
      />

      <InputContainer
        label="Last Name:"
        placeholder="Your last name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
        required={true}
      />
      <InputContainer
        label="Username:"
        placeholder="Your username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
        required={true}
      />
      <ButtonContainer
        handleContinue={() => {
          console.log(handleContinue());
        }}
      />
      <ToastContainer />
    </div>
  );
}
