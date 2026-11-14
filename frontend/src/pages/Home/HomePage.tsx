
export function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="w-full max-w-xl">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          IF<span className="text-violet-600">Play</span>
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Sistema de votação musical
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-800">
          Escolha a próxima música do intervalo.
        </h2>

        <p className="mt-3 text-slate-500">
          Participe da votação ou sugira uma música para tocar.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-700"
          >
            Participar da votação
          </button>

          <button
            type="button"
            className="rounded-lg border border-violet-600 bg-white px-6 py-3 font-medium text-violet-600 transition-colors hover:bg-violet-50"
          >
            Sugerir música
          </button>
        </div>
      </div>
    </main>
  )
}
