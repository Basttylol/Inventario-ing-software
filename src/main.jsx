import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./index.css"

import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const auth = getAuth(appFirebase)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App/>
)
