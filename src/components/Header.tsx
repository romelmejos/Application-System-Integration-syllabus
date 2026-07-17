import { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, ExternalLink, Laptop } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'calculator', label: 'Grade Calculator' },
    { id: 'sections', label: 'Sections' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3 border-b-4 border-hau-gold text-stone-900'
          : 'bg-hau-maroon text-white py-5 border-b-4 border-hau-gold'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & School Branding */}
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg transition-colors font-black ${scrolled ? 'bg-hau-maroon/10 text-hau-maroon border border-hau-maroon/20' : 'bg-white text-hau-maroon border-2 border-hau-gold'}`}>
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`font-display font-extrabold text-lg sm:text-xl leading-none tracking-tight ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                  Holy Angel University
                </span>
                <span className={`hidden sm:inline-block px-2 py-0.5 text-[9px] font-mono rounded font-black uppercase ${scrolled ? 'bg-hau-maroon/10 text-hau-maroon' : 'bg-white/20 text-hau-gold'}`}>
                  SOC
                </span>
              </div>
              <p className={`text-[10px] uppercase font-bold tracking-widest mt-1 ${scrolled ? 'text-stone-500' : 'text-stone-200'}`}>
                School of Computing • Department of Computer Science
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => {
                  onNavClick(item.id);
                  setIsOpen(false);
                }}
                className={`px-3 py-2 text-xs uppercase font-black tracking-wider transition-all duration-200 ${
                  activeSection === item.id
                    ? scrolled
                      ? 'bg-hau-maroon text-white shadow-sm ring-1 ring-hau-maroon/20'
                      : 'bg-hau-gold text-stone-950 font-black'
                    : scrolled
                    ? 'text-stone-600 hover:text-hau-maroon hover:bg-stone-100'
                    : 'text-stone-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-canvas-btn"
              href="https://hau.instructure.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-black tracking-widest uppercase transition-all duration-300 border-2 ${
                scrolled
                  ? 'bg-hau-maroon border-hau-maroon text-white hover:bg-hau-maroon-light'
                  : 'bg-white border-hau-gold text-hau-maroon hover:bg-stone-100'
              }`}
            >
              <span>Canvas LMS</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-stone-200 hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4 border-t border-stone-200 bg-white' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mob-nav-${item.id}`}
              onClick={() => {
                onNavClick(item.id);
                setIsOpen(false);
              }}
              className={`w-full text-left block px-4 py-2.5 rounded-md text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-hau-maroon text-white'
                  : 'text-stone-600 hover:bg-stone-50 hover:text-hau-maroon'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-stone-100 flex flex-col gap-2 px-4">
            <a
              id="mob-header-canvas-btn"
              href="https://hau.instructure.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-md text-sm font-semibold tracking-wider uppercase bg-hau-maroon text-white text-center hover:bg-hau-maroon-light"
            >
              <span>Canvas LMS</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              id="mob-header-portal-btn"
              href="https://portal.hau.edu.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-md text-sm font-semibold tracking-wider uppercase bg-stone-100 text-stone-700 text-center hover:bg-stone-200"
            >
              <span>Student Portal</span>
              <Laptop className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
