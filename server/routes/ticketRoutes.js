const express = require("express");
const {
  createSupportAgent,
  createSupportTicket,
  getAllSupportTickets,
} = require("../controllers/ticket.js");

const router = express.Router();

router.post("/support-agents", createSupportAgent);
router.post("/support-tickets", createSupportTicket);
router.get("/support-tickets", getAllSupportTickets);

module.exports = router;
