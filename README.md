## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo using
<pre>
<code>
git clone https://github.com/Piyushkumarraja/Support-Ticket-System.git </code>
</pre>

2. Goto the project repo
3. Goto the server folder and run command

<pre>
<code>
npm install && npm start
</code>
</pre>

3. Goto the `client` folder and run command
<pre>
<code>
npm install && npm start
</code>
</pre>

### Routes:
1- http://localhost:3000/
2- http://localhost:3000/support-agent-creation

#### Functionalty:
1. Create a new support ticket with the specified attributes.
2. Implement round-robin assignment logic to assign a ticket to the next support agent. Change the status to Assigned when an agent is assigned.
3. Automatically set the status to "New" when the ticket is created.
4. Create a new support agent with the specified attributes.

#### API Endpoints:
1. Support Agent:
  Create Support Agent:
  Endpoint: POST /api/support-agents
  Request Body: JSON object with agent attributes.
  Response: JSON object with the created agent information.
2. Support Ticket:
  Create Support Ticket:
  Endpoint: POST /api/support-tickets
  Request Body: JSON object with ticket attributes.
  Response: JSON object with the created ticket information.
  Get All Tickets:
  Endpoint: GET /api/support-tickets
  Response: JSON array containing all support tickets.
  Add filter, sort and pagination functionality as per OpenAPI specs
  Filter fields - Status, AssignedTo, Severity, Type
  Sort fields - resolvedOn, dateCreated
