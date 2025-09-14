import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MealMeter from './pages/MealMeter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MealMeter />
  </StrictMode>,
)
