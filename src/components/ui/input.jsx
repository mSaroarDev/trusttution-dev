const Input = ({
  type = "text",
  placeholder = "Enter text",
  value,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <>
      <input
        className={`w-full px-4 py-2 border border-slate-300 rounded-sm transition-colors ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};

export default Input;