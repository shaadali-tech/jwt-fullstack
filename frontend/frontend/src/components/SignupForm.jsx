import { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/auth/signup", form);

      alert("Registration Successful");

      window.location.href = "/login";
    } catch (error) {
      alert("Registration Failed");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br />
      <br />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
