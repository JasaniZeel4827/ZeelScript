'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';

export const Navigation = () => {
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'projects', path: '/projects'},
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link 
          href="/" 
          className={`text-xl font-serif font-medium transition-colors ${
            pathname === '/' ? 'text-emerald-400' : 'text-white/80 hover:text-emerald-400'
          }`}
          onClick={scrollToTop}
        >
          Portfolio
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  pathname === link.path 
                    ? 'text-emerald-400' 
                    : 'text-white/80 hover:text-emerald-400'
                }`}
                onClick={scrollToTop}
              >
                {link.name}
                {pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
