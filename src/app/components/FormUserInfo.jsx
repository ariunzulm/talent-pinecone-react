import Input from "./InputContainer";
import NextButton from "./NextButton";
import PageHero from "./PageHero";
import validateUserInfo from "./validateUserInfo";

export default function FormUserInfo({
  formData,
  handleChange,
  errors,
  handleNext,
  updateErrors,
  step,
}) {
  const onSubmit = () => {
    const { isValid, infoErrors } = validateUserInfo(formData);

    if (isValid) {
      handleNext();
    }

    updateErrors(infoErrors);
  };
  return (
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
  );
}
