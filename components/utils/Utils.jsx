export function Input({
  id,
  icon,
  label,
  onChange,
  placeholder,
  type,
  value,
  error,
  required,
}) {
  return (
    <div className="relative flex items-center">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required ? required : true}
        className={`h-12 pl-10 pr-2 peer border bg-transparent rounded-sm focus:outline outline-1 text-[var(--bg)] w-full placeholder:text-[var(--bg)] ${
          error
            ? "border-[var(--red)] outline-[var(--red)]"
            : "border-[var(--bg)] outline-[var(--bg)]"
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-10 -translate-y-6 -translate-x-1 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:-translate-x-1 peer-focus:text-sm bg-[var(--primary-color)] px-1 rounded-sm transition-all duration-150 cursor-text ${
          error ? "text-[var(--red)]" : "text-[var(--bg)]"
        }`}
      >
        {label}
      </label>
      <i
        className={`absolute left-3 ${
          error ? "text-[var(--red)]" : "text-[var(--bg)]"
        }`}
      >
        {icon}
      </i>
    </div>
  );
}

export function Button({ icon, label, loading, type, valid }) {
  return (
    <button
      type={type}
      disabled={typeof valid === "boolean" ? !valid : false}
      className={`bg-[var(--bg)] text-[var(--primary-color)] border border-[var(--bg)] h-12 rounded-sm flex justify-center items-center gap-2 ${
        loading || !valid ? `opacity-50` : ""
      }`}
    >
      <span>{loading ? `${label}...` : `${label}`}</span>
      <i className="text-[var(--primary-color)]">{icon}</i>
    </button>
  );
}
