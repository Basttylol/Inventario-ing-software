import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/Login';
import Inicio from './views/Inicio'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
          <Routes>

              {/*ACONTINUACION ESTABLECEMOS LAS RUTAS DE NUESTRO SISTEMA*/}

              {/*ruta individual sin usar una como base*/}
              <Route index path='/Login' element={<Login />} />

              <Route path='/' element={<App />}>

                <Route index element={<Inicio />} />
                {/* <Route path='dashboard' element={<VerificarUsuario> <DashBoard /> </VerificarUsuario>} />
                <Route path='usuario' element={<VerificarUsuario> <Usuario /> </VerificarUsuario>} />
                <Route path='producto' element={<VerificarUsuario> <Producto /> </VerificarUsuario>} />
                <Route path='categoria' element={<VerificarUsuario> <Categoria /> </VerificarUsuario>} />
                <Route path='venta' element={<VerificarUsuario> <Venta /> </VerificarUsuario>} />
                <Route path='historialventa' element={<VerificarUsuario> <HistorialVenta /> </VerificarUsuario>} />
                <Route path='reporteventa' element={<VerificarUsuario > <ReporteVenta /> </VerificarUsuario>} /> */}

              </Route>
              
          </Routes>

     

  </BrowserRouter>
);
