import { FaLaptopCode, FaUser, FaTools, FaImages, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../ThemeContext'

const menuItems = [
  { id: 'home', label: 'HoMe', icon: FaLaptopCode },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'skills', label: 'Skills', icon: FaTools },
  { id: 'album', label: 'Album', icon: FaImages },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 dark:border-slate-200 backdrop-blur-md bg-slate-950/70 dark:bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 text-sm sm:px-6 lg:px-8">
        <a href="#home" className="font-semibold text-brand-300 dark:text-brand-600 tracking-wide hover:text-brand-100 dark:hover:text-brand-700">
          My Portfolio
        </a>
        <nav>
          <ul className="flex items-center gap-2 text-white/80 dark:text-slate-600">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-white/10 dark:hover:bg-slate-200 hover:text-white dark:hover:text-slate-900"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.label}
                  </a>
                </li>
              )
            })}
            <li>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-white/10 dark:hover:bg-slate-200 hover:text-white dark:hover:text-slate-900"
                aria-label="Toggle theme"
              >
                {isDark ? <FaSun className="h-3.5 w-3.5" /> : <FaMoon className="h-3.5 w-3.5" />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
