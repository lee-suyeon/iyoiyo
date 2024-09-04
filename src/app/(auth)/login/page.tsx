"use client";
import { useState } from "react";
import { Button, TextInput } from "@/common";

function LoginPage() {
  const [inputs, setInputs] = useState({
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
          id="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <TextInput
          id="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <Button fullWidth>Log in</Button>
      <div className="text-center mt-2">Forgot your Password?</div>
    </form>
  );
}

export default LoginPage;
