import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Firebase } from './components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Firebase />
    <App />
  </React.StrictMode>
)
