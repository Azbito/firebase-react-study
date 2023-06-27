import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Management } from './pages/Management'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/management" element={<Management />} />
    </Routes>
  )
}