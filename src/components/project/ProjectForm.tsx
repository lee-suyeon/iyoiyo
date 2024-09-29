"use client";
import { useState } from "react";

import {
  DateSelector,
  TextInput,
  ImagePicker,
  SelectBox,
  Textarea,
  Button,
} from "@/common";
import classes from "./project-form.module.css";
import GaugeForm from "../GaugeForm/GaugeForm";

const categoryOption = [
  { label: "Clothing", value: "clothing" },
  { label: "Bag", value: "bag" },
  { label: "Accessories", value: "accessories" },
  { label: "Others", value: "Others" },
];

interface FormState {
  projectName: string;
  patternBy: string;
  category: "clothing" | "bag" | "accessories" | "Others";
  yarn: string;
  color: string;
  gauge: { stitches: number; rows: number };
  needleSize: number;
  link: string;
  memo: string;
}

export default function ProjectForm() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [inputs, setInputs] = useState<FormState>({
    projectName: "",
    patternBy: "",
    category: categoryOption[0].value as
      | "clothing"
      | "bag"
      | "accessories"
      | "Others",
    yarn: "",
    color: "",
    gauge: { stitches: 0, rows: 0 },
    needleSize: 0,
    link: "",
    memo: "",
  });
  const {
    projectName,
    patternBy,
    category,
    yarn,
    color,
    gauge,
    needleSize,
    link,
    memo,
  } = inputs;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleChangeDate = (date: Date | null) => {
    setStartDate(date);
  };

  const submitProject = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = inputs;

    try {
      // Send POST request to the API
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("success");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <form className={classes.container} onClick={submitProject}>
      <ImagePicker
        id="project-image"
        placeholder="프로젝트 이미지를 추가해주세요."
      />
      <TextInput
        id="projectName"
        name="projectName"
        placeholder="프로젝트명을 입력해주세요."
        label="프로젝트 명"
        value={projectName}
        onChange={handleChange}
      />
      <SelectBox
        name="category"
        label="카테고리"
        value={category}
        onChange={handleChange}
        options={categoryOption}
      />
      <TextInput
        id="patternBy"
        name="patternBy"
        label="도안 작가"
        placeholder="도안작가를 입력해주세요."
        value={patternBy}
        onChange={handleChange}
      />
      <DateSelector
        label="프로젝트 시작 날짜"
        name="startDate"
        selected={startDate}
        onDateChange={handleChangeDate}
      />
      <TextInput
        id="link"
        name="link"
        label="링크"
        placeholder="관련 링크를 입력해주세요."
        value={link}
        onChange={handleChange}
      />
      <TextInput
        id="yarn"
        label="실"
        name="yarn"
        placeholder="사용하는 실을 입력해주세요."
        value={yarn}
        onChange={handleChange}
      />
      <TextInput
        id="color"
        label="색상"
        name="color"
        placeholder="색상을 입력해주세요."
        value={color}
        onChange={handleChange}
      />
      <TextInput
        id="needlesize"
        name="needlesize"
        label="바늘사이즈"
        placeholder="바늘사이즈를 입력해주세요."
        type={"number"}
        value={needleSize}
        onChange={handleChange}
      />
      <GaugeForm gauge={gauge} onChange={handleChange} />
      <Textarea
        id="memo"
        name="memo"
        label="메모"
        placeholder="메모를 입력해주세요."
        value={memo}
        onChange={handleChange}
      />
      <Button variant="primary">프로젝트 추가</Button>
    </form>
  );
}
