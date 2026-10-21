import { SongCard } from '../../components/SongCard'
import { VotingCard } from '../../components/VotingCard'

export function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">IFPlay</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Sistema de votação musical</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Participe da escolha das músicas que vão tocar no intervalo.
          </p>
        </header>

        <section aria-label="Votação atual e música" className="grid gap-6 md:grid-cols-2">
          <VotingCard songCount={10} votesPerStudent={3} status="Votação aberta" />
          <SongCard title="Evidências" artist="Chitãozinho & Xororó" />
        </section>
      </div>
    </main>
  )
}
