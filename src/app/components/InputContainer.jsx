export default function InputContainer({
  type = "text",
  value,
  onChange,
  name,
  label,
  error,
  required,
  placeholder = "Placeholder",
  disabled,
}) {
  const hasError = error && error.trim() !== "";
  return (
    <div className="max-w-md">
      <div className="flex flex-col w-full gap-1">
        <label htmlFor={name} className="text-sm font-semibold">
          {label}{" "}
          {required && <span className="text-red-600 ml-1 text-sm">*</span>}
        </label>

        <input
          id={name}
          className={`${hasError ? "border-red-600" : "border-gray-200"} w-full border-2 py-1.5  px-3 rounded-sm text-base leading-8 transition-colors  hover:border-[#0CA5E9] focus:border-[#0CA5E9] Focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />
        {hasError && <p className="text-red-600 text-xs">{error}</p>}
      </div>
    </div>
  );
}
