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
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/bio/carousel-1.jpg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/bio/carousel-2.jpg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/bio/carousel-3.jpg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/bio/carousel-4.jpg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/bio/carousel-5.jpeg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </Carousel>

        {/* <Image src="/images/hero-2.png" alt="Next.js Enterprise Boilerplate" width={1920} height={1080} /> */}
        <div className="mx-auto grid px-4 py-8 text-center lg:py-16">
          <div>
            <h1 className="relative mb-10 font-times text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white md:text-5xl xl:text-5xl">
              Biografía
              <span className="absolute bottom-0 left-0 h-1 w-full">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="mx-1 inline-block h-2 w-2 rounded-full bg-gray-900"></span>
                ))}
              </span>
            </h1>

            <div className="mt-20 flex items-center justify-evenly">
              <div>
                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Nicolas García Médici es músico compositor, productor, multi-instrumentista y docente oriundo de la Ciudad de Buenos Aires, Argentina, donde inició sus estudios a temprana edad y se ha desarrollado profesionalmente.</p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Egresado del conservatorio superior de música &ldquo;Manuel de Falla&rdquo; (profesorado de artes - especialidad saxofón) profundizó sus estudios sobre el lenguaje y análisis musical con Maria del Carmen Aguilar.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Se formó con grandes músicos como: Guillermo Kelin, Diego Schissi, Juan “Pollo” Raffo, Marcelo Katz, Roque de Pedro, Nora Sarmoria, etc.
                </p>
              </div>

              <div className="ml-20">
                <Image src="/images/bio/guitar.png" alt="foto" width={200} height={200} className="rounded-lg" />
              </div>
            </div>

            <div className="mt-20 flex items-center justify-evenly">
              <div className="mr-20">
                <Image src="/images/bio/recorder.png" alt="foto" width={300} height={300} className="rounded-lg" />
              </div>

              <div>
                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  La inquietud y vocación por desarrollar un lenguaje propio y original lo llevaron a liderar proyectos como Kai d` Raíz y Lotus.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Kai d` Raíz lleva 11 años de trayectoria, editó 4 trabajos discográficos y brindó conciertos y masterclasses en Uruguay, Chile y Argentina.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Lotus cuenta con dos Live Sessions y un trabajo discográfico.
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Trabajó 11 años como docente de Lenguaje Musical y Saxofón en el Proyecto de Orquestas infanto-juveniles de la Ciudad de Buenos Aires y  la misma cantidad de años dando clases de ensamble y composición en el Colegio de la Ciudad.{" "}
                </p>

                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Hace 5 años desarrolla su propio Taller de Composición donde han pasado más de 30 personas.
                </p>
                
                <p className="mb-6 max-w-2xl font-light text-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Actualmente se encuentra radicado en Madrid (España) donde continúa desarrollando su carrera profesional como músico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
