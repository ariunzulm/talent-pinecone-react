import { useState } from "react";
import BackButton from "./BackButton";
import Input from "./InputContainer";
import NextButton from "./NextButton";
import PageHero from "./PageHero";

import { motion } from "motion/react";
import validateUserDetails from "../utils/user-details";

export default function FormUserDetails({
  formData,
  handleChange,
  errors,
  updateErrors,
  handleBack,
  handleNext,
  step,
}) {
  const onSubmit = () => {
    const { isValid, detailsErrors } = validateUserDetails(formData);
    if (isValid) {
      setIsOn(-100);
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
    updateErrors(detailsErrors);
  };
  const [isOn, setIsOn] = useState(false);

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
        <div className="flex flex-col gap-1">
          <PageHero />
          <Input
            type="email"
            label="Email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required={true}
          />
          <Input
            type="tel"
            label="Phone number"
            placeholder="Your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            required={true}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required={true}
          />
          <Input
            type="password"
            label="Confirm password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            required={true}
          />
          <div className="flex gap-2 w-full">
            <BackButton handleBack={handleBack} />
            <NextButton handleNext={onSubmit} step={step} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
