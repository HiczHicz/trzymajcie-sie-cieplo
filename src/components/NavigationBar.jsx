import { NavLink } from 'react-router-dom'

const NAV_BG = '#aa2b1f'

const projectIconUrl = 'https://www.figma.com/api/mcp/asset/72de2231-6f09-4324-8a03-f4ffeb3809d9'
const searchIconUrl = 'https://www.figma.com/api/mcp/asset/6c3d50e3-aace-4014-95ce-a16ec8efe1ad'

const navItems = [
  { id: 'domowe-sposoby', label: 'Domowe sposoby', to: '/domowe-sposoby' },
  { id: 'modernizacja', label: 'Modernizacja', to: '/modernizacja' },
  { id: 'wnioski', label: 'Wnioski, dokumenty', to: '/wnioski-dokumenty' },
  { id: 'dotacje', label: 'Znajdź dotację', to: '/znajdz-dotacje' },
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
    <div className="sticky top-0 z-40 w-full" style={{ backgroundColor: NAV_BG }}>
      <header className="flex h-[82px] w-full items-center text-white">
        <NavLink
          to="/"
          end
          aria-label="Strona główna"
          className={({ isActive }) =>
            `flex h-full w-[312px] items-center justify-center gap-2.5 transition-colors ${
              isActive ? 'bg-[#5c1f19]' : 'hover:bg-[#5c1f19]'
            }`
          }
        >
          <WhiteIcon src={projectIconUrl} className="h-[47px] w-[47px] shrink-0" />
          <p className="text-[19px] leading-tight font-black tracking-tight">
            TRZYMAJCIE
            <br />
            SIĘ CIEPŁO
          </p>
        </NavLink>

        <nav className="flex h-full min-w-0 flex-1 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `flex h-full w-[260.5px] items-center justify-center text-center text-[22px] leading-[1.1] font-bold whitespace-nowrap transition-colors ${
                  isActive ? 'bg-[#5c1f19]' : 'hover:bg-[#5c1f19]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="flex h-full w-[88px] cursor-pointer items-center justify-center transition-colors hover:bg-[#5c1f19]"
          aria-label="Szukaj"
          title="Szukaj"
        >
          <WhiteIcon src={searchIconUrl} className="h-[41px] w-[41px]" />
        </button>
      </header>
    </div>
  )
}

export default NavigationBar
