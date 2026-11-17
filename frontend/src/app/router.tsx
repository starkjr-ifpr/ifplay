import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { PublicLayout } from '../layouts/PublicLayout'
import { VotingPage } from '../pages/Voting/VotingPage'
import { SuggestSongPage } from '../pages/SuggestSong/SuggestSongPage'
import { ResultsPage } from '../pages/Results/ResultsPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/votacao" element={<VotingPage />} />
          <Route path="/sugerir-musica" element={<SuggestSongPage />} />
          <Route path="/resultados/:id" element={<ResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
