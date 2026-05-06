import ArticleFeed from '../components/ArticleFeed'
import FeaturedArticles from '../components/FeaturedArticles'
import NavigationBar from '../components/NavigationBar'
import SurveyModal from '../components/SurveyModal'

function HomePage() {
  return (
    <main className="min-h-screen bg-[#f2f2f2] text-black">
      <NavigationBar />
      <FeaturedArticles />
      <ArticleFeed />
      <SurveyModal />
    </main>
  )
}

export default HomePage
