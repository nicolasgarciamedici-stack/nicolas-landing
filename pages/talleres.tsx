import Image from "next/image"
import Link from "next/link"
import { SiLinktree } from "react-icons/si"
import { SlSocialInstagram } from "react-icons/sl"

import Layout from "components/layout/Layout"
import Comments from "components/comments/Comments"

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
        <div className="relative h-48 w-full bg-white sm:h-80 md:h-[28rem] lg:h-[32rem]">
          <Image
            src="/images/workshops/carousel-1.jpg"
            alt="Next.js Enterprise Boilerplate"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="mx-auto grid px-4 py-8 text-center lg:py-16">
          <div className="mx-auto">
            <h1 className="relative mb-10 font-times text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white md:text-5xl xl:text-5xl">
              Taller
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
                  <Link href="https://taller.nicolasgarciamedici.com" target="_blank" rel="noreferrer" legacyBehavior>
                    <div className="max-w-md transform cursor-pointer border-b border-black bg-white p-8 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                      <video
                        className="w-full cursor-default"
                        controls
                        poster="/videos/presentacion-poster.jpg"
                        src="/videos/presentacion.mp4"
                        onClick={(e) => e.preventDefault()}
                      />
                      {/* line to separate */}
                      <div className="mb-6 border-b border-black"></div>
                      <h3 className="mb-4 font-times text-2xl font-bold text-gray-900">Taller de Composición</h3>
                      <p className="mb-4 text-gray-600">
                        Este taller es un punto de partida que intenta sistematizar un modo de abordar la tarea
                        creativa.
                      </p>
                      <a
                        href="https://taller.nicolasgarciamedici.com"
                        className="group flex w-full items-center justify-between rounded-full bg-gray-900 py-2 pl-6 pr-2 font-bold text-white transition-colors duration-300 hover:bg-gray-800"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ir al taller
                        <span
                          aria-hidden="true"
                          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    </div>
                  </Link>

                  <div className="flex justify-center space-x-4 md:col-span-2 lg:col-span-1">
                    <a
                      href="https://www.instagram.com/tallerdecomposicion.ngm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="transform rounded-full bg-gray-200 from-orange-500 via-pink-500 to-purple-800 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r dark:bg-gray-800">
                        <SlSocialInstagram className="h-6 w-6 text-gray-500 group-hover:text-white" />
                      </div>
                    </a>

                    <a
                      href="https://linktr.ee/nicolasgarciamedici"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="transform rounded-full bg-gray-200 p-2 transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-500 dark:bg-gray-800">
                        <SiLinktree className="h-6 w-6 text-gray-500 group-hover:text-white" />
                      </div>
                    </a>
                  </div>

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

      <Comments />
    </Layout>
  )
}

export default Workshops
