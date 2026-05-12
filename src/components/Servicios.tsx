function IconCode({ className }: { className?: string }) {
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
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
      <path d="M14 4l-4 16" />
    </svg>
  )
}

function IconPen({ className }: { className?: string }) {
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
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  )
}

function IconChart({ className }: { className?: string }) {
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
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 4 4 6-7" />
    </svg>
  )
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-md transition hover:border-white/15 hover:bg-white/6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#00c9ff]">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white/90 sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-white/65 sm:text-base">
        {description}
      </p>
    </div>
  )
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <p className="mb-3 text-sm font-medium tracking-wide text-[#00c9ff]">
        // Servicios
      </p>

      <div className="mb-10 max-w-3xl">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          Lo que hago mejor
        </h2>
        <p className="mt-3 text-pretty text-white/65">
          Tres áreas donde aporto más valor: construir, diseñar y medir.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        <ServiceCard
          title="Desarrollo web"
          description="Construyo interfaces modernas y rápidas con enfoque en rendimiento, accesibilidad y escalabilidad."
          icon={<IconCode className="h-6 w-6" />}
        />
        <ServiceCard
          title="Diseño UI/UX e investigación de mercados"
          description="Diseño experiencias claras, alineadas a objetivos, y valido decisiones con investigación y evidencia."
          icon={<IconPen className="h-6 w-6" />}
        />
        <ServiceCard
          title="Análisis de datos"
          description="Transformo datos en métricas accionables, automatizo reportes y apoyo la toma de decisiones."
          icon={<IconChart className="h-6 w-6" />}
        />
      </div>
    </section>
  )
}