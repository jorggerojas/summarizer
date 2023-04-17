import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@global-styles/main.css'
import { Firebase } from '@components/config'
import { Button } from '@components/base'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Firebase />
    <Button>Primary MD</Button>
    <Button size='small'>Primary SM</Button>
    <Button variant='secondary'>Secondary MD</Button>
    <Button variant='secondary' size='small'>Secondary SM</Button>
    <Button variant='tertiary'>Tertiary MD</Button>
    <Button variant='tertiary' size='small'>Tertiary SM</Button>
    <Button disabled>Disabled MD</Button>
    <Button disabled size='small'>Disabled SM</Button>
  </StrictMode>
)
