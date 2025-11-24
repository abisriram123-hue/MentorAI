import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Scenarios from './pages/Scenarios';
import Simulation from './pages/Simulation';
import Results from './pages/Results';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/results" element={<Results />} />
          <Route path="/achievements" element={<Navigate to="/results" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
