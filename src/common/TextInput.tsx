import classes from "./text-input.module.css";

type TextInputProps = {
  label?: string;
  name?: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function TextInput({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  maxLength = 30,
  onChange,
  onBlur,
  onKeyDown,
}: TextInputProps) {
  return (
    <div className={classes.container}>
      {label && <label className={classes.label}>{label}</label>}
      <input
        id={id}
        className={classes.input}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
