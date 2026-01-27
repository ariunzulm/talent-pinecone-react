import BackButton from "./BackButton";
import Input from "./InputContainer";
import NextButton from "./NextButton";

export default function FormUserDetails({
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
        type="email"
        label="Email:"
        placeholder="Your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required={true}
      />
      <Input
        type="tel"
        label="Phone number:"
        placeholder="Your phone number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
        required={true}
      />
      <Input
        type="password"
        label="Password:"
        placeholder="Your password"
        name="password"
        value={formData.passWord}
        onChange={handleChange}
        error={errors.passWord}
        required={true}
      />
      <Input
        type="password"
        label="Confirm password:"
        placeholder="Confirm password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        required={true}
      />
      <div className="flex gap-2 w-full">
        <BackButton handleBack={handleBack} />
        <NextButton handleNext={handleNext} step={step} />
      </div>
    </div>
  );
}
