import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { UserPage } from './pages/UserPage';
import { AdminPage } from './pages/AdminPage';
import { DisplayPage } from './pages/DisplayPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;