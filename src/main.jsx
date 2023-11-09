import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import appFirebase from './credenciales'
import {getAuth} from 'firebase/auth'

const auth = getAuth(appFirebase)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App/>
)
