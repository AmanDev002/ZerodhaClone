import { useState } from "react";
import axios from "axios";
import "./Login.css";
// import "./boot.js";

export default function BasicTextFields() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleButtonSubmit();
  }

  async function handleButtonSubmit() {
    try {
      const response = await axios.post("http://localhost:4000/login", formData);

      console.log(response.data);
      alert("Login successful!");

      if (response.status === 200) {
        window.location.href = "http://localhost:5174";
      }
    } catch (error) {
      console.log(error);
      alert("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login Account</h2>

        <p className="login-subtitle">Welcome back! Login to get started.</p>

        <form
          onSubmit={handleFormSubmit}
          className="needs-validation"
          novalidate
        >
          <div className="form-group">
            <label htmlFor="validationCustom03">Email Address</label>

            <input
              type="email"
              id="validationCustom03"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="login-btn"
            onClick={handleButtonSubmit}
          >
            Login →
          </button>
        </form>

        <p className="login-footer">
          Welcome back! Access your account securely.
        </p>
      </div>
    </div>
  );
}
