import Image from "next/image"
import Layout from "components/layout/Layout"

export default function Web() {
  return (
    <Layout>
      <section className="z-10 bg-gray-100 dark:bg-gray-900">
        <Image src="/images/hero-2.png" alt="Next.js Enterprise Boilerplate" width={1920} height={1080} />
        <div className="mx-auto grid px-4 py-8 text-center lg:py-16">
          <div className="mx-auto">
            <h1 className="relative mb-10 font-times text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white md:text-5xl xl:text-5xl">
              Biografía
              <span className="absolute bottom-0 left-0 h-1 w-full">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="mx-1 inline-block h-2 w-2 rounded-full bg-gray-900"></span>
                ))}
              </span>
            </h1>

            <div className="mt-20 flex items-center">
              <div>
                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Nicolas García Médici es músico compositor, productor, multi-instrumentista, docente oriundo de la
                  Ciudad de Buenos Aires, Argentina, donde inició sus estudios a temprana edad y se ha desarrollado
                  profesionalmente.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Egresado del conservatorio superior de música "Manuel de Falla" (profesorado de artes - especialidad
                  saxofón) profundizó sus estudios sobre el lenguaje musical en el Curso de Lecto-escritura de Maria del
                  Carmen Aguilar.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Se formó con grandes músicos de la escena local tales como: Guillermo Kelin, Diego Schissi, Juan
                  “Pollo” Raffo, Marcelo Katz, Nora Sarmoria, Luis Nacht y Rodrigo Dominguez.
                </p>
              </div>

              <div className="ml-20">
                <Image src="/images/self.jpeg" alt="foto" width={500} height={500} className="rounded-lg" />
              </div>
            </div>

            <div className="mt-20 flex items-center">
              <div className="mr-20">
                <Image src="/images/self2.jpeg" alt="foto" width={500} height={500} className="rounded-lg" />
              </div>

              <div>
                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  La inquietud y vocación por desarrollar un lenguaje propio y original lo llevaron a liderar proyectos
                  como Kai d` Raíz y Lotus.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Kai d` Raíz lleva 9 años de trayectoria, editó 3 trabajos discográficos y brindó conciertos y
                  masterclasses en Uruguay, Chile y Argentina.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Lotus editó su primer trabajo discografico en 2022 y tiene 2 sesiones en vivo.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Es docente de Lenguaje Musical desde hace más de 8 años en el Proyecto de Orquestas infanto-juveniles
                  de la Ciudad de Buenos Aires y lleva la misma cantidad de años dando clases de ensamble y composición
                  en el Colegio de la Ciudad.{" "}
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Actualmente participa en la producción de discos de artistas relevantes de la escena local. MORA,
                  OUANI, Solaz, Pablo Von Quintiero son algunos de esos exponentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
