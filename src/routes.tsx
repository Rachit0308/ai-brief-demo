import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatInterface from './pages/ChatInterface';
import BriefPreview from './pages/BriefPreview';
import TeamMatching from './pages/TeamMatching';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatInterface />} />
      <Route path="/brief" element={<BriefPreview />} />
      <Route path="/team-matching" element={<TeamMatching />} />
    </Routes>
  );
};

export default AppRoutes; 