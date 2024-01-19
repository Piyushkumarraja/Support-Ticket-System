const mongoose = require("mongoose");
const statusEnum = ["New", "Assigned", "Resolved"];
const supportTicketSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true },
    description: { type: String, required: true },
    severity: { type: String, required: true },
    type: { type: String, required: true },
    assignedTo: { type: String, required: true },
    status: { type: String, enum: statusEnum, default: "New" },
    resolvedOn: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const SupportTicket = mongoose.model("Ticket", supportTicketSchema);

module.exports = SupportTicket;
