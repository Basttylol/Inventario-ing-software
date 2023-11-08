import { useState } from 'react'
import '../Login.css'

import appFirebase from '../credenciales'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(appFirebase)

export function Login(){


    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const pass = e.target.password.value;

        try{
            await signInWithEmailAndPassword(auth, correo, pass)
        } catch(error){
            if(correo === "" || pass === ""){
                alert("Debe ingresar datos")
                document.getElementById('password').value = '';
                document.getElementById('email').value = '';
            }else{
                alert("Datos incorrectos")
                document.getElementById('password').value = '';
                document.getElementById('email').value = '';
            }


        }

    }

    return(
        <div className='position-absolute top-50 start-50 translate-middle'>
            <form onSubmit={functAutenticacion}>
                <h1>
                    Iniciar Sesion
                </h1>
                <input type="text" placeholder="Usuario" id='email' className='form-control'/>
                <input type="password" placeholder="Contraseña" id='password' className='form-control'/>
                
                <button className='btn btn-primary'>
                    Inicia sesion
                </button>
            </form>
        </div>

    )
}