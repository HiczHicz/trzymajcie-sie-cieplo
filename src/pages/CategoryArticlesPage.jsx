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
          {Array.from({ length: 12 }, (_, index) => (
            <article key={`category-article-${index + 1}`} className="h-[304px] border border-[#d9d9d9] bg-[#d9d9d9]" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default CategoryArticlesPage
