import { useState } from 'react'
import SearchBar from './components/SearchBar'
import FoodList from './components/FoodList'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)

    try {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=1&page_size=10`

      const response = await fetch(url)
      const data = await response.json()

      // ✅ Filter out invalid products
      const filteredProducts = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ''
      )

      // ✅ Store in state
      setResults(filteredProducts)

    } catch (error) {
      console.error('Something went wrong:', error)
      setResults([]) // optional safety
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>🥗 FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {/* ✅ Step 4.2: UI States */}

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Empty state (before search OR no results) */}
      {!loading && results.length === 0 && (
        <p>Search for a food above to see its nutrition info.</p>
      )}

      {/* Results */}
      <FoodList products={results} />
    </div>
  )
}

export default App