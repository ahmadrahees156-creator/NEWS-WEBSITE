import { useLocation } from 'react-router-dom'

function NewsDetail() {
  const location = useLocation()
  const article = location.state

  if (!article) {
    return (
      <main className="min-h-screen px-6 py-10 text-center">
        <h2 className="text-2xl font-bold">
          News not found
        </h2>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">

          <p className="text-blue-600 font-semibold mb-2">
            {article.source?.name}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {article.title}
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Published: {new Date(article.publishedAt).toLocaleString()}
          </p>

          <p className="text-lg text-gray-700 mb-6">
            {article.description}
          </p>

          {article.content && (
            <p className="text-gray-700 leading-7 mb-6">
              {article.content}
            </p>
          )}

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Read Full Article →
          </a>

        </div>
      </div>
    </main>
  )
}

export default NewsDetail