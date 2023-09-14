import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Paths } from './types/routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <main className="App-main">
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
