import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import Footer from '../components/Footer'

export function AppRouter() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}