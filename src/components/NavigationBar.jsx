const NAV_BG = '#aa2b1f'
const NAV_ACTIVE_BG = '#5c1f19'

const projectIconUrl = 'https://www.figma.com/api/mcp/asset/72de2231-6f09-4324-8a03-f4ffeb3809d9'
const homeIconUrl = 'https://www.figma.com/api/mcp/asset/8f658427-7733-4327-91dc-1841451f72eb'
const searchIconUrl = 'https://www.figma.com/api/mcp/asset/6c3d50e3-aace-4014-95ce-a16ec8efe1ad'

const navItems = [
  { id: 'domowe-sposoby', label: 'Domowe sposoby' },
  { id: 'modernizacja', label: 'Modernizacja' },
  { id: 'wnioski', label: 'Wnioski, dokumenty' },
  { id: 'dotacje', label: 'Znajdź dotację' },
]

function WhiteIcon({ src, className }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        backgroundColor: '#FFFFFF',
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        boxShadow: 'inset 0 0 0 40px #FFFFFF',
      }}
    />
  )
}

function NavigationBar() {
  return (
    <header
      className="mx-auto flex h-[82px] w-full max-w-[1440px] items-center text-white"
      style={{ backgroundColor: NAV_BG }}
    >
      <div className="flex h-full items-center border-r border-white/25 pr-4 pl-[21px]">
        <WhiteIcon src={projectIconUrl} className="mr-2.5 h-[47px] w-[47px] shrink-0" />
        <p className="text-[19px] leading-tight font-black tracking-tight">
          TRZYMAJCIE
          <br />
          SIĘ CIEPŁO
        </p>
      </div>

      <button
        className="flex h-full w-[88px] items-center justify-center"
        style={{ backgroundColor: NAV_ACTIVE_BG }}
        aria-label="Strona główna"
      >
        <WhiteIcon src={homeIconUrl} className="h-9 w-[35px]" />
      </button>

      <nav className="flex min-w-0 flex-1 items-center justify-evenly px-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className="px-2 text-center text-[22px] leading-[1.1] font-bold whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button className="mr-3 flex h-[41px] w-[41px] items-center justify-center" aria-label="Szukaj">
        <WhiteIcon src={searchIconUrl} className="h-[41px] w-[41px]" />
      </button>
    </header>
  )
}

export default NavigationBar
