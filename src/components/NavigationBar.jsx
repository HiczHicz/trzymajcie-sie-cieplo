import { NavLink } from 'react-router-dom'

const NAV_BG = '#aa2b1f'

const projectIconUrl =
  '/@fs/C:/Users/annag/.cursor/projects/c-Users-annag-trzymajcie-sie-cieplo-trzymajcie-sie-cieplo/assets/c__Users_annag_AppData_Roaming_Cursor_User_workspaceStorage_10e6060da0851eec8ce5b1c08ea1d7a9_images_logo_trzymajcie_sie_cieplo-700f5efc-0307-4e00-b235-cddd560d93ac.png'
const searchIconUrl = 'https://www.figma.com/api/mcp/asset/6c3d50e3-aace-4014-95ce-a16ec8efe1ad'

const navItems = [
  { id: 'domowe-sposoby', label: 'Test', to: '/test-per' },
  { id: 'modernizacja', label: 'Baza Wiedzy', to: '/modernizacja' },
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

function ProjectLogo({ src, className }) {
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
        WebkitMaskMode: 'luminance',
        maskMode: 'luminance',
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
            `flex h-full w-[312px] items-center justify-center gap-0.5 pr-2 pt-1 transition-colors ${
              isActive ? 'bg-[#5c1f19]' : 'hover:bg-[#5c1f19]'
            }`
          }
        >
          <ProjectLogo src={projectIconUrl} className="h-[112px] w-[112px] shrink-0 -ml-2" />
          <p className="-ml-4 text-[19px] leading-tight font-black tracking-tight">
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
