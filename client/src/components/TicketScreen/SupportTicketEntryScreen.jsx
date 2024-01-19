import React, { useState } from "react";
import makeRequest from "../../Api/apiConfig";
import { message } from "../ToastMsg/ToastMsg";

const SupportTicketCreation = () => {
  const [ticketData, setTicketData] = useState({
    topic: "",
    description: "",
    severity: "",
    type: "",
    assignedTo: "",
    status: "New",
    resolvedOn: "",
  });

  const handleChange = (e) => {
    setTicketData({
      ...ticketData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeRequest(
        "post",
        "/api/support-tickets",
        ticketData
      );
      console.log("Support ticket created successfully:", response.data);
      message("success", "Support Ticket Create Successfully");
      setTicketData({
        topic: "",
        description: "",
        severity: "",
        type: "",
        assignedTo: "",
        status: "New",
        resolvedOn: "",
      });
    } catch (error) {
      console.error("Error creating support ticket:", error);
      message("error", "Support Ticket Create Failed");
    }
  };

  return (
    <div className="cont">
      <h1>Create Support Ticket</h1>
      <form className="form-cont" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={ticketData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={ticketData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="severity">Severity:</label>
          <input
            type="text"
            id="severity"
            name="severity"
            value={ticketData.severity}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={ticketData.type}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="assignedTo">Assigned To:</label>
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            value={ticketData.assignedTo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="resolvedOn">Resolved On:</label>
          <input
            type="date"
            id="resolvedOn"
            name="resolvedOn"
            value={ticketData.resolvedOn}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Support Ticket</button>
      </form>
    </div>
  );
};

export default SupportTicketCreation;
