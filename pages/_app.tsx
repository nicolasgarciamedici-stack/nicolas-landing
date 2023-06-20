import "../styles/tailwind.css"
import "react-multi-carousel/lib/styles.css"

import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
