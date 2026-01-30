export default function BackButton({ handleBack }) {
  return (
    <button
      type="submit"
      onClick={handleBack}
      className="w-1/3 bg-white mt-20 border border-gray-300  text-black text-base leading-8 flex justify-center items-center rounded-md py-1.5 transition-all cursor-pointer"
    >
      Back
    </button>
  );
}
