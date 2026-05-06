import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'

const residentOptions = ['Najemcą', 'Mieszkańcem właścicielem', 'Właścicielem']
const heatingOptions = ['Ogrzewanie miejskie', 'Własny piec gazowy', 'Ogrzewanie elektryczne', 'Piec na paliwo stałe']
const heatLossOptions = ['Okna', 'Drzwi', 'Ściany', 'Podłoga']

function TestPerPage() {
  const [residentType, setResidentType] = useState('')
  const [budget, setBudget] = useState(0)
  const [heatingTypes, setHeatingTypes] = useState([])
  const [heatLoss, setHeatLoss] = useState([])

  const toggleHeatingType = (value) => {
    setHeatingTypes((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]))
  }

  const toggleHeatLoss = (value) => {
    setHeatLoss((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]))
  }

  const handleUnknownClick = () => {
    window.open('/article/main-article', '_blank', 'noopener,noreferrer')
  }

  const isFormComplete = residentType !== '' && heatingTypes.length > 0 && budget > 0 && heatLoss.length > 0

  return (
    <main className="min-h-screen bg-white text-black">
      <NavigationBar />

      <section className="mx-auto mt-[78px] mb-16 w-[1190px] rounded-[14px] bg-[#eeeeee] px-[40px] pt-10 pb-8">
        <h1 className="text-center text-[45px] leading-none font-bold text-black">WYGENERUJ PLAN</h1>

        <section className="mt-[34px]">
          <h2 className="text-[22px] leading-[1.15] font-bold text-black">Jesteś:</h2>
          <div className="mt-[18px] flex justify-center gap-[17px]">
            {residentOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setResidentType(option)}
                className={`h-[75px] w-[260px] px-3 text-center text-[30px] leading-[1.05] font-bold transition-colors ${
                  residentType === option ? 'bg-[rgba(189,77,67,0.68)] text-white' : 'bg-[#d9d9d9] text-black hover:bg-[#cfcfcf]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-[44px]">
          <h2 className="text-[22px] leading-[1.15] font-bold text-black">Jak ogrzewasz mieszkanie?</h2>
          <div className="mt-4 space-y-1">
            {heatingOptions.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-3 text-[30px] leading-[0.95] font-bold text-black">
                <input
                  type="checkbox"
                  checked={heatingTypes.includes(option)}
                  onChange={() => toggleHeatingType(option)}
                  className="h-[24px] w-[26px] appearance-none border border-[#9d9d9d] bg-white checked:border-[#BD4D43] checked:bg-[#BD4D43]"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mt-[38px]">
          <h2 className="text-[22px] leading-[1.15] font-bold text-black">Jaki masz budżet?</h2>
          <div className="mx-auto mt-[22px] w-[1120px]">
            <input
              type="range"
              min="0"
              max="5000"
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              className="h-[17px] w-full accent-[#5c1f19]"
            />
            <p className="mt-2 text-center text-[30px] leading-none font-bold text-black">{budget} zł</p>
          </div>
        </section>

        <section className="mt-[46px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] leading-[1.15] font-bold text-black">Gdzie ucieka ciepło?</h2>
            <button
              type="button"
              onClick={handleUnknownClick}
              className="h-[45px] w-[183px] cursor-pointer bg-[#d9d9d9] text-[30px] leading-none font-bold text-black hover:bg-[#cfcfcf]"
            >
              Nie wiem
            </button>
          </div>
          <div className="mt-3 space-y-1">
            {heatLossOptions.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-3 text-[30px] leading-[0.95] font-bold text-black">
                <input
                  type="checkbox"
                  checked={heatLoss.includes(option)}
                  onChange={() => toggleHeatLoss(option)}
                  className="h-[24px] w-[26px] appearance-none border border-[#9d9d9d] bg-white checked:border-[#BD4D43] checked:bg-[#BD4D43]"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </section>

        {isFormComplete ? (
          <>
            <div className="mt-[28px] ml-[-40px] w-[1190px] bg-[rgba(189,77,67,0.68)] py-4 text-center text-[48px] leading-none font-bold text-white">
              DIAGNOZA
            </div>

            <section className="mt-8">
              <h2 className="text-[22px] leading-[1.15] font-bold text-black">Powinieneś:</h2>
              <div className="mx-auto mt-3 h-[840px] w-[990px] overflow-hidden border border-[#cfcfcf] bg-[#d9d9d9]">
                <iframe
                  src="/article/article-3?embed=1"
                  title="Artykuł article-3"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </section>
          </>
        ) : null}
      </section>
    </main>
  )
}

export default TestPerPage
