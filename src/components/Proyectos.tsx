import fondo1 from "../assets/fondo1.png"
import fondo2 from "../assets/fondo2.png"


type Project = {
  title: string
  description: string
  tags: string[]
  hrefDemo?: string
  hrefCode?: string
  image?: string
}

const PROJECTS: Project[] = [
  {
    title: "Portafolio Profesional",
    description:
      "Primeras versiones de mi portafolio aplicando tecnologias como React, Tailwind y haciendo uso de tecnicas de diseño modernas para crear una experiencia visual atractiva y funcional.",
    tags: ["React", "Tailwind"],
    hrefDemo: "https://yhoan-dev.netlify.app/",
    hrefCode: "https://github.com/Yhoan008/resume",
    image: fondo1,
  },
  {
    title: "Nimbu, aprediendo idiomas",
    description:
      "Una pagina interactiva dedicada a mostrar y promover cursos de ingles, donde los estudiantes puede registrar e ingresar sus usuarios.",
    tags: ["React", "Tailwind", "Express","Node"],
    hrefDemo: "https://nimbuproyect.netlify.app/",
    hrefCode: "https://github.com/Yhoan008/NimbuFront",
    image: fondo2,
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
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
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
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#bb82ff] to-[#1bc3ff] px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Ver demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.hrefCode ?? "#"}
            target="_blank"
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
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}