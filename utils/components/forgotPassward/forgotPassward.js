"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPassward() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    // Handle post submission logic here
    const forgotPassward = await createNewpassward(data);
    console.log(password);
    alert("submited");
    setPostContent("");
  };

  return (
    <div>
      <h1>forgotPassward</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>
        
        <button type="submit">forgotPassward</button>
      </form>
      <Link href="/login">Go to Login Page</Link>
    </div>
  );
}
