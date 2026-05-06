import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'

const residentOptions = ['Najemcą', 'Mieszkańcem właścicielem', 'Właścicielem']

const heatingOptions = [
  'Ogrzewanie miejskie',
  'Własny piec gazowy',
  'Ogrzewanie elektryczne',
  'Piec na paliwo stałe',
]

const extraSections = [
  {
    title: 'Jakie problemy odczuwasz zimą?',
    options: ['Za niska temperatura w mieszkaniu', 'Wysokie rachunki', 'Wilgoć i pleśń', 'Przewiewy z okien'],
  },
  {
    title: 'Które pomieszczenia wymagają poprawy?',
    options: ['Salon', 'Sypialnia', 'Kuchnia', 'Łazienka'],
  },
  {
    title: 'Jakie działania bierzesz pod uwagę?',
    options: ['Wymiana okien', 'Docieplenie ścian', 'Regulacja instalacji', 'Wymiana źródła ciepła'],
  },
  {
    title: 'Jaki jest Twój orientacyjny budżet?',
    options: ['Do 5 000 zł', '5 000 - 15 000 zł', '15 000 - 30 000 zł', 'Powyżej 30 000 zł'],
  },
]

function CheckboxGroup({ title, options }) {
  return (
    <section className="mt-20">
      <h3 className="text-center text-[22px] leading-[1.2] font-bold text-black">{title}</h3>
      <div className="mx-auto mt-8 max-w-[760px] space-y-4">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-4 text-[22px] leading-7 font-bold text-black">
            <input type="checkbox" className="h-[37px] w-[37px] accent-[#5C1F19]" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </section>
  )
}

function TestPerPage() {
  const [residentType, setResidentType] = useState('')

  return (
    <main className="min-h-screen bg-white text-black">
      <NavigationBar />

      <section className="mx-auto mt-[78px] mb-16 min-h-[2342px] w-[1190px] rounded-[40px] bg-[#eee] px-10 pt-8 pb-24">
        <h1 className="text-center text-[22px] leading-[1.2] font-bold text-black">WYGENERUJ PLAN</h1>

        <h2 className="mt-8 text-center text-[22px] leading-[1.2] font-bold text-black">Jesteś:</h2>
        <div className="mt-10 flex justify-center gap-[46px]">
          {residentOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setResidentType(option)}
              className={`h-[106px] w-[302px] px-3 text-center text-[22px] leading-[1.15] font-bold transition-colors ${
                residentType === option ? 'bg-[#5C1F19] text-white' : 'bg-[#d9d9d9] text-black hover:bg-[#cfcfcf]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <CheckboxGroup title="Jak ogrzewasz mieszkanie?" options={heatingOptions} />
        {extraSections.map((section) => (
          <CheckboxGroup key={section.title} title={section.title} options={section.options} />
        ))}
      </section>
    </main>
  )
}

export default TestPerPage
