import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Album from './components/Album'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen text-slate-100 dark:text-slate-900">
      <Navbar />
      <main className="space-y-10">
        <Home />
        <About />
        <Skills />
        <Album />
        <Contact />
      </main>
      <footer className="border-t border-white/10 dark:border-slate-200 bg-slate-950/80 dark:bg-white/80 py-5 text-center text-sm text-slate-400 dark:text-slate-600">
        © {new Date().getFullYear()} My Portfolio — Crafted with React & Tailwind CSS
      </footer>
    </div>
  )
}

export default App
