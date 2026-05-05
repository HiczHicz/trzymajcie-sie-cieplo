const mainArticlePhoto = 'https://www.figma.com/api/mcp/asset/1907b534-b4ab-4f2f-adbd-f7191bafadf9'
const sideArticle1Photo = 'https://www.figma.com/api/mcp/asset/4d76d5c3-94de-4b5f-b9fd-6c2ca132fffc'
const sideArticle2Photo = 'https://www.figma.com/api/mcp/asset/cc351c3b-b2d3-4fb8-8f51-e395d1318aa7'

function MainArticle() {
  return (
    <article className="h-[570px] w-[650px] border-[3px] border-[#e8e6e6] bg-white">
      <img src={mainArticlePhoto} alt="" className="h-[433px] w-full object-cover" />
      <h2 className="px-5 pt-5 text-[30px] leading-[1.1] font-bold text-black">
        Ogrzej swoje mieszkanie krok po kroku (uwzględniając swój budżet)
      </h2>
    </article>
  )
}

function SideArticle({ image, title }) {
  return (
    <article className="flex h-[255px] w-[570px] border-2 border-[#d9d9d9] bg-white">
      <img src={image} alt="" className="h-full w-[278px] object-cover" />
      <h3 className="flex items-center px-4 text-[30px] leading-[1.1] font-bold text-black">{title}</h3>
    </article>
  )
}

function FeaturedArticles() {
  return (
    <section className="mx-auto mt-[59px] flex w-full max-w-[1284px] gap-[56px]">
      <MainArticle />
      <div className="flex flex-col gap-[60px]">
        <SideArticle image={sideArticle1Photo} title="Ciepłobus - warsztaty, termowizja" />
        <SideArticle image={sideArticle2Photo} title="Nie lekceważ zimna. Choroby spowodowane niską temperaturą" />
      </div>
    </section>
  )
}

export default FeaturedArticles
