import { Navigate, Route, Routes } from 'react-router-dom'
import ArticlePage from './pages/ArticlePage'
import CategoryArticlesPage from './pages/CategoryArticlesPage'
import HomePage from './pages/HomePage'
import NavOnlyPage from './pages/NavOnlyPage'
import TestPerPage from './pages/TestPerPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/domowe-sposoby" element={<CategoryArticlesPage />} />
      <Route path="/modernizacja" element={<CategoryArticlesPage />} />
      <Route path="/wnioski-dokumenty" element={<NavOnlyPage />} />
      <Route path="/znajdz-dotacje" element={<NavOnlyPage />} />
      <Route path="/test-per" element={<TestPerPage />} />
      <Route path="/article/:articleId" element={<ArticlePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
