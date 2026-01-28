import { Image } from "lucide-react";
import Input from "./InputContainer";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import PageHero from "./PageHero";

export default function 
FormUserProfile({
  formData,
  handleChange,
  errors,
  handleBack,
  handleNext,
  step,
}) {
  return (
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
      <div className="flex flex-col cursor-pointer gap-y-2 justify-center items-center bg-gray-100 h-45  border border-gray-200 rounded-md">
        <input
          hidden
          type="file"
          name="profileImage"
          required={true}
          id="profileImage"
        />
        <Image className="bg-white h-7 w-7 rounded-full p-2" />
        <p className="text-sm font-medium">Browse or Drop Image</p>
      </div>
      <div className="flex gap-2 w-full">
        <BackButton handleBack={handleBack} step={step} />
        <NextButton handleNext={handleNext} step={step} />
      </div>
    </div>
  );
}
