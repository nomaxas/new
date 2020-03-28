import React from 'react';
import ROUTES, {RenderRoutes} from '../../routes';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import './App.css';

function App() {
  
  return (
    <div className="App">
        <Navbar routes={ROUTES}/>
        <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
