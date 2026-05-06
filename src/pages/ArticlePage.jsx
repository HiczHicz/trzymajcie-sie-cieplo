import NavigationBar from '../components/NavigationBar'
import { useParams } from 'react-router-dom'
import articleSide2HeaderImage from '../assets/article-side-2-header.png'

const articleContent = {
  'side-article-2': {
    title: 'Zatrzymaj ciepło i pieniądze.',
    subtitle: 'Jak przygotować mieszkanie na zimę bez wzywania fachowca?',
    lead: 'Zima w kamienicy nie musi oznaczać przeciągów i astronomicznych rachunków. Zanim rozkręcisz kaloryfery, upewnij się, czy nie wypuszczasz ciepła prosto na ulicę. Wystarczy jeden wolny wieczór i zwykła kartka papieru, by zrobić nasz darmowy przegląd, zlokalizować słabe punkty i zatrzymać ciepło bez wzywania fachowców.',
    author: 'ANNA GÓRECKA',
    bodyTitle: 'KROK 1: Jesienny przegląd startowy (Zanim włączysz ogrzewanie)',
    bodyIntro: 'Przygotowanie mieszkania na spadek temperatur:',
    bulletPoints: [
      'Przestaw okna na "tryb zimowy": Użyj klucza imbusowego, aby przekręcić metalowe bolce (rolki ryglujące) w ramie okna. Zwiększy to docisk uszczelki i zablokuje zimne powietrze.',
      'Zadbaj o uszczelki: Przetrzyj gumowe uszczelki w oknach i drzwiach z kurzu, a następnie posmaruj je smarem silikonowym lub wazeliną techniczną. Dzięki temu guma nie stwardnieje i nie popęka na mrozie.',
      'Rozruszaj termostaty: Przekręć pokrętła na kaloryferach na maksymalną wartość, odczekaj chwilę i zakręć. Powtórz to kilka razy, aby zapobiec zablokowaniu się iglicy po letnim przestoju.',
      'Odkurz kaloryfery i kratki: Kurz wewnątrz żeliwnego grzejnika działa jak izolator - blokuje oddawanie ciepła. Z kolei czyste kratki wentylacyjne to podstawa, by w kamienicy nie pojawił się grzyb.',
    ],
    image: articleSide2HeaderImage,
  },
}

const inclusiveSans = '"Inclusive Sans", "Inter", "Segoe UI", sans-serif'

function ArticlePage() {
  const { articleId } = useParams()
  const article = articleContent[articleId]

  return (
    <main className="min-h-screen bg-[#f2f2f2] text-black">
      <NavigationBar />
      {article ? (
        <article className="mt-4 mb-16 w-full bg-[#efefef] px-[50px] pt-8 pb-12">
          <img src={article.image} alt="" className="h-[330px] w-full border border-[#cbcbcb] object-cover" />

          <div className="mx-[105px] mt-6 border border-[#d4d4d4] bg-white px-12 pt-9 pb-10">
            <header>
              <h1 style={{ fontFamily: inclusiveSans, fontSize: '48px', fontWeight: 700, lineHeight: 1.04 }}>{article.title}</h1>
              <h2
                className="mt-1"
                style={{ fontFamily: inclusiveSans, fontSize: '38px', fontWeight: 700, lineHeight: 1.08 }}
              >
                {article.subtitle}
              </h2>
              <p
                className="mt-5"
                style={{ fontFamily: inclusiveSans, fontSize: '22px', fontWeight: 700, lineHeight: 1.22 }}
              >
                {article.lead}
              </p>
              <p className="mt-4" style={{ fontFamily: inclusiveSans, fontSize: '24px', fontWeight: 400, color: '#AA2B1F' }}>
                {article.author}
              </p>
            </header>

            <hr className="my-5 border-0 border-t border-[#8f8f8f]" />

            <div style={{ fontFamily: inclusiveSans, fontSize: '22px', fontWeight: 400, lineHeight: 1.3 }}>
              <p>
                <strong>{article.bodyTitle}</strong>
              </p>
              <p className="mt-1">{article.bodyIntro}</p>
              <ul className="mt-2 list-disc space-y-2 pl-8">
                {article.bulletPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ) : null}
    </main>
  )
}

export default ArticlePage
