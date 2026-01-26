"use client";

import { useState } from "react";
import PageOne from "./stepOne/PageOne";
import PageThree from "./stepThree/PageTwo";
import PageTwo from "./stepTwo/PageTwo";

export default function Page() {
  const components = [PageOne, PageTwo, PageThree];
  const [index, setIndex] = useState(0);
  const slider = () => {
    components[index];
    setIndex(index + 1);
  };
  return (
    <div>
      fsvfs
      <button onClick={continueButton}>Continue </button>
    </div>
  );
}
