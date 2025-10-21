const Label = ({
  children,
  notRequired = false,
}) => {
  return (
    <>
      <label className="mt-1.5 block mb-0.5 text-sm font-medium text-gray-700">
        {children}
        {!notRequired && <span className="text-red-500 ml-1 text-sm">*</span>}
      </label>
    </>
  );
};

export default Label;