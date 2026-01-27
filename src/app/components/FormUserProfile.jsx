import { Image } from "lucide-react";
import Input from "./InputContainer";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

export default function FormUserProfile({
  formData,
  handleChange,
  errors,
  handleBack,
  handleNext,
  step,
}) {
  return (
    <div className="flex flex-col gap-1">
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
      <Input
        type="image"
        label="Add Image"
        placeholder="Your email"
        name="profileImage"
        value={formData.profileImage}
        onChange={handleChange}
        error={errors.profileImage}
        required={true}
      />
      <Image />
      <div className="flex gap-2 w-full">
        <BackButton handleBack={handleBack} step={step} />
        <NextButton handleNext={handleNext} step={step} />
      </div>
    </div>
  );
}
