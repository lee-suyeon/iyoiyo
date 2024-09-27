"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./date-selector.module.css";

interface DateSelectorProps {
  selected?: Date | null;
  onDateChange: (date: Date | null) => void;
  name: string;
  label?: string;
}

export default function DateSelector({
  selected = new Date(),
  onDateChange,
  label,
}: DateSelectorProps) {
  return (
    <div className={classes.container}>
      {label && <label className={classes.label}>{label}</label>}
      <DatePicker
        selected={selected}
        dateFormat="yyyy.MM.dd"
        onChange={onDateChange}
      />
    </div>
  );
}
