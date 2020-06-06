import React from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Routes from './components/Routes';

function App() {
  return (
      <div className="flexible-content">
          <Navigation />
          <main id="content" className="mt-5 p-5" >
              <Routes />
          </main>
      </div>
  );
}

export default App;
