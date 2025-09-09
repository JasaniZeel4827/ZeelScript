// // import { SectionHeader } from '@/components/SectionHeader';
// // import { Card } from '@/components/Card';
// // import grainImage from '@/assets/images/grain.jpg';
// // import { Code, Globe, Github } from 'lucide-react';

// // const projects = [
// //   {
// //     title: 'Portfolio Website',
// //     description: 'A modern portfolio built with Next.js, TypeScript, and Tailwind CSS featuring dark mode and smooth animations.',
// //     technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
// //     demoUrl: '/',
// //     codeUrl: 'https://github.com/yourusername/portfolio',
// //   },
// //   {
// //     title: 'E-commerce Dashboard',
// //     description: 'Admin dashboard with analytics, product management, and order tracking for e-commerce businesses.',
// //     technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
// //     demoUrl: '#',
// //     codeUrl: 'https://github.com/yourusername/ecommerce-dashboard',
// //   },
// //   {
// //     title: 'Task Manager',
// //     description: 'Collaborative task management app with real-time updates and team features.',
// //     technologies: ['Next.js', 'Firebase', 'TypeScript'],
// //     demoUrl: '#',
// //     codeUrl: 'https://github.com/yourusername/task-manager',
// //   },
// //   {
// //     title: 'Recipe Finder',
// //     description: 'Discover and save recipes with nutritional information and cooking instructions.',
// //     technologies: ['React', 'Spoonacular API', 'Context API'],
// //     demoUrl: '#',
// //     codeUrl: 'https://github.com/yourusername/recipe-finder',
// //   },
// // ];

// // export default function ProjectsPage() {
// //   return (
// //     <div className="min-h-screen">
// //       <main className="pt-20 pb-16">
// //         <div className="relative">
// //           <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>

// //           <div className="container px-4 mx-auto">
// //             <SectionHeader
// //               eyebrow="My Work"
// //               title="Featured Projects"
// //               description="A collection of my recent work and side projects. Each project was built to solve real-world problems and improve my skills."
// //             />

// //             <div className="mt-12 grid gap-8 md:grid-cols-2">
// //               {projects.map((project, index) => (
// //                 <Card key={index} className="group hover:border-emerald-400/50 transition-colors h-full">
// //                   <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-emerald-400/10 rounded-t-lg flex items-center justify-center">
// //                     <Code className="w-12 h-12 text-emerald-400/30 group-hover:scale-110 transition-transform" />
// //                   </div>

// //                   <div className="p-6">
// //                     <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
// //                     <p className="text-white/70 mb-4">{project.description}</p>

// //                     <div className="flex flex-wrap gap-2 mb-6">
// //                       {project.technologies.map((tech, i) => (
// //                         <span key={i} className="text-xs font-medium px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full">
// //                           {tech}
// //                         </span>
// //                       ))}
// //                     </div>

// //                     <div className="flex items-center gap-4 pt-4 border-t border-white/5">
// //                       <a 
// //                         href={project.demoUrl} 
// //                         className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         <Globe className="w-4 h-4" />
// //                         Live Demo
// //                       </a>
// //                       <a 
// //                         href={project.codeUrl} 
// //                         className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-emerald-400 transition-colors"
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         <Github className="w-4 h-4" />
// //                         View Code
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </Card>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

















// import { SectionHeader } from '@/components/SectionHeader';
// import { Card } from '@/components/Card';
// import { WindowControls } from '@/components/WindowControls';
// import grainImage from '@/assets/images/grain.jpg';
// import { Code, Globe, Github } from 'lucide-react';
// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
// import masterjiLMS from "@/assets/images/masterjiLMS.png";
// import masterjiLMSMobile from "@/assets/images/masterjiLMSMobile.png";
// import masterjistream from "@/assets/images/masterjistream.png";
// import gta6 from "@/assets/images/gta6.png";
// import Image from 'next/image';

