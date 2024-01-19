const SupportAgent = require('../modals/supportAgent');
const SupportTicket = require('../modals/supportTicket');

exports.createSupportAgent = async (req, res) => {
  try {
    const supportAgent = await SupportAgent.create({ ...req.body, active: true });
    res.status(201).json(supportAgent);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createSupportTicket = async (req, res) => {
  try {
    const { assignedTo, ...ticketData } = req.body;
    const supportAgents = await SupportAgent.find({ active: true });
    const agentCount = supportAgents.length;

    if (agentCount === 0) {
      return res.status(400).json({ error: 'No active support agents available.' });
    }
    const nextAgentIndex = (await SupportTicket.countDocuments()) % agentCount;
    const assignedAgent = supportAgents[nextAgentIndex];
    const supportTicket = await SupportTicket.create({
      ...ticketData,
      assignedTo: assignedAgent._id,
      status: 'Assigned',
      dateCreated: new Date(),
    });

    res.status(201).json(supportTicket);
  } catch (error) {
    console.error("Error creating support ticket:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllSupportTickets = async (req, res) => {
  try {
    const { status, assignedTo, severity, type, sortBy, sortOrder, page, limit } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (assignedTo) filter.assignedTo = assignedTo;
    if (severity) filter.severity = severity;
    if (type) filter.type = type;

    const sort = {};
    if (sortBy) sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const skip = (page - 1) * limit;
    const tickets = await SupportTicket.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .populate('assignedTo', 'name email');

    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error fetching support tickets:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
