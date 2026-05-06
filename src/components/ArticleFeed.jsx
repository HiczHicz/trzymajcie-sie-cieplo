import { Link } from 'react-router-dom'

const placeholders = Array.from({ length: 12 }, (_, index) => ({
  id: `article-${index + 3}`,
}))

function ArticleFeed() {
  return (
    <section className="mx-auto mt-[58px] mb-14 w-full max-w-[1284px] overflow-x-auto">
      <div className="grid min-w-[1283px] grid-cols-[390px_389px_390px] gap-x-[57px] gap-y-8">
        {placeholders.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="h-[304px] border border-[#d9d9d9] bg-[#d9d9d9]"
            aria-label={article.id}
          />
        ))}
      </div>
    </section>
  )
}

export default ArticleFeed
