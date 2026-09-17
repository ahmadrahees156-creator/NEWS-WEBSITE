
function NewsItem({ article }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          {article.title}
        </h3>

        <p className="text-gray-600 mb-3">
          {article.description}
        </p>

        <p className="text-sm text-gray-500">
          Published: {new Date(article.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </article>
  )
}

export default NewsItem