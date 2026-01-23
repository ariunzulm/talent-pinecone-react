import { useState } from "react";
import ButtonContainer from "./ButtonContainer";

export default function InputContainer({}) {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  console.log(formInput);

  const handleFirstNameChange = (e) => {
    setFormInput({
      ...formInput,
      firstName: e.target.value,
    });
  };
  const handleLastNameChange = (e) => {
    setFormInput({
      ...formInput,
      lastName: e.target.value,
    });
  };
  const handleUsenameChange = (e) => {
    setFormInput({ ...formInput, username: e.target.value });
  };
  const handleContinue = (text) => {
    if (formInput.firstName === "") {
      alert("hooson bn");
    }
  };
  return (
    <div className="max-w-md">
      <article className="flex flex-col gap-2">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="firstName" className="text-sm font-semibold">
            First Name:
          </label>
          <input
            className="w-full border-2 py-1.5  px-3 rounded-sm text-base leading-8 transition-colors border-gray-200 hover:border-[#0CA5E9] "
            type="text"
            onChange={handleFirstNameChange}
            id="firstName"
            placeholder="Placeholder"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="firstName" className="text-sm font-semibold">
            Last Name:
          </label>
          <input
            className="w-full border-2 py-1.5  px-3 rounded-sm text-base leading-8 transition-colors border-gray-200 hover:border-[#0CA5E9] "
            type="text"
            value={formInput.lastName}
            onChange={handleLastNameChange}
            id="firstName"
            placeholder="Placeholder"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="username" className="text-sm font-semibold">
            UserName:
          </label>
          <input
            className="w-full border-2 py-1.5  px-3 rounded-sm text-base leading-8 transition-colors border-gray-200 hover:border-[#0CA5E9] "
            type="text"
            value={formInput.username}
            onChange={handleUsenameChange}
            id="username"
            placeholder="Placeholder"
          />
        </div>
        <ButtonContainer handleContinue={handleContinue} />
      </article>
    </div>
  );
}
