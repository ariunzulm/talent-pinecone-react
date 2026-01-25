export default function ButtonContainer({ handleContinue }) {
  return (
    <button
      onClick={handleContinue}
      className="w-full bg-black mt-20  text-white text-base leading-8 flex justify-center items-center rounded-sm py-1.5 transition-all cursor-pointer"
    >
      Continue 1/3
    </button>
  );
}
