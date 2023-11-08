import { useState } from 'react'

import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const auth = getAuth(appFirebase)

import {Login} from "./componentes/Login.jsx"
import { Home } from './componentes/Home'

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
            {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
        </div>

    )
}