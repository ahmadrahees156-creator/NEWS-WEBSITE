import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY

const API_URL = 'https://newsdata.io/api/1/latest'

const formatArticle = (article = {}) => {
  return {
    id: article.article_id || article.link || article.title,
    title: article.title || 'No title available',
    description: article.description || '',
    image: article.image_url || '',
    published_at: article.pubDate || '',
    sitename: article.source_name || 'News',
    url: article.link || '',
    text: article.content || article.description || '',
    categories: article.category || []
  }
}

const removeDuplicates = (articles) => {
  const seen = new Set()

  return articles.filter((article) => {
    if (seen.has(article.id)) {
      return false
    }

    seen.add(article.id)
    return true
  })
}

export const getTopHeadlines = async () => {
  const response = await axios.get(API_URL, {
    params: {
      apikey: API_KEY,
      language: 'en'
    }
  })

  const articles = response.data.results || []

  return removeDuplicates(
    articles.map(formatArticle)
  )
}

export const searchNews = async (query) => {
  const response = await axios.get(API_URL, {
    params: {
      apikey: API_KEY,
      q: query,
      language: 'en'
    }
  })

  const articles = response.data.results || []

  return removeDuplicates(
    articles.map(formatArticle)
  )
}

export const getCategoryNews = async (category) => {
  const response = await axios.get(API_URL, {
    params: {
      apikey: API_KEY,
      category: category,
      language: 'en'
    }
  })

  const articles = response.data.results || []

  return removeDuplicates(
    articles.map(formatArticle)
  )
}