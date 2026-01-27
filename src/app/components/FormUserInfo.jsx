import Input from "./InputContainer";
import { ToastContainer, toast } from "react-toastify";
import NextButton from "./NextButton";

export default function FormUserInfo({
  formData,
  handleChange,
  errors,
  handleNext,
  step,
}) {
  //   const validateFormData = () => {
  //     const newErrors = {
  //       firstName: "",
  //       lastName: "",
  //       username: "",
  //     };

  //     if (formData.firstName === "") {
  //       newErrors.firstName = "Нэрээ оруулна уу.";
  //     } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
  //       newErrors.firstName =
  //         "First name cannot contain special characters or numbers.";
  //     }
  //     if (formData.lastName === "") {
  //       newErrors.lastName = "Овогоо оруулна уу.";
  //     } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
  //       newErrors.lastName =
  //         "Last name cannot contain special characters or numbers.";
  //     }
  //     if (formData.username === "") {
  //       newErrors.username = "Хэрэглэгчийн нэрээ оруулна уу.";
  //     } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
  //       newErrors.username =
  //         "This username is already taken. Please choose another one.";
  //     }
  //     setErrors(newErrors);
  //   };
  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        label="First Name:"
        placeholder="Your first name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        required={true}
      />

      <Input
        type="text"
        label="Last Name:"
        placeholder="Your last name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
        required={true}
      />
      <Input
        type="text"
        label="Username:"
        placeholder="Your username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
        required={true}
      />

      <div className=" w-full">
        <NextButton handleNext={handleNext} step={step} />
      </div>
    </div>
  );
}
