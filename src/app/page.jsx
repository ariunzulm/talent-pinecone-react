"use client";

import FormContainer from "./components/FormContainer";

export default function Page() {
  return (
    <div className="flex justify-center pt-30 w-full">
      <div className="bg-white px-8 py-8 w-120 h-auto flex flex-col gap-7 shadow-2xl">
        <article className="flex flex-col gap-2 w-full  ">
          <img
            className="max-w-15 h-full object-contain"
            src="/Main 1.svg"
            alt="Main logo"
          />
          <h1 className="font-semibold text-[26px] text-[#202124] text-shadow-md leading-none align-middle">
            Join Us! 😎
          </h1>
          <p className="text-[#8E8E8E] text-[18px] tracking-normal">
            Please provide all current information accurately.
          </p>
          <FormContainer />
        </article>
      </div>
    </div>
  );
}
