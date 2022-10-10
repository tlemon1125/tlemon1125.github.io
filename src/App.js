import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SplashScreen />} />
    </Routes>
    <NavBar />
    <div className="App container-fluid">
      <header className="App-header">
        <Routes >
          <Route path="/home" element={<HomePage />}/>
        </Routes>
      </header>
    </div>
    </>
  );
}

export default App;
