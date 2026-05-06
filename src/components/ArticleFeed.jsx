import { Link } from 'react-router-dom'

const featuredFeedCards = [
  {
    id: 'article-3',
    title: 'Zablokuj uciekające ciepło.',
    subtitle: 'Prosta regulacja okien i wymiana uszczelek.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.GMhb_l1XUHdz87TVIk4zrQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 'article-4',
    title: 'Grzyb na ścianie: Kto płaci za remont? Twój prawny niezbędnik w walce z opornym właścicielem.',
    image:
      'https://media.istockphoto.com/id/545811122/photo/collector-to-get-the-arrears.jpg?s=612x612&w=0&k=20&c=wWE2SjxxDExdTgmBM1KV-S8aQSkl088ZvsLduRpO18U=',
  },
  {
    id: 'article-5',
    title: 'Zanim kupisz prądożerną farelkę: Sprawdź, czy miasto opłaci Twoje rachunki za ogrzewanie w tym miesiącu.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.osKCoELjXzs2kmTvwtvNcwHaE7?w=1024&h=681&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 'article-6',
    title: 'Suszysz pranie na kaloryferze przy zamkniętym oknie? Ten jeden błąd hoduje wilgoć i po cichu niszczy Twoje płuca.',
    image: 'https://cdn.images.express.co.uk/img/dynamic/11/590x/Chest-chest-infection-1694044.jpg?r=1667944860378',
  },
  {
    id: 'article-7',
    title: 'Boisz się urzędowych formularzy? Zobacz, jak krok po kroku, bez stresu załatwić dopłatę do ogrzewania.',
    image: 'https://www.hotdocs.com/wp-content/uploads/2020/10/iStock-904268154.jpg',
  },
  {
    id: 'article-8',
    title: 'Twój kaloryfer grzeje ścianę sąsiada zamiast Ciebie? Zamontuj ten "ekran" za 15 złotych i poczuj różnicę w 10 minut.',
    image: 'https://th.bing.com/th/id/R.6c18ff29e2b0f158b0f2579c2f175626?rik=FuaXfraSD8qxoQ&pid=ImgRaw&r=0',
  },
]

const placeholders = Array.from({ length: 12 - featuredFeedCards.length }, (_, index) => ({
  id: `article-${index + 9}`,
}))

function ArticleFeed() {
  return (
    <section className="mx-auto mt-[58px] mb-14 w-full max-w-[1284px] overflow-x-auto">
      <div className="grid min-w-[1283px] grid-cols-[390px_389px_390px] gap-x-[57px] gap-y-8">
        {featuredFeedCards.map((card) => (
          <Link
            key={card.id}
            to={`/article/${card.id}`}
            className="flex h-[304px] flex-col overflow-hidden border border-[#d9d9d9] bg-white transition-colors hover:bg-[#efefef]"
            aria-label={card.id}
          >
            {card.image ? (
              <img src={card.image} alt="" className="h-[192px] w-full shrink-0 object-cover" />
            ) : (
              <div className="h-[192px] w-full shrink-0 bg-[#d9d9d9]" />
            )}
            <div className="min-h-0 flex-1 px-3 pt-2 pb-2">
              <h3
                className="text-[20px] leading-[1.15] font-bold text-black"
                style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
              >
                {card.title}
              </h3>
              {card.subtitle ? (
                <span
                  className="mt-1 block text-[17px] leading-[1.15] font-normal text-black"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {card.subtitle}
                </span>
              ) : null}
            </div>
          </Link>
        ))}
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
