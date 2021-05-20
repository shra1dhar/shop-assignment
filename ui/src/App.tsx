import React from 'react';
import './App.scss';
import Heading from './components/modules/Header';
import Home from './components/screens/Home';

function App() {
  return (
    <div className="App">
      <Heading />
      <Home />
    </div>
  );
}

export default App;
