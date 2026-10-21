import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">IFPlay</p>
        <h1 className="mt-5 text-7xl font-bold tracking-tight text-slate-900">404</h1>
        <p className="mt-4 text-lg font-semibold text-slate-800">Página não encontrada.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
        >
          Voltar para o início
        </Link>
      </section>
    </main>
  )
}