// // const projects = [
// // {
// //   title: 'Portfolio Website',
// //   description: 'A modern portfolio built with Next.js, TypeScript, and Tailwind CSS featuring dark mode and smooth animations.',
// //   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
// //   demoUrl: '/',
// //   codeUrl: 'https://github.com/yourusername/portfolio',
// // },
// // {
// //   title: 'E-commerce Dashboard',
// //   description: 'Admin dashboard with analytics, product management, and order tracking for e-commerce businesses.',
// //   technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
// //   demoUrl: '#',
// //   codeUrl: 'https://github.com/yourusername/ecommerce-dashboard',
// // },
// // {
// //   title: 'Task Manager',
// //   description: 'Collaborative task management app with real-time updates and team features.',
// //   technologies: ['Next.js', 'Firebase', 'TypeScript'],
// //   demoUrl: '#',
// //   codeUrl: 'https://github.com/yourusername/task-manager',
// // },
// // {
// //   title: 'Recipe Finder',
// //   description: 'Discover and save recipes with nutritional information and cooking instructions.',
// //   technologies: ['React', 'Spoonacular API', 'Context API'],
// //   demoUrl: '#',
// //   codeUrl: 'https://github.com/yourusername/recipe-finder',
// // },
// // {
// //   company: "Masterji",
// //   year: "2024",
// //   title: "Masterji - Modern LMS",
// //   results: [
// //     { title: "Simplified course creation and management for instructors" },
// //     { title: "Improved user experience with responsive design" },
// //     { title: "Integrated secure file management with AWS S3" },
// //   ],
// //   link: "https://github.com/JasaniZeel4827/masterjiLMS", // Replace with live demo / video
// //   image: masterjiLMS,
// //   technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
// // },
// // {
// //   company: "Masterji",
// //   year: "2024",
// //   title: "Masterji Stream - Video Conferencing Module",
// //   results: [
// //     { title: "Integrated HD video + audio conferencing into Masterji LMS" },
// //     { title: "Enabled real-time chat, scheduling & responsive UI" },
// //     { title: "Added premium features: recording, screen sharing, AI summaries" },
// //   ],
// //   link: "https://your-stream-demo-url.com", // Replace with Masterji Stream demo
// //   image: masterjistream,
// //   technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
// // },
// // {
// //   company: "Rockstar Inspired",
// //   year: "2025",
// //   title: "GTA-6 Landing Page",
// //   results: [
// //     { title: "Created high-impact animated intro with GSAP timelines" },
// //     { title: "Implemented parallax hero with mouse-driven effects" },
// //     { title: "Delivered smooth character reveal & optimized asset loading" },
// //   ],
// //   link: "https://your-gta6-demo-url.com", // Replace with GTA-6 project live/demo link
// //   image: gta6, // Import project image
// //   technologies: ['Game Development', 'C++', 'AI Programming', 'Performance Optimization'],
// // },

// const portfolioProjects = [
//   {
//     company: "Masterji",
//     year: "2024",
//     title: "Masterji - Modern LMS",
//     results: [
//       { title: "Simplified course creation and management for instructors" },
//       { title: "Improved user experience with responsive design" },
//       { title: "Integrated secure file management with AWS S3" },
//     ],
//     link: "https://github.com/JasaniZeel4827/masterjiLMS",
//     image: masterjiLMS,
//     technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "AWS S3", "Clerk"],
//   },
//   {
//     company: "Masterji",
//     year: "2024",
//     title: "Masterji Stream - Video Conferencing Module",
//     results: [
//       { title: "Integrated HD video + audio conferencing into Masterji LMS" },
//       { title: "Enabled real-time chat, scheduling & responsive UI" },
//     ],
//     link: "https://github.com/JasaniZeel4827/sassforMasterji",
//     image: masterjistream,
//     technologies: ["WebRTC", "Socket.io", "React", "Node.js", "MongoDB"],
//   },
//   {
//     company: "Rockstar Inspired",
//     year: "2025",
//     title: "GTA-6 Landing Page",
//     results: [
//       { title: "Created high-impact animated intro with GSAP timelines" },
//       { title: "Implemented parallax hero with mouse-driven effects" },
//       { title: "Delivered smooth character reveal & optimized asset loading" },
//     ],
//     link: "https://github.com/JasaniZeel4827/brainwave", 
//     image: gta6, 
//     technologies: ["React", "Vite", "GSAP", "TailwindCSS"],
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <div className="min-h-screen">
//       <main className="pt-20 pb-16">
//         <div className="relative">
//           <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>

//           <div className="container px-4 mx-auto">
//             <SectionHeader
//               eyebrow="My Work"
//               title="Featured Projects"
//               description="A collection of my recent work and side projects. Each project was built to solve real-world problems and improve my skills."
//             />

//             <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
//               {portfolioProjects.map((project, index) => (
//                 <Card key={index} className="group hover:border-emerald-400/50 transition-colors h-full flex flex-col">
//                   {/* macOS-style header */}
//                   <div className="px-4 py-2.5 border-b border-white/5 flex items-center bg-gradient-to-b from-white/5 to-transparent">
//                     <div className="flex space-x-1.5 mr-3">
//                       <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
//                       <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
//                       <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
//                     </div>
//                     <div className="text-xs text-white/50 truncate flex-1 text-center pr-8">
//                       {project.company}
//                     </div>
//                   </div>

//                   {/* Project content */}
//                   <div className="flex-1 flex flex-col">
//                     <div className="relative h-40 sm:h-48 overflow-hidden">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                         width={800}
//                         height={450}
//                       />
//                     </div>

