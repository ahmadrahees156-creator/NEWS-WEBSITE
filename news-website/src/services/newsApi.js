import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const newsApi = axios.create({
  baseURL: 'https://api.thenewsapi.com/v1/news',
  timeout: 15000
})

const formatArticle = (article = {}) => {
  return {
    id: article.uuid || article.url || article.title,
    title: article.title || 'No title available',
    description: article.description || article.snippet || '',
    image: article.image_url || '',
    published_at: article.published_at || '',
    sitename: article.source || 'News',
    url: article.url || '',
    text: article.snippet || '',
    categories: article.categories || []
  }
}

const removeDuplicates = (articles) => {
  const seen = new Set()

  return articles.filter((article) => {
    const key = article.id

    if (!key || seen.has(key)) {
      return false
    }

    seen.add(key)
    return true
  })
}

const getResults = (data) => {
  const articles = Array.isArray(data?.data)
    ? data.data
    : []

  return removeDuplicates(
    articles
      .map(formatArticle)
      .filter((article) => article.title)
  )
}

export const getTopHeadlines = async () => {
  const requests = [1, 2, 3].map((page) =>
    newsApi.get('/all', {
      params: {
        api_token: API_KEY,
        language: 'en',
        limit: 3,
        page: page,
        sort: 'published_at'
      }
    })
  )

  const responses = await Promise.all(requests)

  const articles = responses.flatMap(
    (response) => getResults(response.data)
  )

  return removeDuplicates(articles)
}

export const searchNews = async (query) => {
  const response = await newsApi.get('/all', {
    params: {
      api_token: API_KEY,
      search: query,
      search_fields: 'title,description',
      language: 'en',
      limit: 3,
      sort: 'relevance_score'
    }
  })

  return getResults(response.data)
}

export const getCategoryNews = async (category) => {
  const requests = [1, 2, 3].map((page) =>
    newsApi.get('/all', {
      params: {
        api_token: API_KEY,
        categories: category,
        language: 'en',
        limit: 3,
        page: page,
        sort: 'published_at'
      }
    })
  )

  const responses = await Promise.all(requests)

  const articles = responses.flatMap(
    (response) => getResults(response.data)
  )

  return removeDuplicates(articles)
}