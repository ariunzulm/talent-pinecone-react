import { Image } from "lucide-react";
import Input from "./InputContainer";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import PageHero from "./PageHero";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import validateUserProfile from "../utils/user-profile";

export default function FormUserProfile({
  formData,
  handleChange,
  errors,
  updateErrors,
  handleBack,
  handleNext,
  step,
}) {
  const { image } = formData;
  const ref = useRef();

  const handleFileUpload = () => {
    const event = { target: { name: "image", value: ref.current.files[0] } };
    handleChange(event);
  };

  const onSubmit = () => {
    const { isValid, profileErrors } = validateUserProfile(formData);
    if (isValid) {
      setIsOn(-100);
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
    updateErrors(profileErrors);
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
            type="date"
            label="Date of birth"
            placeholder="--/--/--"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            error={errors.dateOfBirth}
            required={true}
          />

          <label className="text-sm font-bold mb-1">
            Profile Image
            <span className="text-red-600 ml-1 text-sm">*</span>
          </label>

          <div
            className={`${errors.image ? "border-red-600 border" : "border-gray-200 border"} flex flex-col cursor-pointer gap-y-2 justify-center items-center bg-gray-100 h-45  border border-gray-200 rounded-md`}
          >
            <input
              type="file"
              className="border w-full h-full relative opacity-0 cursor-pointer"
              name="image"
              error={errors.image}
              ref={ref}
              onChange={handleFileUpload}
            />
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Profile image"
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="flex flex-col absolute">
                <Image className="bg-white h-7 w-7 rounded-full p-2 mx-auto" />
                <p className="text-sm font-medium">Browse or Drop Image</p>
              </div>
            )}
          </div>
          {errors.image && (
            <p className="text-red-600 text-xs">{errors.image}</p>
          )}
          <div className="flex gap-2 w-full">
            <BackButton handleBack={handleBack} step={step} />
            <NextButton step={step} handleNext={onSubmit} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
