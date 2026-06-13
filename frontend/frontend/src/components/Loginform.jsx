import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [form, setForm] = useState({
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
      const res = await axios.post("http://localhost:5000/auth/login", form);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
