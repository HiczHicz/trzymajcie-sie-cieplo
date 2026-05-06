import NavigationBar from '../components/NavigationBar'
import { useLocation } from 'react-router-dom'

function NavOnlyPage() {
  const location = useLocation()
  const isDocumentsPage = location.pathname === '/wnioski-dokumenty'
  const isGrantsPage = location.pathname === '/znajdz-dotacje'

  return (
    <main className="min-h-screen bg-[#f2f2f2] text-black">
      <NavigationBar />
      {isDocumentsPage ? (
        <article className="mt-4 mb-16 w-full bg-[#efefef] px-[50px] pt-8 pb-12">
          <div className="mx-[105px] border border-[#d4d4d4] bg-white px-12 pt-9 pb-10">
          <header>
            <h1 className="text-center" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.04 }}>
              Wnioski i dokumenty
            </h1>
            <p className="mt-6" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.3 }}>
              <strong>Biurokracja nie musi być straszna, gdy masz pod ręką odpowiednie narzędzia!</strong>
              <br />
              W tej zakładce zebraliśmy dla Ciebie gotowe szablony pism i wniosków, które ułatwią Ci walkę o cieplejsze mieszkanie
              i niższe rachunki. Nie musisz być prawnikiem ani urzędnikiem - wystarczy, że znajdziesz interesujący Cię temat,
              pobierzesz dokument, uzupełnisz swoje dane i zaniesiesz we wskazane miejsce.
            </p>
            <p className="mt-6" style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.22 }}>
              Spis treści:
            </p>
            <ol className="mt-2 list-decimal space-y-1 pl-7" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.3 }}>
              <li>
                <span className="underline">Relacje ze Wspólnotą i Spółdzielnią</span> (zgłoszenia problemów i petycje)
              </li>
              <li>
                <span className="underline">Wsparcie Finansowe i Urząd Miasta</span> (dofinansowania i zasiłki)
              </li>
              <li>
                <span className="underline">Trudne sprawy i Zabytki</span> (zgody konserwatorskie)
              </li>
            </ol>
          </header>

          <hr className="my-7 border-0 border-t border-[#8f8f8f]" />

          <section style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.3 }}>
            <h2 style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.08 }}>1. Relacje ze Wspólnotą i Spółdzielnią</h2>
            <p className="mt-3">
              Zarządca budynku ma obowiązek dbać o stan techniczny nieruchomości.
              <br />
              Użyj tych dokumentów, aby zmobilizować administrację do działania.
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="mr-2">📄</span>
                <strong>Wniosek o wykonanie pomiarów kamerą termowizyjną</strong>
                <br />
                Opis: Podejrzewasz, że ściany przepuszczają ciepło? Ten wniosek pozwala formalnie poprosić administrację o diagnozę
                problemu lub zakup kamery termowizyjnej na użytek mieszkańców osiedla.
                <br />
                Gdzie złożyć: Biuro Spółdzielni / Zarządca Nieruchomości
              </li>
              <li>
                <span className="mr-2">📄</span>
                <strong>Petycja lokatorów o rozpoczęcie termomodernizacji</strong>
                <br />
                Opis: Gotowy szablon pisma dla zarządcy. Zbierz podpisy sąsiadów, by wymusić na wspólnocie zgłoszenie budynku do
                dofinansowania i gruntowne ocieplenie elewacji.
                <br />
                Gdzie złożyć: Zarząd Wspólnoty Mieszkaniowej
              </li>
            </ul>
          </section>

          <section className="mt-10" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.3 }}>
            <h2 style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.08 }}>2. Wsparcie Finansowe i Urząd Miasta</h2>
            <p className="mt-3">
              Brakuje Ci środków na samodzielne uszczelnienie mieszkania lub wymianę pieca?
              <br />
              Te szablony pomogą Ci uzyskać wsparcie finansowe lub lokalowe od miasta.
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="mr-2">📄</span>
                <strong>Wniosek o dofinansowanie wymiany źródła ciepła/okien</strong>
                <br />
                Opis: Podstawowy druk dla mieszkańców, którzy chcą zlikwidować stary piec (tzw. „kopciucha”) lub wymienić
                nieszczelną stolarkę w ramach miejskich programów dotacyjnych.
                <br />
                Gdzie złożyć: Urząd Miejski (Wydział Środowiska)
              </li>
              <li>
                <span className="mr-2">📄</span>
                <strong>Wniosek o dodatek mieszkaniowy lub osłonowy</strong>
                <br />
                Opis: Koszty ogrzewania zimą mocno uderzają w Twój budżet? Pobierz formularz, aby ubiegać się o finansową tarczę
                ochronną z pomocy społecznej.
                <br />
                Gdzie złożyć: MOPS / MOPR w Twojej dzielnicy
              </li>
              <li>
                <span className="mr-2">📄</span>
                <strong>Zgłoszenie o zamianę lokalu komunalnego</strong>
                <br />
                Opis: Wynajmujesz mieszkanie od miasta, ale jego stan techniczny nie pozwala na jego dogrzanie? Pobierz wzór wniosku
                o przyznanie lub zamianę lokalu z uwagi na złe warunki bytowe.
                <br />
                Gdzie złożyć: Gdańskie Nieruchomości / Urząd Miejski
              </li>
            </ul>
            <p className="mt-5" style={{ fontSize: '22px', fontWeight: 700 }}>
              Ważne: Wysokość wsparcia zależy od Twoich dochodów!
            </p>
          </section>

          <section className="mt-10" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.3 }}>
            <h2 style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.08 }}>3. Trudne sprawy i zabytki</h2>
            <p className="mt-3">
              Kamienice wpisane do rejestru zabytków wymagają specjalnego traktowania.
              <br />
              Te sprawy warto prowadzić formalnie i z odpowiednimi zgodami.
            </p>
            <ul className="mt-4">
              <li>
                <span className="mr-2">📄</span>
                <strong>Wniosek do Konserwatora Zabytków o wymianę okien</strong>
                <br />
                Opis: Wiesz, że przez stare okna skrzynkowe ucieka ciepło, ale samowolna wymiana może grozić karą? Pobierz wzór
                zapytania o warunki techniczne i zgodę na montaż cieplejszej stolarki bez naruszania historycznego wyglądu elewacji.
                <br />
                Gdzie złożyć: Biuro Miejskiego lub Wojewódzkiego Konserwatora Zabytków
              </li>
            </ul>
          </section>
          </div>
        </article>
      ) : null}
      {isGrantsPage ? (
        <article className="mt-4 mb-16 w-full bg-[#efefef] px-[50px] pt-8 pb-12">
          <div
            className="mx-[105px] border border-[#d4d4d4] bg-white px-12 pt-9 pb-10"
            style={{ fontFamily: '"Inclusive Sans", "Inter", "Segoe UI", sans-serif', fontSize: '22px', fontWeight: 400, lineHeight: 1.25 }}
          >
            <header>
              <h1 className="text-center" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.04 }}>
                Dofinansowania i Dotacje
              </h1>
              <p className="mt-6">
                <strong>Nie płać za wszystko z własnej kieszeni!</strong>
                <br />
                Przejrzyj listę dostępnych programów, zwróć uwagę na tagi z informacją, dla kogo przeznaczona jest dana dotacja, i
                przejdź bezpośrednio na stronę urzędu, aby pobrać wymagane dokumenty.
              </p>
            </header>

            <hr className="my-5 border-0 border-t border-[#8f8f8f]" />

            <section className="mt-8">
              <h2 style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.08 }}>Działania w Twoim mieszkaniu</h2>
              <p className="mt-3">Dla właścicieli lokali i najemców, którzy chcą ocieplić swoje mieszkanie od wewnątrz</p>

              <div className="mt-6 space-y-7">
                <div>
                  <h3 className="font-bold">Ciepłe Mieszkanie (Program Krajowy)</h3>
                  <p className="mt-1 font-bold">#właściciel #najemca_komunalny #okna_drzwi #wentylacja</p>
                  <p className="mt-2">
                    Dla kogo: Dla właścicieli mieszkań w kamienicach oraz najemców lokali komunalnych.
                    <br />
                    Na co: Wymiana nieszczelnych okien i drzwi, montaż nowoczesnej wentylacji (walka z pleśnią!) oraz wymiana starych
                    pieców.
                    <br />
                    Ważne: Wysokość dotacji zależy od Twoich zarobków (im niższy dochód, tym wyższy procent zwrotu kosztów - nawet do
                    90%).
                  </p>
                  <p className="mt-2 text-[#5d46c7] underline">Link do strony programu - dokumenty</p>
                </div>

                <div>
                  <h3 className="font-bold">Miejski Program Dotacji (Gdańsk)</h3>
                  <p className="mt-1 font-bold">#właściciel #wymiana_pieca #ogrzewanie</p>
                  <p className="mt-2">
                    Dla kogo: Dla właścicieli lokali z terenu Gdańska
                    <br />
                    Na co: Likwidacja starych pieców węglowych (tzw. &quot;kopciuchów&quot;) lub starych podgrzewaczy wody i podłączenie do
                    sieci miejskiej, gazu lub montaż ogrzewania elektrycznego.
                  </p>
                  <p className="mt-2 text-[#5d46c7] underline">Link do strony programu - Pobierz wniosek</p>
                </div>

                <div>
                  <h3 className="font-bold">Tarcza finansowa na rachunki</h3>
                  <p className="mt-2">Gdy mieszkanie jest zimne, a koszty ogrzewania przerastają domowy budżet</p>
                </div>

                <div>
                  <h3 className="font-bold">Dodatek Mieszkaniowy i Osłonowy</h3>
                  <p className="mt-1 font-bold">#właściciel #najemca #niskie_dochody</p>
                  <p className="mt-2">
                    Dla kogo: Dla każdego mieszkańca (niezależnie od formy własności), który z powodu niskich dochodów nie radzi sobie
                    z wysokimi rachunkami za ogrzewanie i czynsz.
                    <br />
                    Na co: Bezpośrednia pomoc finansowa wypłacana na konto w celu pokrycia kosztów utrzymania mieszkania.
                    <br />
                    Gdzie załatwić: W Gdańsku wnioski przyjmuje Gdańskie Centrum Świadczeń (GCŚ).
                  </p>
                  <p className="mt-2 text-[#5d46c7] underline">Link do strony programu - Warunki i wnioski</p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.08 }}>Dla całej kamienicy</h2>
              <p className="mt-3">Dla budynków wymagających kompleksowego ocieplenia od zewnątrz</p>

              <div className="mt-6 space-y-7">
                <div>
                  <h3 className="font-bold">Premia Termomodernizacyjna (BGK)</h3>
                  <p className="mt-1 font-bold">#wspólnota #zarządca #ocieplenie_budynku</p>
                  <p className="mt-2">
                    Dla kogo: Dla Wspólnot Mieszkaniowych i Zarządców.
                    <br />
                    Na co: Na kompleksowe ocieplenie ścian, wymianę nieszczelnych okien na klatkach schodowych, naprawę dachu i
                    modernizację całej instalacji grzewczej w budynku.
                    <br />
                    Jak to działa: Bank Gospodarstwa Krajowego (państwo) spłaca do 26% kredytu zaciągniętego przez Wspólnotę na
                    remont, jeśli audyt wykaże oszczędność energii.
                  </p>
                  <p className="mt-2 text-[#5d46c7] underline">Link do strony programu - Szczegóły premii</p>
                </div>

                <div>
                  <h3 className="font-bold">Grant Termomodernizacyjny (KPO)</h3>
                  <p className="mt-1 font-bold">#wspólnota #termomodernizacja</p>
                  <p className="mt-2">
                    Dla kogo: Dla Wspólnot realizujących głęboką termomodernizację z użyciem Premii z BGK.
                    <br />
                    Na co: Dodatkowy zastrzyk gotówki (dodatkowe 10% dofinansowania kosztów netto) za osiągnięcie bardzo wysokich
                    oszczędności energii.
                  </p>
                  <p className="mt-2 text-[#5d46c7] underline">Link do strony programu - Szczegóły grantu</p>
                </div>

                <div>
                  <h3 className="font-bold">Dotacje na remont budynków zabytkowych</h3>
                  <p className="mt-1 font-bold">#wspólnota #kamienica_zabytkowa</p>
                  <p className="mt-2">
                    Dla kogo: Dla właścicieli i zarządców obiektów wpisanych do rejestru zabytków.
                    <br />
                    Na co: Dofinansowanie nakładów na prace konserwatorskie, w tym naprawy historycznych elewacji i renowację
                    zabytkowej stolarki okiennej.
                  </p>
                  <p className="mt-2 text-[#5d46c7] underline">Link do strony programu - Dotacje dla zabytków</p>
                </div>
              </div>
            </section>
          </div>
        </article>
      ) : null}
    </main>
  )
}

export default NavOnlyPage
