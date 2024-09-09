import classes from "./text-input.module.css";

type TextInputProps = {
  label?: string;
  name?: string;
  id: string;
  type?: string;
  className?: string;
  placeholder?: string;
  value: string | number;
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
  className,
  maxLength = 30,
  onChange,
  onBlur,
  onKeyDown,
}: TextInputProps) {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={`bg-gray-50 border w-full py-3 px-2.5 rounded-lg mb-4 focus:outline-none focus:ring focuse:ring-blue-950 ${className}`}
      />
    </>
  );
}
