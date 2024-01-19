// SupportAgentCreation.js
import React, { useState } from "react";
import "./AgentCreationScreen.scss";
import makeRequest from "../../Api/apiConfig";
import { message } from "../ToastMsg/ToastMsg";

const SupportAgentCreation = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.id]: "",
    });
  };

  const validatePhone = () => {
    const phoneRegex = /^\d{10}$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: phoneRegex.test(formData.phone)
        ? ""
        : "Please enter a valid 10-digit phone number.",
    }));
  };

  const createSupportAgent = async (e) => {
    e.preventDefault();
    validatePhone();

    if (errors.phone) {
      return;
    }

    try {
      const response = await makeRequest(
        "post",
        "/api/support-agents",
        formData
      );
      setFormData(initialState);
      message("success", "Support Agent Create Successfully");
    } catch (error) {
      console.error("Error creating Support Agent:", error);
      message("error", "Support Agent Create Failed");
    }
  };

  return (
    <div className="cont">
      <h1>Support Agent Creation</h1>
      <form className="form-cont" onSubmit={createSupportAgent}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={validatePhone} // Validate on blur
            required
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Create Support Agent</button>
      </form>
    </div>
  );
};

export default SupportAgentCreation;
