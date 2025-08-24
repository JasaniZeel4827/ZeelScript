'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition duration-300 ${
              isActive(link.path)
                ? 'bg-white text-gray-900 hover:bg-white/90'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