//                     <div className="p-4 sm:p-6 flex-1 flex flex-col">
//                       <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
//                       <p className="text-white/70 mb-4">{project.results[0].title}</p>

//                       <div className="flex flex-wrap gap-2 mb-6 mt-auto">
//                         {project.technologies.map((tech, i) => (
//                           <span key={i} className="px-2.5 py-1 bg-white/5 rounded-full text-xs font-medium text-white/70">
//                             {tech}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="flex items-center pt-4 border-t border-white/5">
//                         <a
//                           href={project.link}
//                           className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-lg hover:bg-white/10"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <Github className="w-4 h-4" />
//                           View on GitHub
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }







// import { SectionHeader } from '@/components/SectionHeader';
// import { Card } from '@/components/Card';
// import grainImage from '@/assets/images/grain.jpg';
// import { Code, Globe, Github } from 'lucide-react';

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'A modern portfolio built with Next.js, TypeScript, and Tailwind CSS featuring dark mode and smooth animations.',
//     technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
//     demoUrl: '/',
//     codeUrl: 'https://github.com/yourusername/portfolio',
//   },
//   {
//     title: 'E-commerce Dashboard',
//     description: 'Admin dashboard with analytics, product management, and order tracking for e-commerce businesses.',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
//     demoUrl: '#',
//     codeUrl: 'https://github.com/yourusername/ecommerce-dashboard',
//   },
//   {
//     title: 'Task Manager',
//     description: 'Collaborative task management app with real-time updates and team features.',
//     technologies: ['Next.js', 'Firebase', 'TypeScript'],
//     demoUrl: '#',
//     codeUrl: 'https://github.com/yourusername/task-manager',
//   },
//   {
//     title: 'Recipe Finder',
//     description: 'Discover and save recipes with nutritional information and cooking instructions.',
//     technologies: ['React', 'Spoonacular API', 'Context API'],
//     demoUrl: '#',
//     codeUrl: 'https://github.com/yourusername/recipe-finder',
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <div className="min-h-screen">
//       <main className="pt-20 pb-16">
//         <div className="relative">
//           <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>

//           <div className="container px-4 mx-auto">
//             <SectionHeader
//               eyebrow="My Work"
//               title="Featured Projects"
//               description="A collection of my recent work and side projects. Each project was built to solve real-world problems and improve my skills."
//             />

//             <div className="mt-12 grid gap-8 md:grid-cols-2">
//               {projects.map((project, index) => (
//                 <Card key={index} className="group hover:border-emerald-400/50 transition-colors h-full">
//                   <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-emerald-400/10 rounded-t-lg flex items-center justify-center">
//                     <Code className="w-12 h-12 text-emerald-400/30 group-hover:scale-110 transition-transform" />
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
//                     <p className="text-white/70 mb-4">{project.description}</p>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.technologies.map((tech, i) => (
//                         <span key={i} className="text-xs font-medium px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex items-center gap-4 pt-4 border-t border-white/5">
//                       <a 
//                         href={project.demoUrl} 
//                         className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Globe className="w-4 h-4" />
//                         Live Demo
//                       </a>
//                       <a 
//                         href={project.codeUrl} 
//                         className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-emerald-400 transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Github className="w-4 h-4" />
//                         View Code
//                       </a>
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

















import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { WindowControls } from '@/components/WindowControls';
import grainImage from '@/assets/images/grain.jpg';
import { Code, Globe, Github } from 'lucide-react';
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import masterjiLMS from "@/assets/images/masterjiLMS.png";
import masterjiLMSMobile from "@/assets/images/masterjiLMSMobile.png";
import masterjistream from "@/assets/images/masterjistream.png";
import gta6 from "@/assets/images/gta6.png";
import Image from 'next/image';
import githubpro from '@/assets/images/githubpro.png';

