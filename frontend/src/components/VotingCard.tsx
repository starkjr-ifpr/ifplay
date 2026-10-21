type VotingCardProps = {
  songCount: number
  votesPerStudent: number
  status: string
}

export function VotingCard({ songCount, votesPerStudent, status }: VotingCardProps) {
  return (
    <article className="flex min-h-64 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Votação do intervalo</h2>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            {status}
          </span>
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-sm text-slate-600">Músicas</dt>
            <dd className="mt-1 text-2xl font-bold text-slate-900">{songCount}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-sm text-slate-600">Votos por aluno</dt>
            <dd className="mt-1 text-2xl font-bold text-slate-900">{votesPerStudent}</dd>
          </div>
        </dl>
      </div>
      <button
        type="button"
        className="mt-6 w-full rounded-lg bg-violet-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
      >
        Participar
      </button>
    </article>
  )
}
