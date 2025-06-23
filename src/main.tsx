import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/normalize.scss";
import "./styles/fonts.scss";
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
