import React from 'react'
import {Outlet } from 'react-router-dom'
import Navbar from './componentes/navBar.jsx';
import Sidebar from './componentes/sidebar.jsx';
import { Link } from 'react-router-dom';




const App = () => {


    return (
        <>
            <Navbar/>  

            <div className='flex'>
                <Sidebar/>
                <div className='content'>

                </div>
            </div>
         
        </>
        )
}

export default App

