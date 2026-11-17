import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-slate-900">404</h1>
      <p className="mt-3 text-lg text-slate-600">Página não encontrada.</p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
      >
        Voltar para o início
      </Link>
    </main>
  )
}
