import Background from "./Background"
import Header from "./Header"
import Perfil from "./Perfil"
import Sobremi from "./Sobremi"
import Servicios from "./Servicios"
import Proyectos from "./Proyectos"
import Contacto from "./Contacto"
import Footer from "./Footer"

export default function Container() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden px-4 sm:px-6 lg:px-8">
      <Background />
      <Header />

      <main className="mx-auto w-full max-w-[1100px] pt-24 pb-12 sm:pt-28 sm:pb-16">
        <Perfil />
        <Sobremi />
        <Servicios />
        <Proyectos />
        <Contacto />
        <Footer />
      </main>


    </div>
  )
}