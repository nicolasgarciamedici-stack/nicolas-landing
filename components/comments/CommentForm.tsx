import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { client } from "lib/services/client"

const CommentForm = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [parent] = useAutoAnimate(/* optional config */)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data) => {
    toast.promise(
      client.create({
        _type: "comentarios",
        ...data,
      }),
      {
        loading: "Enviando comentario...",
        success: "¡Gracias por tu comentario! Lo revisaremos y lo publicaremos pronto.",
        error: "Hubo un error al enviar tu comentario",
      }
    )
  }

  const isDisabled = watch("comment") === "" || watch("name") === "" || watch("lastName") === ""
  console.log(isFocused)

  return (
    <form className="mb-16" ref={parent} onSubmit={handleSubmit(onSubmit)} onFocus={() => setIsFocused(true)}>
      {/* name and lastname */}
      <div className="mb-2 grid grid-cols-2 gap-4">
        <div
          className={`mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 focus:border-primary-500 dark:border-gray-700 
            dark:bg-gray-800
          `}
        >
          {" "}
          <label htmlFor="name" className="sr-only">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder="Nombre"
            required
            {...register("name", { required: true })}
          />
        </div>
        <div
          className={`mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 focus:border-primary-500 dark:border-gray-700 
          dark:bg-gray-800
        `}
        >
          {" "}
          <label htmlFor="lastname" className="sr-only">
            Apellido
          </label>
          <input
            type="text"
            id="lastname"
            className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder="Apellido"
            required
            {...register("lastName", { required: true })}
          />
        </div>
      </div>
      <div
        className={`mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 focus:border-primary-500 dark:border-gray-700 
          dark:bg-gray-800
        `}
      >
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows="6"
          className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          placeholder="Escribe tu comentario..."
          required
          {...register("comment", { required: true })}
        ></textarea>
      </div>
      {isFocused && (
        <button
          type="submit"
          className={`w-40 items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-primary-800 disabled:opacity-70 peer-focus:bg-red-500 dark:focus:ring-primary-900`}
          disabled={isDisabled || isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar comentario"}
        </button>
      )}
    </form>
  )
}

export default CommentForm
