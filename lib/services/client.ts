import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2023-03-22",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

// const builder = imageUrlBuilder(client);

// export const urlFor = (source: string) => builder.image(source);

export const createUserInSanity = async (email) => {
  try {
    await client.create({
      _type: "usuarios",
      email,
      authorized: false,
    })
  } catch (error) {
    console.error(error)
  }
}

export const checkUserInSanity = async (email) => {
  try {
    const query = `*[email == "${email}"]`
    const [user] = await client.fetch(query)

    if (user) {
      return user.authorized
    }

    throw new Error("Usuario o contraseña incorrectos")
  } catch (error) {
    throw new Error(error.message)
  }
}

// Function to fetch all documents of a given type
export async function fetchComments() {
  // fetch paginated comments
  const query = `*[_type == "comments" | [0..9]]`
  const comments = await client.fetch(query)
  return comments
}

// // example of how to use fetchdocumentbyslug
// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const post = await fetchDocumentBySlug('post', slug);
//   return {
//     props: { post },
//   };
// }
