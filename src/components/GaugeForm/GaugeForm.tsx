"use client";

import { FormLabel, TextInput } from "@/common";
import classes from "./gauge-form.module.css";
import { X } from "react-feather";

export default function GaugeForm() {
  const handleChange = () => {
    console.log("change");
  };

  return (
    <div className={classes.container}>
      <FormLabel>게이지</FormLabel>
      <div className={classes["input-container"]}>
        <TextInput id="stitches" value={0} onChange={handleChange} />
        <X />
        <TextInput id="rows" value={0} onChange={handleChange} />
      </div>
    </div>
  );
}
