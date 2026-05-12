import logo from "../assets/YhoanDev.png"
import { ArrowRightIcon } from "./Perfil"

const navLinks = [
  { href: "#sobremi", label: "Sobre mi" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
] as const

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-4 sm:top-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-3 backdrop-blur-xl sm:h-16 sm:gap-3 sm:px-5">
        <a
          href="#inicio"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
        >
          <img src={logo} alt="YhoanDev" className="h-4 sm:h-5" />
        </a>

        <nav
          className="hidden min-w-0 flex-1 justify-center gap-4 text-sm text-white/70 md:flex md:gap-6"
          aria-label="Principal"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className="whitespace-nowrap transition hover:text-white/90"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <details className="group relative md:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Abrir menú</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-48 rounded-2xl border border-white/10 bg-[#10112d]/95 py-2 shadow-lg backdrop-blur-xl">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  className="block px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  href={href}
                >
                  {label}
                </a>
              ))}
            </div>
          </details>

          <a
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-linear-to-r from-[#bb82ff] to-[#1bc3ff] px-3 py-2 text-xs font-medium text-black transition hover:scale-[1.02] active:scale-[0.98] sm:gap-2 sm:px-4 sm:text-sm md:hover:scale-110"
            href="#contacto"
          >
            Hablemos
            <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
