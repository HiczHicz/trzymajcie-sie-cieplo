import { Link } from 'react-router-dom'
import articleSide2HeaderImage from '../assets/article-side-2-header.png'

const mainArticlePhoto = 'https://pliki.propertydesign.pl/i/18/89/96/188996_r0_1140.jpg'
const sideArticle1Photo = 'https://www.figma.com/api/mcp/asset/4d76d5c3-94de-4b5f-b9fd-6c2ca132fffc'

const sideArticle2Content = {
  title: 'Zatrzymaj ciepło i pieniądze.',
  subtitle: 'Jak przygotować mieszkanie na zimę bez wzywania fachowca?',
}

function MainArticle() {
  return (
    <Link
      to="/article/main-article"
      className="block h-[570px] w-[650px] border-[3px] border-[#e8e6e6] bg-white transition-colors hover:bg-[#efefef]"
    >
      <img src={mainArticlePhoto} alt="" className="h-[433px] w-full object-cover" />
      <h2 className="px-5 pt-5 text-[30px] leading-[1.1] font-bold text-black">
        Jak samodzielnie wykonać diagnostykę mieszkania? Dlaczego jest ci zimno?
      </h2>
    </Link>
  )
}

function SideArticle({ image, title, subtitle, slug, imageClassName = '' }) {
  return (
    <Link
      to={`/article/${slug}`}
      className="flex h-[255px] w-[570px] border-2 border-[#d9d9d9] bg-white transition-colors hover:bg-[#efefef]"
    >
      <img src={image} alt="" className={`h-full w-[278px] object-cover ${imageClassName}`} />
      <div className="flex items-center px-4">
        <h3 className="text-[30px] leading-[1.1] font-bold text-black">
          {title}
          {subtitle ? (
            <span className="mt-2 block text-[22px] leading-[1.1] font-normal">{subtitle}</span>
          ) : null}
        </h3>
      </div>
    </Link>
  )
}

function FeaturedArticles() {
  return (
    <section className="mx-auto mt-[59px] flex w-full max-w-[1284px] gap-[56px]">
      <MainArticle />
      <div className="flex flex-col gap-[60px]">
        <SideArticle image={sideArticle1Photo} title="Ciepłobus - warsztaty, termowizja" slug="side-article-1" />
        <SideArticle
          image={articleSide2HeaderImage}
          title={sideArticle2Content.title}
          subtitle={sideArticle2Content.subtitle}
          slug="side-article-2"
          imageClassName="object-[60%_center]"
        />
      </div>
    </section>
  )
}

export default FeaturedArticles
