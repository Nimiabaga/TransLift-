// src/App.js
import React from 'react';
import HomePage from './components/HomePage'; // assuming you have this
import StayUpdated from './components/StayUpdated'; // your new section
import Footer from './components/Footer'; // if you have a separate footer

function App() {
  return (
    <div className="App">
      <HomePage />
      <StayUpdated />
      <Footer />
    </div>
  );
}

export default App;
