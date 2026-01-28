import BackButton from "./BackButton";
import Input from "./InputContainer";
import NextButton from "./NextButton";
import PageHero from "./PageHero";
import validateUserDetails from "./validateUserDetails";

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
      handleNext();
    }
    updateErrors(detailsErrors);
  };
  return (
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
  );
}
