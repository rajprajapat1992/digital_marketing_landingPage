import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ContactForm from './ContactForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
