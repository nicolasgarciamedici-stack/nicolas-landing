const RatingCount = ({ reviews }: { reviews: any }) => {
  return (
    <div className="mb-6 flex items-center justify-center">
      {/* <svg
        className="me-1 h-6 w-6 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg> */}
      {/* <p className="ms-2 text-lg font-bold text-gray-900 dark:text-white">4.95 calificación promedio</p> */}
      <h3 className="ms-2 font-times text-2xl font-bold text-gray-900">Comentarios ({reviews?.length})</h3>

      {/* <p className="ms-2 text-2xl font-bold text-gray-900 dark:text-white">Comentarios </p> */}
      {/* <span className="mx-1.5 h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-400"></span> */}
      {/* <a href="#" className="text-lg font-medium text-gray-900 underline hover:no-underline dark:text-white">
        73 reseñas
      </a> */}
    </div>
  )
}

export default RatingCount
