import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/Home';
import ProjectPage from './pages/Project';

function App() {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>   
      <header className="App-header">
        <NavBar />
        <Routes >
          <Route path="/home" element={<HomePage />}/>
          <Route path="/project" element={<ProjectPage />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
