import Head from "next/head"
import Image from "next/image"
import { AiOutlineArrowDown } from "react-icons/ai"
import { SlSocialInstagram, SlSocialSpotify } from "react-icons/sl"
import Carousel from "react-multi-carousel"

import Layout from "components/layout/Layout"
import discography from "lib/constants/discography"

const Music = () => {
  return (
    <Layout>
      <Head>
        <title>Música | Nicolas García Médici</title>
      </Head>
      <section className="bg-gray-100 dark:bg-gray-900">
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
          swipeable
          autoPlay
        >
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/music/carousel-1.jpeg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/music/carousel-2.jpeg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/music/carousel-3.jpeg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/music/carousel-4.jpeg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/music/carousel-5.jpeg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="relative h-48 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/images/music/carousel-6.jpeg"
              alt="Next.js Enterprise Boilerplate"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </Carousel>

        <div className="mx-auto grid w-full px-4 py-8 text-center lg:py-16">
          <h1 className="relative mb-10 font-times text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white md:text-5xl xl:text-5xl">
            Música
            <span className="absolute bottom-0 left-0 h-1 w-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="mx-1 inline-block h-2 w-2 rounded-full bg-gray-900"></span>
              ))}
            </span>
          </h1>

          <section className="mt-16">
            <div className="mt-20">
              <h2 className="mb-12 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
                Kai d&apos; Raiz
              </h2>

              <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-4">
                <div className="w-full flex-shrink-0 md:w-80">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/AzdHHKAlyew?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 1"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>

                <div className="w-full flex-shrink-0 md:w-80">
                  <iframe
                    className="w-full rounded-md"
                    width="600"
                    height="215"
                    src="https://www.youtube.com/embed/tDxq07wMXAc?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 4"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
                <div className="w-full flex-shrink-0 md:w-80">
                  <iframe
                    className="w-full rounded-md"
                    width="600"
                    height="215"
                    src="https://www.youtube.com/embed/n2-MO_GKmfY?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 5"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
                <div className="w-full flex-shrink-0 md:w-80">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/enb_pUGQ-x0?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 2"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
                <div className="w-full flex-shrink-0 md:w-80">
                  <iframe
                    className="w-full rounded-md"
                    width="600"
                    height="215"
                    src="https://www.youtube.com/embed/FwsOLdnm3xs?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 3"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="mb-12 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
                LOTUS
              </h2>

              <div className="mx-auto flex w-4/5 flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="flex-none md:w-1/3">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/zJzc5EWWmmQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 1"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>

                <div className="flex-none md:w-1/3">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/hpcmye7jq7E?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 2"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>

                <div className="flex-none md:w-1/3">
                  <iframe
                    className="w-full rounded-md"
                    width="600"
                    height="215"
                    src="https://www.youtube.com/embed/gmhFLAeIyVs?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 3"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-12 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
              Discografía
            </h2>

            {discography.map((disc, i) => (
              <div key={i} className="mb-20">
                <h3 className="mb-10 font-times text-xl font-light leading-none tracking-tight dark:text-white md:text-2xl xl:text-2xl">
                  {disc.name}
                </h3>
                <div className="flex justify-center">
                  <div className="flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-16">
                    {disc.disc.map((d, i) => (
                      <div className="text-center" key={i}>
                        <a href={d.link} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={d.image}
                            loader={({ src }) => src}
                            alt={d.name}
                            className="mb-8 w-72 rounded-lg transition-transform duration-300 hover:scale-105"
                            width={500}
                            height={500}
                          />
                        </a>
                        <p className="font-bold text-gray-900 dark:text-white">{d.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-16">
            <h2 className="mb-12 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
              Producciones
            </h2>
            <div className="mb-20">
              <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-center">
                <div className="text-center">
                  <a
                    href="https://open.spotify.com/intl-es/album/2o33TpjReP3HozXUrbjBvC?si=rH-RWLo7SLqsMfFnjyQxrw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://i.scdn.co/image/ab67616d00001e02c5f5fdab6694fea195f660cb"
                      loader={({ src }) => src}
                      alt="Desdoblar el bosque(Pt.2)"
                      className="mb-8 w-72 rounded-lg transition-transform duration-300 hover:scale-105"
                      width={500}
                      height={500}
                    />
                  </a>
                  <p className="mx-auto w-72 font-bold text-gray-900 dark:text-white">Desdoblar el bosque(Pt.2)</p>
                </div>
                <div className="text-center">
                  <a
                    href="https://open.spotify.com/intl-es/album/40c0Mu0OwRd7GVyjB8vQuL?si=Xo0YqeXATWmfkvCcNrs-Tg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://i.scdn.co/image/ab67616d00001e02195458bb9e320c8f1f36edb2"
                      loader={({ src }) => src}
                      alt="Mora Garcia Medici - Acostumbrarse no es rendirse"
                      className="mb-8 w-72 rounded-lg transition-transform duration-300 hover:scale-105"
                      width={500}
                      height={500}
                    />
                  </a>
                  <p className="mx-auto w-72 font-bold text-gray-900 dark:text-white">
                    Mora Garcia Medici - Acostumbrarse no es rendirse
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center justify-center">
                <div className="w-full flex-shrink-0 text-center md:w-80">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/S045AF-oPk8?start=1314"
                    title="Video 1"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                  <a
                    href="https://www.youtube.com/watch?v=S045AF-oPk8&t=1314s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mt-8 font-bold text-gray-900 hover:underline dark:text-white">
                      Mora Garcia Medici - Acostumbrarse no es rendirse
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-12 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
              Otros trabajos
            </h2>
            <div className="mb-20">
              <div className="mx-auto max-w-2xl">
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F32119384&show_artwork=true"
                  title="Nicolas Garcia Medici en SoundCloud"
                ></iframe>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-8 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
              Redes Sociales
            </h2>
            {/* social media icons */}
            <div className="flex justify-center space-x-4">
              <a
                href="https://open.spotify.com/artist/3VmYVB0IHYadXYQRsfQQQG?si=LvRNHSYfRv-VBC3l36Sh8Q&nd=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="transform rounded-full bg-gray-200 p-2 transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-500 dark:bg-gray-800">
                  <SlSocialSpotify className="h-6 w-6 text-gray-500 group-hover:text-white" />
                </div>
              </a>

              <a
                href="https://www.instagram.com/ngm.musica"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="transform rounded-full bg-gray-200 from-orange-500 via-pink-500 to-purple-800 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r dark:bg-gray-800">
                  <SlSocialInstagram className="h-6 w-6 text-gray-500 group-hover:text-white" />
                </div>
              </a>
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-col items-center">
              <p className="text-gray-500 dark:text-gray-400">Suscribite a mi canal de YouTube</p>
              <div className="mb-6 mt-8 flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-800">
                <AiOutlineArrowDown className="h-6 w-6 text-black" />
              </div>

              <div className="mb-16 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-8">
                <a href="https://www.youtube.com/@nicolasgarciamedici218" target="_blank" rel="noopener noreferrer">
                  <span className="video-thumb h-48 w-48 bg-red-500">
                    <span className="flex items-center justify-center">
                      <img
                        alt="lucia boffo"
                        aria-hidden="true"
                        data-ytimg="1"
                        height="64"
                        src="https://yt3.googleusercontent.com/ytc/AGIKgqMIdLwVzOMPeSaZ2u_cUnmJXQgW2MR-ioXwTCjVzw=s176-c-k-c0x00ffffff-no-rj"
                        width="64"
                        className="rounded-full"
                      />
                    </span>
                  </span>
                </a>

                <a
                  href="https://www.youtube.com/@nicolasgarciamedici218"
                  className="my-4 text-gray-900 underline dark:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nicolas García Médici
                </a>

                <a
                  className="rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  type="button"
                  href="https://www.youtube.com/@nicolasgarciamedici218?sub_confirmation=1&amp;feature=subscribe-embed-click"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="subscribe-label">Suscribirse</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default Music
