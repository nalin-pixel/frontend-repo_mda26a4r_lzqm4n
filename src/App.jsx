import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bento from './components/Bento'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Iridescent gradient background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(1200px_800px_at_-10%_-10%,rgba(34,211,238,0.12),transparent_60%),radial-gradient(1200px_800px_at_110%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(1400px_900px_at_50%_120%,rgba(163,230,53,0.10),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Bento />
      <Footer />
      <CursorGlow />
    </div>
  )
}

export default App