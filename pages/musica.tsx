import Image from "next/image"
import { AiOutlineArrowDown } from "react-icons/ai"
import { SlSocialInstagram, SlSocialSpotify } from "react-icons/sl"
import Carousel from "react-multi-carousel"

import Layout from "components/layout/Layout"

const Music = () => {
  return (
    <Layout>
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
          <Image
            src="/images/music/carousel-1.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/music/carousel-2.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/music/carousel-3.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/music/carousel-4.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/music/carousel-5.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/music/carousel-6.jpeg"
            alt="Next.js Enterprise Boilerplate"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </Carousel>

        <div className="mx-auto grid w-full px-4 py-8 text-center lg:py-16">
          <h1 className="relative mb-10 font-times text-5xl font-bold text-gray-800">
            Música
            <span className="absolute bottom-0 left-0 h-1 w-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="mx-1 inline-block h-2 w-2 rounded-full bg-gray-900"></span>
              ))}
            </span>
          </h1>

          <section className="mt-16">
            <div>
              <h2 className="mb-12 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
                LOTUS
              </h2>

              <div className="mx-auto flex w-4/5 items-center justify-center space-x-4">
                <div className="w-1/3 flex-none">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/zJzc5EWWmmQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 1"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>

                <div className="w-1/3 flex-none">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/hpcmye7jq7E?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 2"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>

                <div className="w-1/3 flex-none">
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

            <div className="mt-20">
              <h2 className="mb-12 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
                Kai d&apos; Raiz
              </h2>

              <div className="mx-auto flex w-4/5 items-center justify-center space-x-4">
                <div className="w-1/3 flex-none">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/AzdHHKAlyew?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 1"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>

                <div className="w-1/3 flex-none">
                  <iframe
                    className="w-full rounded-md"
                    width="560"
                    height="215"
                    src="https://www.youtube.com/embed/enb_pUGQ-x0?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fluciaboffo.com&widgetid=1"
                    title="Video 2"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>

                <div className="w-1/3 flex-none">
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
          </section>

          <section className="mt-16">
            <h2 className="mb-12 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
              Discografía
            </h2>

            <div className="flex justify-center">
              <div className="grid max-w-6xl grid-cols-2 gap-x-8 gap-y-24">
                {Array.from({ length: 1 }).map((_, i) => (
                  <div className="text-center" key={i}>
                    <a
                      href="https://open.spotify.com/album/1dLeYFmkFeigEPzfWYt66J"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="https://i.scdn.co/image/ab67616d00001e027fd28f858df306e0da14e136"
                        loader={({ src }) => src}
                        alt="Disco 1"
                        className="mb-8 w-72 rounded-lg transition-transform duration-300 hover:scale-105"
                        width={500}
                        height={500}
                      />
                      <p className="font-bold text-gray-900 dark:text-white">Lotus</p>
                    </a>
                  </div>
                ))}

                <div className="text-center">
                  <a
                    href="https://open.spotify.com/artist/4yH5AmComSWr7GZ3aAurgQ?si=kmKV5THATjusYmp-BAVicw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://i.scdn.co/image/ab6761610000517474c52346520cc8ec74a3dfbb"
                      loader={({ src }) => src}
                      alt="Disco 1"
                      className="mb-8 w-72 rounded-lg transition-transform duration-300 hover:scale-105"
                      width={500}
                      height={500}
                    />
                    <p className="font-bold text-gray-900 dark:text-white">Kai d&apos; Raiz</p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
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
                href="https://www.instagram.com/nicolasgarciamedici/"
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
            <h2 className="mb-8 font-times text-2xl font-light leading-none tracking-tight dark:text-white md:text-3xl xl:text-3xl">
              Videos
            </h2>
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