// const projects = [
// {
//   title: 'Portfolio Website',
//   description: 'A modern portfolio built with Next.js, TypeScript, and Tailwind CSS featuring dark mode and smooth animations.',
//   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
//   demoUrl: '/',
//   codeUrl: 'https://github.com/yourusername/portfolio',
// },
// {
//   title: 'E-commerce Dashboard',
//   description: 'Admin dashboard with analytics, product management, and order tracking for e-commerce businesses.',
//   technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
//   demoUrl: '#',
//   codeUrl: 'https://github.com/yourusername/ecommerce-dashboard',
// },
// {
//   title: 'Task Manager',
//   description: 'Collaborative task management app with real-time updates and team features.',
//   technologies: ['Next.js', 'Firebase', 'TypeScript'],
//   demoUrl: '#',
//   codeUrl: 'https://github.com/yourusername/task-manager',
// },
// {
//   title: 'Recipe Finder',
//   description: 'Discover and save recipes with nutritional information and cooking instructions.',
//   technologies: ['React', 'Spoonacular API', 'Context API'],
//   demoUrl: '#',
//   codeUrl: 'https://github.com/yourusername/recipe-finder',
// },
// {
//   company: "Masterji",
//   year: "2024",
//   title: "Masterji - Modern LMS",
//   results: [
//     { title: "Simplified course creation and management for instructors" },
//     { title: "Improved user experience with responsive design" },
//     { title: "Integrated secure file management with AWS S3" },
//   ],
//   link: "https://github.com/JasaniZeel4827/masterjiLMS", // Replace with live demo / video
//   image: masterjiLMS,
//   technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
// },
// {
//   company: "Masterji",
//   year: "2024",
//   title: "Masterji Stream - Video Conferencing Module",
//   results: [
//     { title: "Integrated HD video + audio conferencing into Masterji LMS" },
//     { title: "Enabled real-time chat, scheduling & responsive UI" },
//     { title: "Added premium features: recording, screen sharing, AI summaries" },
//   ],
//   link: "https://your-stream-demo-url.com", // Replace with Masterji Stream demo
//   image: masterjistream,
//   technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
// },
// {
//   company: "Rockstar Inspired",
//   year: "2025",
//   title: "GTA-6 Landing Page",
//   results: [
//     { title: "Created high-impact animated intro with GSAP timelines" },
//     { title: "Implemented parallax hero with mouse-driven effects" },
//     { title: "Delivered smooth character reveal & optimized asset loading" },
//   ],
//   link: "https://your-gta6-demo-url.com", // Replace with GTA-6 project live/demo link
//   image: gta6, // Import project image
//   technologies: ['Game Development', 'C++', 'AI Programming', 'Performance Optimization'],
// },

const portfolioProjects = [

  {
    company: "Masterji",
    year: "2024",
    title: "Masterji - Modern LMS",
    results: [
      { title: "Simplified course creation and management for instructors" },
      { title: "Improved user experience with responsive design" },
      { title: "Integrated secure file management with AWS S3" },
    ],
    link: "https://github.com/JasaniZeel4827/masterji",
    image: masterjiLMS,
    technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "AWS S3", "Clerk"],
  },
  {
    company: "Masterji",
    year: "2024",
    title: "Masterji Stream - Video Conferencing Module",
    results: [
      { title: "Integrated HD video + audio conferencing into Masterji LMS" },
      { title: "Enabled real-time chat, scheduling & responsive UI" },
    ],
    link: "https://github.com/JasaniZeel4827/sassforMasterji",
    image: masterjistream,
    technologies: ["WebRTC", "Socket.io", "React", "Node.js", "MongoDB"],
  },
  {
    "company": "DeltaBoard",
    "year": "2025",
    "title": "Travel Agency Platform",
    "results": [
      { "title": "Built an AI-powered trip itinerary generator" },
      { "title": "Developed an admin dashboard for trip and user management" },
      { "title": "Implemented secure user authentication and data management" }
    ],
    "link": "https://github.com/adrianhajdin/travel-agency-dashboard",
    "image": "travelAgency, // Replace with your image variable",
    "technologies": ["React", "Appwrite", "Syncfusion", "Tailwind CSS", "Vite"]
  },
  {
    company: "Profile Finder & Analyzer",
    year: "2025",
    title: "GitHub Profile Finder & Analyzer",
    results: [
      { title: "Search GitHub users and display profile details" },
      { title: "Analytics: total stars, language distribution, top repos, account age" },
      { title: "Recent searches, beautiful UI with shadcn/ui and charts" },
    ],
    link: "https://github.com/JasaniZeel4827/git-hub-profile-analyzer",
    image: githubpro,
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Radix UI",
      "Recharts",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20 pb-16">
        <div className="relative">
          <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>

          <div className="container px-4 mx-auto">
            <SectionHeader
              eyebrow="My Work"
              title="Featured Projects"
              description="A collection of my recent work and side projects. Each project was built to solve real-world problems and improve my skills."
            />

            <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
              {portfolioProjects.map((project, index) => (
                <Card key={index} className="group hover:border-emerald-400/50 transition-colors h-full flex flex-col">
                  {/* macOS-style header */}
                  <div className="px-4 py-2.5 border-b border-white/5 flex items-center bg-gradient-to-b from-white/5 to-transparent">
                    <div className="flex space-x-1.5 mr-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    </div>
                    <div className="text-xs text-white/50 truncate flex-1 text-center pr-8">
                      {project.company}
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="flex-1 flex flex-col">
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={450}
                      />
                    </div>

                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-white/70 mb-4">{project.results[0].title}</p>

                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white/5 rounded-full text-xs font-medium text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center pt-4 border-t border-white/5">
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-lg hover:bg-white/10"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
