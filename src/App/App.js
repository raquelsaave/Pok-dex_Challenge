import React from 'react';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

//Components
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';

// CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Route component={Header} />
    <Route exact path="/" component={Welcome} />
    </BrowserRouter>  
  );
}

export default App;

