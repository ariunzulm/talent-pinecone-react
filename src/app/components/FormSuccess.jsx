export default function FormSuccess(    ) {
  return (
    <div className="bg-white px-8 py-8 w-120 h-auto flex flex-col gap-7 shadow-2xl rounded-lg">
      <div className="flex flex-col gap-2 w-full p-8 rounded-md">
        <img
          className="max-w-15 h-full object-contain"
          src="/Main 1.svg"
          alt="Main logo"
        />
        <h3 className="font-semibold text-[26px] text-[#202124] text-shadow-md leading-none align-middle">
          You're All Set! 🔥
        </h3>
        <p className="text-[#8E8E8E] text-[18px] tracking-normal">
          We've received your submission. Thank you!
        </p>
      </div>
    </div>
  );
}
