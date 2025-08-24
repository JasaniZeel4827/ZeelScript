// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// const footerLinks = [
//   {
//     title: 'github',
//     href: 'https://github.com/JasaniZeel4827',
//     icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
//   },
//   {
//     title: 'twitter',
//     href: 'https://x.com/deltapixel3777',
//     icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.96 4.96 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
//   },
//   {
//     title: 'instagram',
//     href: 'https://www.instagram.com/___zeelll___?igsh=MTZjZ2NmNG5wMGk5NA==',
//     icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
//   },
//   {
//     title: 'linkedin',
//     href: 'https://www.linkedin.com/in/zeel-jasani-808417365?utm_source=share&utm_medium=android_app&utm_campaign=share_via',
//     icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
//   }
// ]

// export const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="relative -z-10 overflow-x-clip mt-16">
//       <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
//       <div className="container px-4 mx-auto">
//         <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-white/60">Zeel Jasani.</div>
//           <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
//             {footerLinks.map((link) => (
//               <a 
//                 href={link.href} 
//                 key={link.title} 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-200 cursor-pointer"
//                 aria-label={`Visit my ${link.title} profile`}
//               >
//                 <svg
//                   className="w-5 h-5 text-white/80 group-hover:text-emerald-400 transition-colors flex-shrink-0"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path d={link.icon} />
//                 </svg>
//                 <span className="font-medium text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
//                   {link.title}
//                 </span>
//                 <ArrowUpRightIcon className="w-3.5 h-3.5 text-white/60 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// };








import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'github',
    href: 'https://github.com/JasaniZeel4827',
    icon: Github
  },
  {
    title: 'twitter',
    href: 'https://x.com/deltapixel3777',
    icon: Twitter
  },
  {
    title: 'instagram',
    href: 'https://www.instagram.com/___zeelll___?igsh=MTZjZ2NmNG5wMGk5NA==',
    icon: Instagram
  },
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/zeel-jasani-808417365?utm_source=share&utm_medium=android_app&utm_campaign=share_via',
    icon: Linkedin
  }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 overflow-x-clip mt-16">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60">Zeel Jasani.</div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map(({ title, href, icon: Icon }) => (
              <a 
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-200 cursor-pointer select-none"
                aria-label={`Visit my ${title} profile`}
              >
                <Icon 
                  className="w-5 h-5 text-white/80 group-hover:text-emerald-400 transition-colors flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
                  {title}
                </span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 text-white/60 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};