interface CheckBoxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  name: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  value,
  checked,
  onChange,
  name,
}) => {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="h-4 w-4 text-blue-600 bg-gray-50 border-gray-200 focus:ring-blue-500"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default CheckBox;
