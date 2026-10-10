export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-100 py-6 px-4 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">IFPlay</h3>
          <p className="text-sm text-slate-400">Projeto acadêmico</p>
        </div>
        <div className="text-sm text-slate-400">
          &copy; 2026 Stark Jr. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;