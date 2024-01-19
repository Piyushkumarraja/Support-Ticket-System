const mongoose = require("mongoose");

const supportAgentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const SupportAgent = mongoose.model("Agent", supportAgentSchema);

module.exports = SupportAgent;
