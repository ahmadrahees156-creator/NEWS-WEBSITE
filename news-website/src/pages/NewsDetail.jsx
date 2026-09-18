import { useLocation, Link } from 'react-router-dom'

const fallbackImage =
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80'

function NewsDetail() {
  const location = useLocation()
  const article = location.state

  if (!article) {
    return (
      <main className="min-h-screen bg-[#f5f1e8] px-6 py-16 text-center">

        <h2 className="text-2xl font-bold text-[#3b2f2f]">
          News not found
        </h2>

        <p className="text-[#6b5b4d] mt-3">
          Please open the article from the home page.
        </p>

        <Link
          to="/"
          className="inline-block mt-5 bg-[#8b5e34] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#704825] transition"
        >
          ← Back to Home
        </Link>

      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-4 py-8 sm:py-10">

      <div className="max-w-4xl mx-auto">

        <Link
          to="/"
          className="inline-block mb-5 text-[#8b5e34] font-semibold hover:text-[#5f3d20] transition"
        >
          ← Back to News
        </Link>


        <article className="bg-[#fffdf8] rounded-2xl shadow-lg overflow-hidden border border-[#e5d8c8]">

          <img
            src={article.image || fallbackImage}
            alt={article.title}
            onError={(e) => {
              e.currentTarget.src = fallbackImage
            }}
            className="w-full h-56 sm:h-72 md:h-96 object-cover"
          />


          <div className="p-5 sm:p-7 md:p-10">

            <p className="text-[#8b5e34] font-semibold mb-3">
              {article.sitename}
            </p>


            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b2f2f] leading-tight mb-5">
              {article.title}
            </h1>


            <p className="text-sm text-[#9a8978] border-b border-[#e5d8c8] pb-5 mb-6">

              Published:{' '}

              {article.published_at
                ? new Date(article.published_at).toLocaleString()
                : 'Unknown'}

            </p>


            {article.description && (
              <p className="text-lg text-[#5c4b3e] leading-8 mb-6">
                {article.description}
              </p>
            )}


            {article.text && (
              <p className="text-[#6b5b4d] leading-8 mb-8 whitespace-pre-line">
                {article.text}
              </p>
            )}


            {article.url && article.url !== '#' && (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8b5e34] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#704825] transition"
              >
                Read Original Article →
              </a>
            )}

          </div>

        </article>

      </div>

    </main>
  )
}

export default NewsDetail