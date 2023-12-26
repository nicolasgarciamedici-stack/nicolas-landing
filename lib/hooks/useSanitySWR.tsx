import useSWR from "swr"
import { client } from "lib/services/client"

export const useSanitySWR = (query: any, params?: any) => {
  const fetcher = (url: any) => {
    if (params) {
      return client.fetch(url, params)
    }
    return client.fetch(url)
  }
  const { data, error } = useSWR(query, fetcher)

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}
