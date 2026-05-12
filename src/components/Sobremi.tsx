const SKILLS: { name: string; percent: number }[] = [
  { name: "React", percent: 88 },
  { name: "Tailwind CSS", percent: 90 },
  { name: "JavaScript / TypeScript", percent: 87 },
  { name: "Node.js", percent: 86 },
  { name: "UX / UI Design", percent: 89 },
  { name: "Excel", percent: 88 },
  { name: "SQL", percent: 70 },
]

function SkillBar({ name, percent }: { name: string; percent: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm transition hover:border-white/15 hover:bg-white/6">
      <div className="flex min-w-0 items-baseline justify-between gap-2 sm:gap-3">
        <span className="min-w-0 flex-1 text-pretty text-xs font-medium leading-snug text-white/90 sm:text-sm">
          {name}
        </span>
        <span className="shrink-0 text-xs font-semibold tabular-nums text-[#00c9ff]">
          {percent}%
        </span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-linear-to-r from-[#bb82ff] to-[#1bc3ff] transition-[width] duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export default function Sobremi() {
  return (
    <section id="sobremi" className="py-16 md:py-24">
      <p className="mb-3 text-sm font-medium tracking-wide text-[#00c9ff]">
        // Sobre mí
      </p>

      <div className="mb-12 max-w-4xl">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="text-white">Diseño con propósito.</span>{" "}
          <span className="bg-linear-to-r from-[#bb82ff] to-[#1bc3ff] bg-clip-text text-transparent">
            Código con intención.
          </span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/4 p-6 text-pretty leading-relaxed text-white/70 backdrop-blur-md md:p-7">
          Como desarrollador Full-Stack, evolucioné de HTML/JS a crear
          aplicaciones robustas con React, Tailwind y Node.js. Domino tanto el
          diseño de interfaces de alto rendimiento como la arquitectura
          escalable con bases de datos NoSQL.
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/4 p-6 text-pretty leading-relaxed text-white/70 backdrop-blur-md md:p-7">
          A la vez, utilizo el análisis de datos y funciones avanzadas para
          transformar información en métricas estratégicas. Automatizo
          procesos y realizo auditorías basadas en evidencia, asegurando que
          cada decisión técnica optimice la eficiencia operativa y la
          experiencia del usuario.
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <SkillBar key={s.name} name={s.name} percent={s.percent} />
          ))}
        </div>
      </div>
    </section>
  )
}
