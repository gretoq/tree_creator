import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Paths } from './types/routes';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path={Paths.HOME} element={<HomePage />} />
          <Route path={Paths.NOTFOUND} element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
