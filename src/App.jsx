import ArticleFeed from './components/ArticleFeed'
import FeaturedArticles from './components/FeaturedArticles'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <main className="min-h-screen bg-[#f2f2f2] text-black">
      <NavigationBar />
      <FeaturedArticles />
      <ArticleFeed />
    </main>
  )
}

export default App
