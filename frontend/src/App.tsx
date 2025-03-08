import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // No BrowserRouter here
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './components/dashboard/Dashboard';

interface User {
  name: string;
  email: string;
  image: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth setUser={setUser} />} />
      <Route
        path="/dashboard"
        element={user ? <Dashboard user={user} /> : <Navigate to="/auth" replace />}
      />
      <Route path="*" element={<Navigate to={user ? '/dashboard' : '/auth'} replace />} />
    </Routes>
  );
}

export default App;