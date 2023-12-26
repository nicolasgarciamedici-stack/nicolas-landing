import { useState } from "react"
import { useSanitySWR } from "lib/hooks/useSanitySWR"
import CommentForm from "./CommentForm"
import RatingComment from "./RatingComment"
import RatingCount from "./RatingCount"

const Comments = () => {
  const [pageSize, setPageSize] = useState(4)
  const [lastId, setLastId] = useState(null)

  const query = '*[_type == "comentarios" && approved == true] | order(created_at desc)'

  const { data, error, isLoading } = useSanitySWR(query, { lastId })

  const onShowMoreComments = () => {
    setPageSize(pageSize + 10)
  }

  async function fetchNextPage() {
    console.log("elias")
    if (data.length > 0) {
      setLastId(data[data.length - 1]._id)
    } else {
      setLastId(null)
    }
  }

  console.log(lastId, data)

  console.log(data, error, isLoading)
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="pb-4">
          <RatingCount reviews={data} />
        </div>
        <CommentForm />
        <div className="mb-10 flex items-center justify-between">
          <section className="w-full space-y-10">
            {data?.length === 0 ? (
              <div className="text-center ">
                <p className="text-gray-400 dark:text-gray-400">No hay comentarios aún</p>
              </div>
            ) : (
              data?.map((comment, index) => <RatingComment comment={comment} key={index} />)
            )}
          </section>
        </div>

        <div className="mt-10">
          {/* <button
            className="mt-10 rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
            onClick={onShowMoreComments}
          >
            Ver más comentarios
          </button> */}
          {/* <PaginationButtons page={1} totalPages={5} handlePageChange={fetchNextPage} /> */}
        </div>
      </div>
    </section>
  )
}

export default Comments
