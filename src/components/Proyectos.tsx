type Project = {
  title: string
  description: string
  tags: string[]
  hrefDemo?: string
  hrefCode?: string
}

const PROJECTS: Project[] = [
  {
    title: "Proyecto 01",
    description:
      "Descripción corta del proyecto. Qué problema resuelve, qué hiciste y el resultado.",
    tags: ["React", "Tailwind", "Node.js"],
    hrefDemo: "#",
    hrefCode: "#",
  },
  {
    title: "Proyecto 02",
    description:
      "Descripción corta del proyecto. Enfócate en impacto, features clave y tech stack.",
    tags: ["TypeScript", "UI/UX", "API"],
    hrefDemo: "#",
    hrefCode: "#",
  },
  {
    title: "Proyecto 03",
    description:
      "Descripción corta del proyecto. Puedes mencionar métricas o mejoras de performance.",
    tags: ["SQL", "Dashboards", "Automation"],
    hrefDemo: "#",
    hrefCode: "#",
  },
]

function ArrowUpRight({ className }: { className?: string }) {
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
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/4 backdrop-blur-md transition hover:border-white/15 hover:bg-white/6">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#10112d]">
        {/* Placeholder: reemplaza por imagen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,201,255,0.25),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(231,58,194,0.20),transparent_55%)]" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/5" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white/90">{project.title}</h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-white/65">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={project.hrefDemo ?? "#"}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#bb82ff] to-[#1bc3ff] px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Ver demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.hrefCode ?? "#"}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Código
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 md:py-24">
      <p className="mb-3 text-sm font-medium tracking-wide text-[#00c9ff]">
        // Proyectos
      </p>

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Proyectos destacados
          </h2>
          <p className="mt-3 text-pretty text-white/65">
            Una selección de trabajos recientes. Cambia títulos, links, tags e
            imágenes cuando quieras.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition hover:border-white/25 hover:bg-white/10"
        >
          Ver todos
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}