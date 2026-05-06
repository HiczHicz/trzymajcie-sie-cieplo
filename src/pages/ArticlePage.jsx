import NavigationBar from '../components/NavigationBar'
import { useParams } from 'react-router-dom'
import articleSide2HeaderImage from '../assets/article-side-2-header.png'

const articleContent = {
  'main-article': {
    title: 'Jak samodzielnie wykonać diagnostykę mieszkania? Dlaczego jest ci zimno?',
    subtitle: '',
    lead: 'Zanim zdecydujesz się na kosztowny remont czy wezwanie fachowca z profesjonalną kamerą termowizyjną, warto przeprowadzić podstawową diagnozę mieszkania na własną rękę. Często to najdrobniejsze nieszczelności odpowiadają za wysokie rachunki i wychłodzone pokoje.',
    author: '',
    bodyTitle: 'Oto prosty przewodnik, jak bez użycia specjalistycznych narzędzi sprawdzić, którędy ucieka Twoje ciepło i jak w łatwy sposób je zatrzymać.',
    bodyIntro: '1. Test okien, drzwi oraz przewiewów',
    bodySectionIntro: 'Okna i drzwi z czasem tracą swoją szczelność z powodu zużycia materiałów.',
    bulletPoints: [
      'Test kartki papieru: Otwórz okno, włóż zwykłą kartkę papieru między ramę a skrzydło, a następnie je zamknij. Spróbuj wyciągnąć kartkę. Jeśli wychodzi z dużym oporem - uszczelka działa prawidłowo. Jeśli wyślizguje się lekko - uszczelki są wyrobione i masz w tym miejscu szparę.',
      'Test dłoni: W chłodny, wietrzny dzień przejedź dłonią (lub zbliż policzek) wzdłuż zamkniętych okien i drzwi wejściowych. Powiew zimnego powietrza od razu zdradzi Ci nieszczelność.',
      'Test dymu: Zamknij wszystkie okna oraz drzwi i wyłącz wentylatory w domu (np. wyciąg w łazience lub okap), następnie zapal kadzidełko zapachowe (daje gęsty i dobrze widoczny dym). Bardzo powoli przesuwaj je tuż przy krawędziach okien, framugach drzwi wejściowych, a także przy gniazdkach elektrycznych na ścianach zewnętrznych. Jeśli dym unosi się prosto w górę - miejsce jest szczelne. Jeśli nagle zaczyna "tańczyć", mocno się odchyla lub jest gwałtownie zasysany - właśnie zlokalizowałeś niewidoczną szczelinę.',
    ],
    sectionTwoTitle: '2. Test kaloryferów',
    sectionTwoBody:
      'Nawet najszczelniejszy dom będzie zimny, jeśli ciepło z kaloryferów nie jest w pełni wykorzystywane.',
    sectionTwoPoints: [
      'Test dotyku: Sprawdź włączony kaloryfer. Jeśli na dole jest gorący, a na górze chłodny - oznacza to, że jest zapowietrzony. Grzejnik nie oddaje wtedy pełnej mocy i wymaga odpowietrzenia.',
      'Test ściany: Dotknij ściany bezpośrednio za grzejnikiem. Jeśli jest bardzo ciepła, oznacza to, że duża część Twoich pieniędzy idzie na niepotrzebne ogrzewanie muru zewnętrznego, zamiast powietrza w pokoju.',
    ],
    sectionThreeTitle: '3. Test wilgoci',
    sectionThreeBody:
      'Brak odpowiedniej izolacji w ścianach tworzy tzw. mostki termiczne - miejsca, w których mur błyskawicznie się wychładza.',
    sectionThreePoints: [
      'Czego szukać: Zwróć szczególną uwagę na rogi pokoi, ściany zewnętrzne za dużymi meblami oraz okolice nadproży okiennych. Jeśli ściana w tych miejscach jest lodowata w dotyku, skrapla się na niej woda lub pojawiają się czarne kropki, to znak, że budynek w tym punkcie przemarza z powodu braku izolacji.',
    ],
    image: null,
  },
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
  'article-3': {
    title: 'Zablokuj uciekające ciepło.',
    subtitle: 'Prosta regulacja okien i wymiana uszczelek.',
    lead: 'To właśnie przez nieszczelne okna tracisz najwięcej ciepła i pieniędzy. Zanim jednak zaczniesz zaklejać szpary taśmą, zacznij od absolutnych podstaw. Zobacz, jak w kilkanaście minut samodzielnie przestawić okna na "tryb zimowy" i wymienić zużytą gumę na nową, odzyskując szczelność i komfort.',
    author: 'MARTYNA URANOWSKA',
    bodyTitle: 'Czego potrzebujesz?',
    bodyIntro: '',
    bulletPoints: [
      'Nowych uszczelek (np. z gumy EPDM)',
      'Klucza imbusowego (najczęściej w rozmiarze 4 mm) lub kombinerek',
      'Płynu do mycia naczyń lub alkoholu do odtłuszczenia ramy',
    ],
    stepOne:
      '1. Czyszczenie ram Zanim cokolwiek przykleisz, musisz przygotować powierzchnię. Dokładnie umyj i odtłuść (np. płynem do naczyń lub alkoholem) ramy okienne w miejscach, gdzie przylega uszczelka. Brud i tłuszcz sprawią, że nowa uszczelka szybko odpadnie.',
    stepTwo:
      '2. Wymiana uszczelek Jeśli stare uszczelki są płaskie, twarde lub popękane - nie spełniają już swojej funkcji. Delikatnie je zdemontuj (często wystarczy je pociągnąć, czasem trzeba zeskrobać stary klej). Następnie wklej nową uszczelkę, zaczynając od górnego rogu. Pamiętaj: nie naciągaj gumy zbytnio podczas naklejania!',
    stepThreeIntro:
      '3. Uruchomienie "Trybu Zimowego" Większość nowoczesnych i starszych okien plastikowych ma ukrytą opcję regulacji docisku.',
    stepThreePoints: [
      'Otwórz skrzydło okna i znajdź na jego krawędzi (z boku) metalowe bolce - to tzw. rolki ryglujące.',
      'Weź klucz imbusowy lub kombinerki.',
      'Przekręć bolec tak, aby jego grubsza część (lub znacznik w postaci kropki/kreski) była skierowana do wewnątrz pomieszczenia (w stronę uszczelki).',
    ],
    summary:
      'Spowoduje to, że po przekręceniu klamki okno znacznie mocniej dociśnie się do ramy, całkowicie blokując zimne powietrze z zewnątrz.',
    image: null,
  },
}

