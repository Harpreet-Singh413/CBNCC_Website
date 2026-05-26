import { motion } from 'framer-motion';
import OurDomains from './components/OurDomains';

function App() {
  return (
    <div className="min-h-screen bg-[#ECEBEC] text-[#111111] flex flex-col justify-between selection:bg-brand-dark selection:text-[#ECEBEC]">
      
      {/* Premium Header/Navigation */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 w-full z-50 bg-[#ECEBEC]/80 backdrop-blur-xl border-b border-[#111111]/5 px-6 md:px-12 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center text-[#ECEBEC] font-sora font-extrabold text-sm tracking-tighter">
              C
            </div>
            <span className="font-sora font-bold text-lg tracking-tight text-brand-dark">
              CBNCC
            </span>
          </div>

          {/* Nav links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Domains', 'Events', 'Team'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="font-space text-xs font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-dark transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Join CTA */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-space text-xs font-bold uppercase tracking-wider bg-brand-dark text-[#ECEBEC] px-5 py-2.5 rounded-full hover:bg-brand-dark/90 hover:shadow-premium transition-all duration-300"
          >
            Join Club
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow">
        <OurDomains />
      </main>

      {/* Premium Footer */}
      <footer className="w-full border-t border-[#111111]/5 bg-[#ECEBEC] px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#111111] flex items-center justify-center text-[#ECEBEC] font-sora font-bold text-xs">
              C
            </div>
            <p className="font-space text-xs font-semibold text-brand-dark/50">
              © 2026 Code Busters & Coding Club. Engineered for excellence.
            </p>
          </div>
          
          <div className="flex gap-6">
            {['GitHub', 'Discord', 'Twitter', 'Privacy'].map((social) => (
              <a 
                key={social} 
                href="#"
                className="font-space text-xs font-medium text-brand-muted hover:text-brand-dark transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
