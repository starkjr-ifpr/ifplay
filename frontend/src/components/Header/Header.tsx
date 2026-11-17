
import { NavLink } from "react-router-dom";

export function Header() {
  const links = [
    { label: "Início", to: "/" },
    { label: "Votação", to: "/votacao" },
    { label: "Sugerir música", to: "/sugerir-musica" },
  ];

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row">
        <NavLink
          to="/"
          className="text-2xl font-bold text-slate-900"
        >
          IF<span className="text-violet-600">Play</span>
        </NavLink>

        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-violet-100 text-violet-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-violet-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
