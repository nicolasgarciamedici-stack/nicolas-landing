import Image from "next/image"
import Layout from "components/layout/Layout"

// const workshops = [
//   {
//     title: "Online Workshop",
//     description: "Join our online workshop and learn amazing skills from industry experts.",
//     image: "https://luciaboffo.com/wp-content/uploads/2021/11/Tomas-Fares-the-Sindicalistas-Templanza.jpeg",
//     link: "https://www.google.com",
//   },
//   {
//     title: "Online Workshop",
//     description: "Join our online workshop and learn amazing skills from industry experts.",
//     image: "https://luciaboffo.com/wp-content/uploads/2021/11/Tomas-Fares-the-Sindicalistas-Templanza.jpeg",
//     link: "https://www.google.com",
//   },
//   {
//     title: "Online Workshop",
//     description: "Join our online workshop and learn amazing skills from industry experts.",
//     image: "https://luciaboffo.com/wp-content/uploads/2021/11/Tomas-Fares-the-Sindicalistas-Templanza.jpeg",
//     link: "https://www.google.com",
//   },
// ]

const Workshops = () => {
  return (
    <Layout>
      <section className="bg-gray-100 dark:bg-gray-900">
        <Image
          src="/images/workshops/carousel-1.jpeg"
          alt="Next.js Enterprise Boilerplate"
          width={1920}
          height={1080}
        />
        <div className="mx-auto grid px-4 py-8 text-center lg:py-16">
          <div className="mx-auto">
            <h1 className="relative mb-10 font-times text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white md:text-5xl xl:text-5xl">
              Talleres
              <span className="absolute bottom-0 left-0 h-1 w-full">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="mx-1 inline-block h-2 w-2 rounded-full bg-gray-900"></span>
                ))}
              </span>
            </h1>

            {/* <div className="flex space-x-8">
              {workshops.map((workshop, index) => (
                <WorkshopSection key={index} workshop={workshop} />
              ))}
            </div> */}

            {/* <section className="bg-gray-100 py-12">
              <div className="container mx-auto">
                <h2 className="text-center text-3xl font-semibold text-gray-800">Workshops</h2>
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  {workshops.map((workshop, index) => (
                    <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                      <h3 className="mb-2 text-xl font-semibold">{workshop.title}</h3>
                      <p className="mb-4 text-gray-600">{workshop.description}</p>
                      <a
                        href={workshop.link}
                        className="inline-block rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section> */}

            {/* <section className="mt-24 bg-gray-100">
              <div className="container mx-auto">
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                  {workshops.map((workshop, index) => (
                    <div
                      key={index}
                      className="relative transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative">
                        <img src={workshop.image} alt={workshop.title} className="h-56 w-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 animate-bounce rounded-full bg-blue-500 p-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="mb-2 text-xl font-semibold">{workshop.title}</h3>
                        <p className="mb-4 text-gray-600">{workshop.description}</p>
                        <a
                          href={workshop.link}
                          className="inline-block rounded-full bg-blue-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section> */}

            <section className="mt-10 rounded-lg bg-gray-100 px-10 py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
                  <a
                    href="https://taller-nicolas.vercel.app/"
                    className="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className=" max-w-md border-b border-black bg-white p-8 shadow-md">
                      <Image
                        src="/images/workshops/taller-1.png"
                        alt="Workshop 1"
                        width={500}
                        height={500}
                        className="mb-6 rounded-lg bg-white"
                      />
                      {/* line to separate */}
                      <div className="mb-6 border-b border-black"></div>
                      <h3 className="mb-4 font-times text-2xl font-bold text-gray-900">Taller de Composición</h3>
                      <p className="mb-4 text-gray-600">
                        Este taller es un punto de partida que intenta sistematizar un modo de abordar la tarea
                        creativa.
                      </p>
                      <a
                        href="https://taller-nicolas.vercel.app/"
                        className="font-semibold text-gray-900 underline transition-colors duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ir al taller
                      </a>
                    </div>
                  </a>
                  {/* <div className="rounded-lg bg-white p-8 shadow-md">
                    <img
                      src="https://luciaboffo.com/wp-content/uploads/2021/11/Tomas-Fares-the-Sindicalistas-Templanza.jpeg"
                      alt="Workshop 2"
                      className="mb-6 rounded-lg"
                    />
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Workshop Title 2</h3>
                    <p className="mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor tortor vitae tortor auctor,
                      ut interdum urna tincidunt.
                    </p>
                    <a
                      href="#"
                      className="font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="rounded-lg bg-white p-8 shadow-md">
                    <img
                      src="https://luciaboffo.com/wp-content/uploads/2021/11/Tomas-Fares-the-Sindicalistas-Templanza.jpeg"
                      alt="Workshop 3"
                      className="mb-6 rounded-lg"
                    />
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Workshop Title 3</h3>
                    <p className="mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor tortor vitae tortor auctor,
                      ut interdum urna tincidunt.
                    </p>
                    <a
                      href="#"
                      className="font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800"
                    >
                      Learn More
                    </a>
                  </div> */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Workshops
