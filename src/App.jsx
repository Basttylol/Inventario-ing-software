import { useState } from 'react'
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)
import {Login} from "./componentes/Login.jsx"
import {Home} from './componentes/Home'
import {Route} from 'react-router-dom'


export function App(){

    const [usuario, setUsuario] = useState(null)

    onAuthStateChanged(auth, (usuarioFirebase)=>{
        if(usuarioFirebase){
            setUsuario(usuarioFirebase)
        }else{
            setUsuario(null)
        }
    })




    return(
        <div>
            {usuario ? <Home/> : <Login/>} 
        </div>

    )
}



export default App