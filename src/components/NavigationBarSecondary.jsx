const BAR_BG = '#901D12'
const ACTIVE_BG = '#5C1F19'

function NavigationBarSecondary({ selectedAudience, onSelectAudience }) {
  return (
    <div className="w-full" style={{ backgroundColor: BAR_BG }}>
      <div className="flex h-[38px] w-full">
        <button
          type="button"
          onClick={() => onSelectAudience('tenant')}
          className={`h-full w-1/2 cursor-pointer text-[22px] leading-[1.1] font-bold text-white transition-colors hover:bg-[#5C1F19] ${
            selectedAudience === 'tenant' ? 'bg-[#5C1F19]' : ''
          }`}
        >
          Najemca
        </button>
        <button
          type="button"
          onClick={() => onSelectAudience('owner')}
          className={`h-full w-1/2 cursor-pointer text-[22px] leading-[1.1] font-bold text-white transition-colors hover:bg-[#5C1F19] ${
            selectedAudience === 'owner' ? 'bg-[#5C1F19]' : ''
          }`}
        >
          Właściciel
        </button>
      </div>
    </div>
  )
}

export default NavigationBarSecondary
