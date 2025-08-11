const Input = ({ 
  id, 
  placeholder, 
  type = "text", 
  name, 
  onChange, 
  value, 
  icon = "ri-hashtag" 
}) => (
  <label
    className="flex items-center w-full gap-3 rounded-lg bg-light px-3 md:py-3 py-4"
    htmlFor={id}
  >
    <span>
      <i className={`${icon} ri-lg font-light text-dark`} />
    </span>
    <input
      className="placeholder:text-dark placeholder:font-medium font-medium w-full outline-0 bg-transparent"
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      required
    />
  </label>
);

export default Input;