const inclusiveSans = '"Inclusive Sans", "Inter", "Segoe UI", sans-serif'

function ArticlePage() {
  const { articleId } = useParams()
  const article = articleContent[articleId]
  const isEmbedded = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('embed') === '1'

  return (
    <main className="min-h-screen bg-[#f2f2f2] text-black">
      {!isEmbedded ? <NavigationBar /> : null}
      {article ? (
        <article
          className={`w-full bg-[#efefef] ${isEmbedded ? 'mt-0 mb-0 px-3 pt-2 pb-4' : 'mt-4 mb-16 px-[50px] pt-8 pb-12'}`}
        >
          {article.image ? (
            <img src={article.image} alt="" className="h-[330px] w-full border border-[#cbcbcb] object-cover" />
          ) : null}

          <div
            className={`border border-[#d4d4d4] bg-white ${isEmbedded ? 'mx-0 mt-2 px-6 pt-6 pb-7' : 'mx-[105px] mt-6 px-12 pt-9 pb-10'}`}
          >
            <header>
              <h1 style={{ fontFamily: inclusiveSans, fontSize: '48px', fontWeight: 700, lineHeight: 1.04 }}>{article.title}</h1>
              {article.subtitle ? (
                <h2
                  className="mt-1"
                  style={{ fontFamily: inclusiveSans, fontSize: '38px', fontWeight: 700, lineHeight: 1.08 }}
                >
                  {article.subtitle}
                </h2>
              ) : null}
              <p
                className="mt-5"
                style={{ fontFamily: inclusiveSans, fontSize: '22px', fontWeight: 700, lineHeight: 1.22 }}
              >
                {article.lead}
              </p>
              {article.author ? (
                <p className="mt-4" style={{ fontFamily: inclusiveSans, fontSize: '24px', fontWeight: 400, color: '#AA2B1F' }}>
                  {article.author}
                </p>
              ) : null}
            </header>

            <hr className="my-5 border-0 border-t border-[#8f8f8f]" />

            {articleId === 'main-article' ? (
              <div style={{ fontFamily: inclusiveSans, fontSize: '22px', fontWeight: 400, lineHeight: 1.3 }}>
                <p>
                  <strong>{article.bodyTitle}</strong>
                </p>
                <p className="mt-2">
                  <strong>{article.bodyIntro}</strong>
                </p>
                <p className="mt-1">{article.bodySectionIntro}</p>
                <ul className="mt-2 list-disc space-y-2 pl-8">
                  {article.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="mt-5">
                  <strong>{article.sectionTwoTitle}</strong>
                </p>
                <p className="mt-1">{article.sectionTwoBody}</p>
                <ul className="mt-2 list-disc space-y-2 pl-8">
                  {article.sectionTwoPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="mt-5">
                  <strong>{article.sectionThreeTitle}</strong>
                </p>
                <p className="mt-1">{article.sectionThreeBody}</p>
                <ul className="mt-2 list-disc space-y-2 pl-8">
                  {article.sectionThreePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ) : articleId === 'article-3' ? (
              <div style={{ fontFamily: inclusiveSans, fontSize: '22px', fontWeight: 400, lineHeight: 1.3 }}>
                <p>
                  <strong>{article.bodyTitle}</strong>
                </p>
                <ul className="mt-1 list-disc pl-8">
                  {article.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <p className="mt-2">
                  <strong>Instrukcja krok po kroku:</strong>
                </p>
                <p>{article.stepOne}</p>
                <p className="mt-1">{article.stepTwo}</p>
                <p className="mt-1">{article.stepThreeIntro}</p>
                <ul className="list-disc pl-8">
                  {article.stepThreePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="mt-1">{article.summary}</p>

                <div className="mt-8 space-y-6">
                  <iframe
                    className="mx-auto aspect-video w-full max-w-[820px] rounded-[12px]"
                    src="https://www.youtube.com/embed/hXFwhAjw7vg"
                    title="YouTube video player 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <iframe
                    className="mx-auto aspect-video w-full max-w-[820px] rounded-[12px]"
                    src="https://www.youtube.com/embed/VX_fLUS-sJo"
                    title="YouTube video player 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </article>
      ) : null}
    </main>
  )
}

export default ArticlePage
