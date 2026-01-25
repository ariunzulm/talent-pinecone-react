import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import InputContainer from "./InputContainer";

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
    setFormData({ ...formData, [name]: value });
  };

  const handleContinue = () => {
    console.log(firstName);
  };

  return (
    <div className="flex flex-col gap-2">
      <InputContainer
        label="First Name:"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <InputContainer
        label="Last Name:"
        name="lastName"
        value={formData.username}
        onChange={handleChange}
      />
      <InputContainer
        label="Username:"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <ButtonContainer onClick={handleContinue} />
    </div>
  );
}
