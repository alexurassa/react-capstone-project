import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AssemblyEndgameApp from './AssemblyEndgameApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AssemblyEndgameApp />
  </StrictMode>,
)
