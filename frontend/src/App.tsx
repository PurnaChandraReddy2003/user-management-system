import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import UserDirectory from './components/UserDirectory';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/users" element={<UserDirectory />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;