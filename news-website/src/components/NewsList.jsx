

import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { getTopHeadlines } from '../services/newsApi'

function NewsList() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getTopHeadlines()
      setNews(articles)
    }

    fetchNews()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  )
}

export default NewsList