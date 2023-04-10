import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@global-styles/main.css'
import { Firebase } from './components'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Firebase />
    <h1 className='text-xl font-extrabold'>Everyone has the right to an effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.</h1>
  </StrictMode>
)
