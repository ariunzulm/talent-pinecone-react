"use client";

import FormContainer from "./components/FormContainer";
import PageHero from "./components/PageHero";

export default function Form() {
  return (
    <div className="flex justify-center pt-30 w-full">
      <div className="bg-white px-8 py-8 w-120 h-auto flex flex-col gap-7 shadow-2xl">
        <PageHero />
        <FormContainer />
      </div>
    </div>
  );
}
