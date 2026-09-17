import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import {
  getTopHeadlines,
  searchNews,
  getCategoryNews
} from '../services/newsApi'

function NewsList({ search, category }) {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        setError('')

        let articles

        if (category !== '') {
          articles = await getCategoryNews(category)
        } else if (search.trim() !== '') {
          articles = await searchNews(search)
        } else {
          articles = await getTopHeadlines()
        }

        setNews(articles)
      } catch (err) {
        setError('Failed to fetch news. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [search, category])

  if (loading) {
    return (
      <p className="text-center text-lg font-semibold">
        Loading news...
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-center text-red-600 font-semibold">
        {error}
      </p>
    )
  }

  if (news.length === 0) {
    return (
      <p className="text-center text-gray-600 font-semibold">
        No news found.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  )
}

export default NewsList