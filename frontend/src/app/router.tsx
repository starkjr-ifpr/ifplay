import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { HomePage } from '../pages/Home/HomePage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
