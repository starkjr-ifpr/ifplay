type SongCardProps = {
  title: string
  artist: string
}

export function SongCard({ title, artist }: SongCardProps) {
  return (
    <article className="flex min-h-64 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <div className="flex size-12 items-center justify-center rounded-xl bg-violet-100 text-2xl" aria-hidden="true">
          🎵
        </div>
        <h2 className="mt-5 text-xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-slate-600">{artist}</p>
      </div>
      <button
        type="button"
        className="mt-6 w-full rounded-lg bg-violet-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
      >
        Votar
      </button>
    </article>
  )
}
