import type { ReactNode } from "react"
import foto from "../assets/Perfil2.png"
import cv from "../assets/HDV Act.pdf"

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function StatusDot() {
  return (
    <span
      className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#00c9ff] animate-[status-dot-glow_2s_ease-in-out_infinite]"
      aria-hidden
    />
  )
}

function PillBadge({
  children,
  showDot,
  className = "",
}: {
  children: ReactNode
  showDot?: boolean
  className?: string
}) {
  return (
    <div
      className={`inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-zinc-500/50 bg-transparent px-3.5 py-1.5 text-sm text-white/85 backdrop-blur-sm ${className}`}
    >
      {showDot ? <StatusDot /> : null}
      {children}
    </div>
  )
}

function IconGmail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.123 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#00c9ff]/45 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  )
}

export default function Perfil() {
  return (
    <section
      id="inicio"
      className="flex min-h-[min(100dvh,900px)] flex-col items-center justify-center gap-10 py-10 sm:gap-12 sm:py-12 md:min-h-[calc(100dvh-6rem)] md:flex-row md:justify-between md:gap-16 md:py-16"
    >
      <div className="w-full min-w-0 max-w-xl flex-1 text-center md:text-left">
        <div className="mb-4 mt-[-12px] flex justify-center sm:mb-5 sm:mt-[-20px] md:justify-start">
          <PillBadge showDot className="max-w-full text-xs sm:text-sm">
            Disponible para nuevos proyectos
          </PillBadge>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white/95 sm:text-5xl md:text-6xl lg:text-7xl">
          Hola soy{" "}
          <span className="bg-gradient-to-r from-[#bb82ff] to-[#1bc3ff] bg-clip-text text-transparent">
            Yhoan Mateo
          </span>
        </h1>
        <p className="mt-5 text-pretty text-base leading-relaxed text-white/65 md:text-lg">
          Desarrollador web full-stack y diseñador UX desde Bogotá, Colombia. Construyo productos digitales rápidos, accesibles y bonitos.  
        </p>
        <div className="mt-8 flex w-full min-w-0 flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#bb82ff] to-[#1bc3ff] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Ver proyectos
            <ArrowRightIcon className="h-4 w-4 shrink-0" />
          </a>
          <a
            href={cv}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
            download="Curriculum"
          >
            Descargar CV
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-3 md:justify-start">
          <SocialIconLink href="mailto:yhoanmoreno8@gmail.com" label="Gmail">
            <IconGmail className="h-5 w-5" />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/Yhoan008" label="GitHub">
            <IconGitHub className="h-5 w-5" />
          </SocialIconLink>
          <SocialIconLink href="https://wa.me/573222561871" label="WhatsApp">
            <IconWhatsApp className="h-5 w-5" />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.linkedin.com/in/yhoan-mateo-moreno-35100a224/"
            label="LinkedIn"
          >
            <IconLinkedIn className="h-5 w-5" />
          </SocialIconLink>
        </div>
      </div>

      <div className="flex w-full shrink-0 justify-center md:w-auto md:justify-end">
        <div className="relative inline-block max-w-full">
          <div className="animate-[float-y_4s_ease-in-out_infinite]">
            <div className="flex h-56 w-56 max-w-[min(100%,18rem)] items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-white/10 to-white/5 text-sm text-white/40 ring-2 ring-white/10 ring-offset-2 ring-offset-[#10112d] sm:h-64 sm:w-64 sm:ring-offset-4 md:h-72 md:w-72 md:max-w-none">
              <img
                src={foto}
                alt="Yhoan Mateo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 z-10 max-w-[calc(100%-0.5rem)] sm:bottom-1 sm:left-1 md:bottom-2 md:left-2">
            <PillBadge showDot className="text-[11px] sm:text-xs md:text-sm">
              24 años - Bogota
            </PillBadge>
          </div>
        </div>
      </div>
    </section>
  )
}
