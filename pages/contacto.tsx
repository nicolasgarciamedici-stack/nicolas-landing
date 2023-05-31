import Image from "next/image"
import Layout from "components/layout/Layout"

const Contact = () => {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <Image src="/images/hero.jpeg" alt="Next.js Enterprise Boilerplate" width={1920} height={1080} />
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-8 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-5xl">
              Contacto
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Lucia Boffo es cantante, compositora, improvisadora, oriunda de la ciudad de Ushuaia, Tierra del Fuego,
              donde comenzó sus estudios y actividad profesional en la música. Continuó su formación en Buenos Aires, en
              la carrera de Canto Jazz en la EMPA (Escuela de Música Popular de Avellaneda). Posteriormente, formó parte
              del equipo docente de la EMPA durante 4 años, como profesora de Canto Jazz en el ciclo superior.
            </p>

            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Desde 2015 coordina Workshops de improvisación vocal en Argentina, Uruguay y hoy en día continua en
              distintos países de Europa. Se formó con músicos de la escena local e internacional, tales como: Juan Cruz
              de Urquiza, Elisa Viladesau, Marina Rama, Joey Blake, Roxana Amed, Christine Correa, Diego Schissi, Judy
              Niemack, Guillermo Klein, Michael Mayo.
            </p>

            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Participó de Festivales de Jazz a lo largo de Argentina, así como en Uruguay, Estados Unidos y Alemania.
              Algunos de los proyectos Argentinos en los que ha formado parte son: Dos Elefantes, MINGUNOS, HIP SISTA,
              Andrés Marino & Lucía Boffo, Juan Cruz De Urquiza TRIO + Lucia Boffo (Jazz), Plachta y la Cocina
              Magnética, Tomás Fares And the Sindicalistas, y Mujeres Improvisando.
            </p>

            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Desde 2019 reside en la ciudad de Berlín, Alemania y desde entonces ha participado en lo proyectos:
              Armando Carrillos Zanuy Septett, NANALU Music, Ramiro Zayas Grupo, Humboldt Big Band, Andres Marino &
              Lucia Boffo, ZAHIR Trio, Boffo & Sinesi Duo.
            </p>

            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Actualmente se encuentra produciendo su primer material discográfico solista titulado NOMADE, y continúa
              sus estudios en canto Jazz y composición en el Instituto de Jazz Berlín (JIB), en la Universidad de las
              Artes de Berlín (UDK).
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
