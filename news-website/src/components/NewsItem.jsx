import { Link } from 'react-router-dom'

function NewsItem({ article }) {
  return (
    <article className="bg-[#fffdf8] rounded-2xl shadow-md overflow-hidden border border-[#e5d8c8] hover:shadow-xl hover:-translate-y-1 transition duration-300">

      {article.image ? (
        <div className="relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            className="w-full h-48 sm:h-52 object-cover hover:scale-105 transition duration-500"
          />

          <span className="absolute top-3 left-3 bg-[#8b5e34] text-white text-xs font-semibold px-3 py-1 rounded-full">
            NEWS
          </span>
        </div>
      ) : (
        <div className="h-48 sm:h-52 bg-[#e5d8c8] flex items-center justify-center">
          <span className="text-[#8b5e34] font-semibold">
            No Image Available
          </span>
        </div>
      )}

      <div className="p-5">

        <p className="text-sm text-[#8b5e34] font-semibold mb-2">
          {article.sitename}
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-[#3b2f2f] mb-3">
          {article.title}
        </h3>

        <p className="text-[#6b5b4d] mb-4 line-clamp-3">
          {article.description || 'Read the latest details about this story.'}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <p className="text-sm text-[#9a8978]">
            {article.published_at
              ? new Date(article.published_at).toLocaleDateString()
              : 'Unknown date'}
          </p>

          <Link
            to={`/news/${encodeURIComponent(article.id)}`}
            state={article}
            className="text-[#8b5e34] font-semibold hover:text-[#5f3d20] transition"
          >
            Read More →
          </Link>

        </div>

      </div>

    </article>
  )
}

export default NewsItem