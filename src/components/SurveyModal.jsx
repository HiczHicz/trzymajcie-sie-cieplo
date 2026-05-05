import { useEffect, useState } from 'react'

const STORAGE_KEY = 'surveyStatus'

function SurveyModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedStatus = localStorage.getItem(STORAGE_KEY)
    if (!savedStatus) {
      setIsOpen(true)
    }
  }, [])

  const handleSelectStatus = (status) => {
    localStorage.setItem(STORAGE_KEY, status)
    setIsOpen(false)
  }

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, 'didnt_specify')
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[3px]" />

      <section className="relative mx-auto mt-[420px] h-[177.675px] w-[747px] border-2 border-black bg-white px-6 pt-3 pb-4">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Zamknij ankietę"
          className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center cursor-pointer"
        >
          <span className="absolute h-[1px] w-4 rotate-45 bg-[#737373]" />
          <span className="absolute h-[1px] w-4 -rotate-45 bg-[#737373]" />
        </button>

        <h2 className="text-[30px] leading-[1.1] font-bold text-black">Jesteś...</h2>

        <div className="mt-6 flex gap-[50px]">
          <button
            type="button"
            onClick={() => handleSelectStatus('tenant')}
            className="h-[46.353px] w-[313.8px] cursor-pointer rounded-[5px] bg-[#d9d9d9] text-center text-[30px] leading-[1] font-bold text-black transition-colors duration-150 hover:bg-[#717171]"
          >
            najemcą
          </button>
          <button
            type="button"
            onClick={() => handleSelectStatus('owner')}
            className="h-[46.353px] w-[313.8px] cursor-pointer rounded-[5px] bg-[#d9d9d9] text-center text-[30px] leading-[1] font-bold text-black transition-colors duration-150 hover:bg-[#717171]"
          >
            właścicielem
          </button>
        </div>

        <p className="mt-8 text-[15px] leading-[1.2] font-medium text-[#898989]">
          Odpowiadając na te pytanie sprawiasz, że artykuły będą bardziej dopasowane do Twojej sytuacji.
        </p>
      </section>
    </div>
  )
}

export default SurveyModal
