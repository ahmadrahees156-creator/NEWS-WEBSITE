import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': API_KEY
  }
})

export const getTopHeadlines = async () => {
  const response = await newsApi.get('/top-headlines', {
    params: {
      country: 'us',
      pageSize: 20
    }
  })

  return response.data.articles
}