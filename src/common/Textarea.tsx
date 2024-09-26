import { FormLabel } from ".";
import classes from "./textarea.module.css";

interface TextareaProps {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  value?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  label,
  id,
  name,
  placeholder,
  value,
  maxLength = 200,
  onChange,
}: TextareaProps) {
  return (
    <div className={classes.container}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <textarea
        id={id}
        className={classes.textarea}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />
    </div>
  );
}
