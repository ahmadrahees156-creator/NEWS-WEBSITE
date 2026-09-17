import { useState } from 'react'
import NewsList from '../components/NewsList'

function Home() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  const handleSearch = () => {
    setQuery(search)
    setCategory('')
  }

  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory)
    setQuery('')
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8]">

      {/* Hero Section */}
      <section className="bg-[#3b2f2f] text-[#f5f1e8] px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-[#c49a6c] font-semibold mb-3 tracking-widest">
            STAY INFORMED
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-5">
            Latest News,
            <span className="text-[#c49a6c]"> All in One Place</span>
          </h2>

          <p className="text-[#d6c8b8] max-w-2xl mx-auto text-lg">
            Discover the latest stories, trending topics and breaking news
            from around the world.
          </p>

        </div>
      </section>


      {/* Search Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-7 relative">

        <div className="bg-[#fffdf8] rounded-2xl shadow-lg p-4 border border-[#e5d8c8]">

          <div className="flex flex-col sm:flex-row gap-3">

            <div className="flex-1 relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8978] text-xl">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search latest news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
                className="w-full border border-[#d8c9b8] bg-[#faf7f0] rounded-xl px-12 py-3 text-[#3b2f2f] outline-none focus:ring-2 focus:ring-[#8b5e34]"
              />

            </div>

            <button
              onClick={handleSearch}
              className="bg-[#8b5e34] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#704825] transition"
            >
              Search
            </button>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 pt-10">

        <h3 className="text-xl font-bold mb-4 text-[#3b2f2f]">
          Explore Categories
        </h3>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => handleCategory('')}
            className={`px-5 py-2.5 rounded-full font-medium transition ${
              category === ''
                ? 'bg-[#3b2f2f] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
             All
          </button>

          <button
            onClick={() => handleCategory('business')}
            className={`px-5 py-2.5 rounded-full font-medium transition ${
              category === 'business'
                ? 'bg-[#8b5e34] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
             Business
          </button>

          <button
            onClick={() => handleCategory('technology')}
            className={`px-5 py-2.5 rounded-full font-medium transition ${
              category === 'technology'
                ? 'bg-[#8b5e34] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
             Technology
          </button>

          <button
            onClick={() => handleCategory('sports')}
            className={`px-5 py-2.5 rounded-full font-medium transition ${
              category === 'sports'
                ? 'bg-[#8b5e34] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
             Sports
          </button>

          <button
            onClick={() => handleCategory('entertainment')}
            className={`px-5 py-2.5 rounded-full font-medium transition ${
              category === 'entertainment'
                ? 'bg-[#8b5e34] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
             Entertainment
          </button>

        </div>

      </section>


      {/* News Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">

        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-[#8b5e34] font-semibold text-sm">
              {category ? category.toUpperCase() : 'LATEST'}
            </p>

            <h2 className="text-3xl font-bold text-[#3b2f2f]">
              {query ? `Results for "${query}"` : 'Latest News'}
            </h2>
          </div>

          <span className="hidden sm:block text-[#8b7a6a]">
             News
          </span>

        </div>

        <NewsList
          search={query}
          category={category}
        />

      </section>

    </main>
  )
}

export default Home