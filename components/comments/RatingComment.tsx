import getCapitalize from "lib/utils/getCapitlize"
import getTimeAgo from "lib/utils/getTimeAgo"
import { useState } from "react"

const RatingComment = ({ comment }) => {
  const [showFullComment, setShowFullComment] = useState(false)

  const maxLength = 200
  const truncatedComment = comment.comment.slice(0, maxLength)
  const remainingComment = comment.comment.slice(maxLength)

  const toggleShowFullComment = () => {
    setShowFullComment(!showFullComment)
  }

  return (
    <article className="space-y-2 border-b border-gray-200 bg-white pb-2 dark:bg-gray-800">
      <div className="flex items-center">
        {/* <img
          className="me-4 h-10 w-10 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
          alt=""
        /> */}
        <div className="text-sm font-medium dark:text-white">
          <p>
            {getCapitalize(comment.name)} {getCapitalize(comment.lastName)}
            <time datetime="2014-08-16 19:00" className="block text-xs text-gray-500 dark:text-gray-400">
              {getTimeAgo(comment._createdAt)}
            </time>
          </p>
        </div>
      </div>
      {/* <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time>
        </p>
      </footer> */}
      {showFullComment ? (
        <>
          <p className="mb-2 text-sm text-gray-800 dark:text-gray-400">
            {/* This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the
        first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower
      with it to test the waterproofing.... No problems. */}
            {comment.comment}
          </p>
          <button
            className="mb-5 block text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            onClick={toggleShowFullComment}
          >
            Leer menos
          </button>
        </>
      ) : (
        <>
          <p className="mb-2 text-sm text-gray-800 dark:text-gray-400">{truncatedComment + "..."}</p>
          {comment.comment.length > maxLength && (
            <button
              className="mb-5 block text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              onClick={toggleShowFullComment}
            >
              Leer más
            </button>
          )}
        </>
      )}
      {/* <p className="mb-3 text-gray-500 dark:text-gray-400">
        It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën
        to a Ferrari. This watch was well under £100! An absolute bargain.
      </p> */}
      {/* {comment.comment.length > 200 && (

      )} */}
      {/* <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div className="mt-3 flex items-center">
          <a
            href="#"
            className="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Helpful
          </a>
          <a
            href="#"
            className="ms-4 border-s border-gray-200 ps-4 text-sm font-medium text-blue-600 hover:underline dark:border-gray-600 dark:text-blue-500 md:mb-0"
          >
            Report abuse
          </a>
        </div>
      </aside> */}
    </article>
  )
}

export default RatingComment
