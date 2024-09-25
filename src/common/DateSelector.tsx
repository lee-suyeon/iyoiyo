"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./date-selector.module.css";

interface DateSelectorProps {
  selected?: Date | null;
  // onChange: (value: string) => void;
  name: string;
  label?: string;
}

export default function DateSelector({
  selected = new Date(),
  // onChange,
  label,
  name,
}: DateSelectorProps) {
  return (
    <div className={classes.container}>
      {label && <label className={classes.label}>{label}</label>}
      <DatePicker selected={selected} dateFormat="yyyy.MM.dd" />
    </div>
  );
}
