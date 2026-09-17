import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { getTopHeadlines, searchNews } from '../services/newsApi'

function NewsList({ search }) {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      let articles

      if (search.trim() === '') {
        articles = await getTopHeadlines()
      } else {
        articles = await searchNews(search)
      }

      setNews(articles)
    }

    fetchNews()
  }, [search])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  )
}

export default NewsList