const Input = ({
  children,
  classes,
  onChange,
}: {
  children: any;
  classes?: string;
  onChange?: Function;
}) => {
  return (
    <input
      onChange={(evt) => onChange(evt)}
      type="text"
      className={
        "px-2 py-2 text-white outline-none select-none " +
        classes
      }
      placeholder={children}
    />
  );
};

export default Input;
