import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SupportAgentCreation from '../src/components/AgentCreationScreen/AgentCreationScreen';
import SupportTicketEntryScreen from '../src/components/TicketScreen/SupportTicketEntryScreen';
import ToastMessage from './components/ToastMsg/ToastMsg';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/support-agent-creation" element={<SupportAgentCreation/>} />
        <Route path="/" element={<SupportTicketEntryScreen/>} />
      </Routes>
      <ToastMessage />
    </Router>
  );
};

export default App;
