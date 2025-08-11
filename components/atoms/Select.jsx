const Select = ({ id, name, value, onChange, icon, placeholder, options = [] }) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center w-full gap-3 rounded-lg bg-light px-3 md:py-3 py-4"
    >
      {icon && (
        <span>
          <i className={`${icon} ri-xl text-dark`}></i>
        </span>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="placeholder:text-dark font-medium w-full outline-0 bg-light"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
