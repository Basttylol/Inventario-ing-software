import appFirebase from '../../credenciales'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'



const auth = getAuth(appFirebase)

const Login=()=>{

    const [usuario, setUsuario] = useState(null)

    onAuthStateChanged(auth, (usuarioFirebase)=>{
        if(usuarioFirebase){
            setUsuario(usuarioFirebase)
        }else{
            setUsuario(null)
        }
    })

    if (usuario!=null){
        return <Navigate to="/inventario" />
    }

    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const pass = e.target.password.value;

        try{
            await signInWithEmailAndPassword(auth, correo, pass)
            console.log("Inicio de sesion correcto")
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
                <input type="text" placeholder="Usuario" id='email' className='mb-2 form-control'/>
                <input type="password" placeholder="Contraseña" id='password' className='form-control mb-3' autoComplete='off'/>
                
                <button className='btn btn-primary w-100'>
                    Inicia sesion
                </button>
            </form>
        </div>

    )
}


export default Login;