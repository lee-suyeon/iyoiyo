"use client";
import { useState } from "react";
import { Button, TextInput, CheckBox } from "@/common";

function SignUpPage() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <form className="mt-10">
      <div className="mb-10">
        <TextInput
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <TextInput
          id="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <TextInput
          id="password"
          name="password"
          type="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <Button fullWidth>Sign Up</Button>
    </form>
  );
}

export default SignUpPage;
