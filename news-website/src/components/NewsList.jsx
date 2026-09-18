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

        let articles = []

        if (category) {
          articles = await getCategoryNews(category)
        } else if (search.trim()) {
          articles = await searchNews(search.trim())
        } else {
          articles = await getTopHeadlines()
        }

        setNews(Array.isArray(articles) ? articles : [])

      } catch (err) {
        console.error('News API Error:', err)
        setNews([])
        setError('Unable to load news right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [search, category])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-[#fffdf8] rounded-2xl shadow-md overflow-hidden border border-[#e5d8c8] animate-pulse"
          >

            <div className="h-48 bg-[#e5d8c8]" />

            <div className="p-5 space-y-3">

              <div className="h-4 bg-[#e5d8c8] rounded w-1/3" />

              <div className="h-6 bg-[#e5d8c8] rounded" />

              <div className="h-4 bg-[#e5d8c8] rounded" />

              <div className="h-4 bg-[#e5d8c8] rounded w-2/3" />

            </div>

          </div>
        ))}

      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">

        <p className="text-red-700 font-semibold text-lg">
          {error}
        </p>

        <p className="text-[#8b7a6a] mt-2">
          Please refresh the page and try again.
        </p>

      </div>
    )
  }

  if (news.length === 0) {
    return (
      <p className="text-center text-[#6b5b4d] font-semibold py-12">
        No news found.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {news.map((article, index) => (
        <NewsItem
          key={article.url || article.title || index}
          article={article}
        />
      ))}

    </div>
  )
}

export default NewsList