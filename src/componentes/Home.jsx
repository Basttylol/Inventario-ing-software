import React, {Component} from 'react'
import app from '../credenciales'
import { getAuth, signOut} from 'firebase/auth'

import '../Home.css'
import { useEffect, useState } from 'react'

const auth = getAuth(app)


export function Home({correoUsuario}){


    return( 
        
        <>
        <div className='container'>
            <div className="mb-3 mb-4 position-absolute top-50 start-50 translate-middle">
                <table className='table table-borderless'>
                    <thead>
                    <tr border="1">
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Marca</th>
                        <th>Pais</th>
                    </tr>

                    </thead>
                    <tbody>
                    </tbody>
                </table>   
                                    
                <button onClick={()=>signOut(auth)}>
                    Cerrar sesion
                </button>
            </div>
        </div>


        </>

    )

}