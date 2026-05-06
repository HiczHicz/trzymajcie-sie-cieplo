import { useState } from 'react'
import ArticleFeed from '../components/ArticleFeed'
import FeaturedArticles from '../components/FeaturedArticles'
import NavigationBar from '../components/NavigationBar'
import NavigationBarSecondary from '../components/NavigationBarSecondary'
import SurveyModal from '../components/SurveyModal'

function HomePage() {
  const [selectedAudience, setSelectedAudience] = useState('tenant')

  return (
    <main className="min-h-screen bg-[#f2f2f2] text-black" data-audience={selectedAudience}>
      <NavigationBar />
      <NavigationBarSecondary selectedAudience={selectedAudience} onSelectAudience={setSelectedAudience} />
      <FeaturedArticles />
      <ArticleFeed />
      <SurveyModal />
    </main>
  )
}

export default HomePage
