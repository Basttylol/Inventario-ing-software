import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navBar.jsx';
import Login from './views/Login.jsx';
import Tabla from './views/Tabla.jsx';
import Sidebar from './componentes/sidebar.jsx';

const App = () => {
  return (
      <div>
        <Navbar />

        <div className='flex'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/inventario' element={<Tabla />} />
            </Routes>
          </div>
        </div>
      </div>
  );
};

export default App;

