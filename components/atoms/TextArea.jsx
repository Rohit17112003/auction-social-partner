const Textarea = ({ id, onChange, placeholder, value, name, style }) => {
  return (
    <textarea
      className={`${style} h-20 w-full bg-light rounded-lg  px-3 py-2 outline-0 placeholder:text-dark`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    ></textarea>
  );
};

export default Textarea;
