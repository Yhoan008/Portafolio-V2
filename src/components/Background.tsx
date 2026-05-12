export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#10112d]">
      {/* Blurry shapes — posiciones relativas al viewport para móvil */}
      <div className="absolute left-[-20%] top-[18%] h-[min(340px,55vw)] w-[min(340px,55vw)] max-w-[90vw] rounded-full bg-[#e73ac2]/90 blur-[100px] sm:left-[-10%] sm:top-[22%] sm:blur-[140px] md:left-[15%] md:top-[20%] md:h-[340px] md:w-[340px] md:blur-[200px] lg:left-[22%]" />
      <div className="absolute right-[-15%] top-16 h-[60px] w-[min(320px,85vw)] max-w-none bg-[#1bc3ff]/80 blur-[60px] sm:right-[5%] sm:top-20 sm:h-[80px] sm:blur-[80px] md:right-[12%] lg:right-[18%]" />
      <div className="absolute bottom-[-20%] left-1/2 h-[min(520px,90vw)] w-[min(520px,90vw)] max-w-[100vw] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-[80px] sm:bottom-[-18%] sm:blur-[100px] md:bottom-[-140px] md:blur-[120px]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_15%,transparent,rgba(7,8,21,0.92))]" />
    </div>
  )
}




// e73ac2
// 1bc3ff
// 10112d