import classes from "./select-box.module.css";

interface Option {
  label: string;
  value: string | number;
}

interface SelectBoxProps {
  label?: string;
  value: string;
  options: Option[];
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectBox({
  label,
  value,
  onChange,
  options,
  placeholder = "선택해주세요.",
}: SelectBoxProps) {
  return (
    <div className={classes.container}>
      {label && <label className={classes.label}>{label}</label>}
      <select className={classes.select} onChange={onChange}>
        <option value={value} disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
