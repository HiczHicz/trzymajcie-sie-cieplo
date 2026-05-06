import { Link } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'

function CategoryArticlesPage() {
  return (
    <main className="min-h-screen bg-[#f2f2f2] text-black">
      <NavigationBar />

      <section className="mx-auto mt-[59px] flex w-full max-w-[1284px] gap-[56px]">
        <article className="h-[570px] w-[650px] border-[3px] border-[#e8e6e6] bg-[#d9d9d9]" />

        <div className="flex flex-col gap-[60px]">
          <article className="h-[255px] w-[570px] border-2 border-[#d9d9d9] bg-[#d9d9d9]" />
          <article className="h-[255px] w-[570px] border-2 border-[#d9d9d9] bg-[#d9d9d9]" />
        </div>
      </section>

      <section className="mx-auto mt-[58px] mb-14 w-full max-w-[1284px] overflow-x-auto">
        <div className="grid min-w-[1283px] grid-cols-[390px_389px_390px] gap-x-[57px] gap-y-8">
          <Link
            to="/article/article-3"
            className="h-[304px] border border-[#d9d9d9] bg-white transition-colors hover:bg-[#efefef]"
            aria-label="article-3"
          >
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.GMhb_l1XUHdz87TVIk4zrQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
              className="h-[192px] w-full object-cover"
            />
            <h3 className="px-3 pt-2 text-[24px] leading-[1.1] font-bold text-black">
              Zablokuj uciekające ciepło.
              <span className="mt-1 block text-[20px] leading-[1.1] font-normal">Prosta regulacja okien i wymiana uszczelek.</span>
            </h3>
          </Link>
          {Array.from({ length: 11 }, (_, index) => (
            <article key={`category-article-${index + 2}`} className="h-[304px] border border-[#d9d9d9] bg-[#d9d9d9]" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default CategoryArticlesPage
