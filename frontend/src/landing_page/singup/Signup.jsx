import { useState } from "react";
import axios from "axios";
import "./Signup.css";

export default function BasicTextFields() {
  const [formData, setFormData] = useState({
    username: "",
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

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/signup",
        formData,
      );

      console.log(response.data);
      alert("Signup successful!");

      setFormData({
        username: "",
        email: "",
        password: "",
      });

      if (response.status === 200) {
        window.location.href = "http://localhost:5174";
      }
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Signup failed. Please try again.",
      );
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Create Account</h2>

        <p className="signup-subtitle">Sign up to get started!</p>

        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Signup →
          </button>
        </form>

        <p className="signup-footer">
          Please fill in all fields to create your account.
        </p>
      </div>
    </div>
  );
}
