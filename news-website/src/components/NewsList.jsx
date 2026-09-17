import NewsItem from './NewsItem'

function NewsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
}

export default NewsList