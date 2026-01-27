export default function NextButton({ handleNext, step }) {
  return (
    <button
      type="submit"
      onClick={handleNext}
      className="w-full bg-black mt-20  text-white text-base leading-8 flex justify-center items-center rounded-md py-1.5 transition-all cursor-pointer"
    >
      Continue {step}/3
    </button>
  );
}
