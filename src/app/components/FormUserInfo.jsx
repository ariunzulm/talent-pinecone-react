import { useState } from "react";
import Input from "./InputContainer";
import NextButton from "./NextButton";
import PageHero from "./PageHero";

import { motion } from "motion/react";
import validateUserInfo from "../utils/user-info-validate";

export default function FormUserInfo({
  formData,
  handleChange,
  errors,
  handleNext,
  updateErrors,
  step,
}) {
  const [isOn, setIsOn] = useState(false);
  const onSubmit = () => {
    const { isValid, infoErrors } = validateUserInfo(formData);

    if (isValid) {
      setIsOn(-100);
      setTimeout(() => {
        handleNext();
      }, 1000);
    }

    updateErrors(infoErrors);
  };

  const initialAnimation = {
    x: 0,
    opacity: 1,
  };

  const finalAnimation = {
    x: -100,
    opacity: 0,
  };

  const animation = isOn ? finalAnimation : initialAnimation;

  return (
    <motion.div animate={animation} transition={{ duration: 0.5 }}>
      <div className="bg-white px-8 py-8 w-120 h-auto flex flex-col gap-7 shadow-2xl rounded-lg">
        <div className="flex flex-col gap-2">
          <PageHero />

          <Input
            type="text"
            label="First Name"
            placeholder="Your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required={true}
          />

          <Input
            type="text"
            label="Last Name"
            placeholder="Your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required={true}
          />
          <Input
            type="text"
            label="Username"
            placeholder="Your username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
            required={true}
          />

          <div className="w-full">
            <NextButton handleNext={onSubmit} step={step} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
