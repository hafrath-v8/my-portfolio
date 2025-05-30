// components/Navbar.jsx
import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'stack', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-full px-6 py-2">
      <ul className="flex py-3  gap-7">
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec}`}
              className={`capitalize px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === sec
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-white/20'
              }`}
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
