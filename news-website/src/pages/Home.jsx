import { useState } from 'react'
import NewsList from '../components/NewsList'

function Home() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    setQuery(search)
  }

  return (
    <main className="min-h-screen px-4 md:px-6 py-10">

      <h2 className="text-3xl font-bold text-center mb-8">
        Latest News
      </h2>

      <div className="max-w-xl mx-auto mb-10 flex gap-2">

        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>

      </div>

      <NewsList search={query} />

    </main>
  )
}

export default Home