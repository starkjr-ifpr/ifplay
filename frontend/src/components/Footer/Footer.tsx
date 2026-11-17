export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-900 px-6 py-6 text-center text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-xl font-bold tracking-tight">
          IF<span className="text-violet-400">Play</span>
        </p>

        <p className="text-sm text-slate-300">
          Projeto acadêmico
        </p>

        <p className="text-sm text-slate-400">
          © 2026 IFPlay
        </p>
      </div>
    </footer>
  );
}