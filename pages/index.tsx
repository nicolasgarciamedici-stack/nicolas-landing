import Image from "next/image"
import Carousel from "react-multi-carousel"

import Layout from "components/layout/Layout"

export default function Web() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    // },
  }

  return (
    <Layout>
      <section className="z-10 bg-gray-100 dark:bg-gray-900">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={6000}
          centerMode={false}
          className="z-0 min-w-full"
          containerClass="container"
          dotListClass=""
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          autoPlay
        >
          <Image
            src="/images/bio/carousel-1.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/bio/carousel-2.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/bio/carousel-3.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/bio/carousel-4.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/bio/carousel-5.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </Carousel>

        {/* <Image src="/images/hero-2.png" alt="Next.js Enterprise Boilerplate" width={1920} height={1080} /> */}
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
                  Egresado del conservatorio superior de música &quot;Manuel de Falla&quot; (profesorado de artes -
                  especialidad saxofón) profundizó sus estudios sobre el lenguaje musical en el Curso de Lecto-escritura
                  de Maria del Carmen Aguilar.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Se formó con grandes músicos de la escena local tales como: Guillermo Kelin, Diego Schissi, Juan
                  “Pollo” Raffo, Marcelo Katz, Nora Sarmoria, Luis Nacht y Rodrigo Dominguez.
                </p>
              </div>

              <div className="ml-20">
                <Image src="/images/bio/self.jpeg" alt="foto" width={500} height={500} className="rounded-lg" />
              </div>
            </div>

            <div className="mt-20 flex items-center">
              <div className="mr-20">
                <Image src="/images/bio/self-2.jpeg" alt="foto" width={500} height={500} className="rounded-lg" />
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
