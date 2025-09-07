// // import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// // import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// // import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
// // import Image from "next/image";
// // import CheckCircleIcon from "@/assets/icons/check-circle.svg";
// // import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// // import { SectionHeader } from "@/components/SectionHeader";
// // import { Card } from "@/components/Card";

// // const portfolioProjects = [
// //   {
// //     company: "Acme Corp",
// //     year: "2022",
// //     title: "Dark Saas Landing Page",
// //     results: [
// //       { title: "Enhanced user experience by 40%" },
// //       { title: "Improved site speed by 50%" },
// //       { title: "Increased mobile traffic by 35%" },
// //     ],
// //     link: "https://youtu.be/4k7IdSLxh6w",
// //     image: darkSaasLandingPage,
// //   },
// //   {
// //     company: "Innovative Co",
// //     year: "2021",
// //     title: "Light Saas Landing Page",
// //     results: [
// //       { title: "Boosted sales by 20%" },
// //       { title: "Expanded customer reach by 35%" },
// //       { title: "Increased brand awareness by 15%" },
// //     ],
// //     link: "https://youtu.be/7hi5zwO75yc",
// //     image: lightSaasLandingPage,
// //   },
// //   {
// //     company: "Quantum Dynamics",
// //     year: "2023",
// //     title: "AI Startup Landing Page",
// //     results: [
// //       { title: "Enhanced user experience by 40%" },
// //       { title: "Improved site speed by 50%" },
// //       { title: "Increased mobile traffic by 35%" },
// //     ],
// //     link: "https://youtu.be/Z7I5uSRHMHg",
// //     image: aiStartupLandingPage,
// //   },
// // ];

// // export const ProjectsSection = () => {
// //   return (
// //     <section className="pb-16 lg:py-24">
// //       <div className="container">
// //         <SectionHeader
// //           eyebrow="Real-world Results"
// //           title="Featured Projects"
// //           description="See how I transformed concepts into engaging digital experiences"
// //         />

// //         <div className="mt-10 md:mt-20 flex flex-col gap-20">
// //           {portfolioProjects.map((project, projectIndex) => (
// //             <Card
// //               key={project.title}
// //               className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl border border-white/20 sticky"
// //               style={{
// //                 top: `calc(64px + ${projectIndex * 40}px)`,
// //               }}
// //             >
// //               <div className="lg:grid lg:grid-cols-2 lg:gap-16">
// //                 <div className="lg:pb-16">
// //                   <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
// //                     <span>{project.company}</span>
// //                     <span>&bull;</span>
// //                     <span>{project.year}</span>
// //                   </div>
// //                   <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
// //                     {project.title}
// //                   </h3>
// //                   <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
// //                   <ul className="flex flex-col gap-4 mt-4 md:mt-5">
// //                     {project.results.map((result, index) => (
// //                       <li
// //                         key={index}
// //                         className="flex gap-2 text-sm md:text-base text-white/50"
// //                       >
// //                         <CheckCircleIcon className="size-5 md:size-6" />
// //                         <span>{result.title}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <a href={project.link}>
// //                     <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
// //                       <span>View Live Site</span>
// //                       <ArrowUpRightIcon className="size-4" />
// //                     </button>
// //                   </a>
// //                 </div>
// //                 <div>
// //                   <Image
// //                     src={project.image}
// //                     alt={project.title}
// //                     className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
// //                   />
// //                 </div>
// //               </div>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };








// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
// import masterjiLMS from "@/assets/images/masterjiLMS.png";
// import masterjiLMSMobile from "@/assets/images/masterjiLMSMobile.png";
// import masterjistream from "@/assets/images/masterjistream.png";
// import gta6 from "@/assets/images/gta6.png";
// import Image from "next/image";
// import CheckCircleIcon from "@/assets/icons/check-circle.svg";
// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// import { SectionHeader } from "@/components/SectionHeader";
// import { Card } from "@/components/Card";
// import { WindowControls } from "@/components/WindowControls";

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
//     link: "https://github.com/JasaniZeel4827/masterjiLMS", // Replace with live demo / video
//     image: masterjiLMS,
//   },
//   {
//     company: "Masterji",
//     year: "2024",
//     title: "Masterji Stream - Video Conferencing Module",
//     results: [
//       { title: "Integrated HD video + audio conferencing into Masterji LMS" },
//       { title: "Enabled real-time chat, scheduling & responsive UI" },
//       { title: "Added premium features: recording, screen sharing, AI summaries" },
//     ],
//     link: "https://github.com/JasaniZeel4827/sassforMasterji", // Replace with Masterji Stream demo
//     image: masterjistream,
//   },
//   {
//     company: "Rockstar Inspired",
//     year: "2025",
//     title: "GTA-6 Landing Page",
//     results: [
//       { title: "Created high-impact animated intro with GSAP timelines" },
//       { title: "Implemented parallax hero with mouse driven effects" },
//       { title: "Delivered smooth character reveal & optimized asset loading" },
//     ],
//     link: "https://github.com/JasaniZeel4827/brainwave", // Replace with GTA-6 project live/demo link
//     image: gta6, // Import project image
//   },
// ];


// export const ProjectsSection = () => {
//   return (
//     <section className="pb-16 lg:py-24">
//       <div className="container">
//         <SectionHeader
//           eyebrow="Real-world Results"
//           title="Featured Projects"
//           description="See how I transformed concepts into engaging digital experiences"
//         />

//         <div className="mt-10 md:mt-20 flex flex-col gap-20">
//           {portfolioProjects.map((project, projectIndex) => (
//             <Card
//               key={project.title}
//               className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl border border-white/20 sticky"
//               style={{
//                 top: `calc(64px + ${projectIndex * 40}px)`,
//               }}
//             >
//               <WindowControls />
//               <div className="lg:grid lg:grid-cols-2 lg:gap-16">
//                 <div className="lg:pb-16">
//                   <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
//                     <span>{project.company}</span>
//                   </div>
//                   <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
//                     {project.title}
//                   </h3>
//                   <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
//                   <ul className="flex flex-col gap-4 mt-4 md:mt-5">
//                     {project.results.map((result, index) => (
//                       <li
//                         key={index}
//                         className="flex gap-2 text-sm md:text-base text-white/50"
//                       >
//                         <CheckCircleIcon className="size-5 md:size-6" />
//                         <span>{result.title}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="flex flex-col sm:flex-row gap-6 mt-8">
//                     <a href={project.link} className="w-full sm:w-auto">
//                       <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
//                         <span>View</span>
//                         <ArrowUpRightIcon className="size-4" />
//                       </button>
//                     </a>
//                     <a 
//                       href={project.link.includes('github.com') ? project.link : '#'} 
//                       className={`w-full sm:w-auto ${!project.link.includes('github.com') ? 'opacity-50 cursor-not-allowed' : ''}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <button 
//                         className="h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-700"
//                         disabled={!project.link.includes('github.com')}
//                       >
//                         <span>GitHub</span>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
//                           <path d="M9 18c-4.51 2-5-2-7-2"></path>
//                         </svg>
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//                 <div>
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
//                   />
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };






// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
// import Image from "next/image";
// import CheckCircleIcon from "@/assets/icons/check-circle.svg";
// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// import { SectionHeader } from "@/components/SectionHeader";
// import { Card } from "@/components/Card";

// const portfolioProjects = [
//   {
//     company: "Acme Corp",
//     year: "2022",
//     title: "Dark Saas Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/4k7IdSLxh6w",
//     image: darkSaasLandingPage,
//   },
//   {
//     company: "Innovative Co",
//     year: "2021",
//     title: "Light Saas Landing Page",
//     results: [
//       { title: "Boosted sales by 20%" },
//       { title: "Expanded customer reach by 35%" },
//       { title: "Increased brand awareness by 15%" },
//     ],
//     link: "https://youtu.be/7hi5zwO75yc",
//     image: lightSaasLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section className="pb-16 lg:py-24">
//       <div className="container">
//         <SectionHeader
//           eyebrow="Real-world Results"
//           title="Featured Projects"
//           description="See how I transformed concepts into engaging digital experiences"
//         />

//         <div className="mt-10 md:mt-20 flex flex-col gap-20">
//           {portfolioProjects.map((project, projectIndex) => (
//             <Card
//               key={project.title}
//               className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl border border-white/20 sticky"
//               style={{
//                 top: `calc(64px + ${projectIndex * 40}px)`,
//               }}
//             >
//               <div className="lg:grid lg:grid-cols-2 lg:gap-16">
//                 <div className="lg:pb-16">
//                   <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
//                     <span>{project.company}</span>
//                     <span>&bull;</span>
//                     <span>{project.year}</span>
//                   </div>
//                   <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
//                     {project.title}
//                   </h3>
//                   <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
//                   <ul className="flex flex-col gap-4 mt-4 md:mt-5">
//                     {project.results.map((result, index) => (
//                       <li
//                         key={index}
//                         className="flex gap-2 text-sm md:text-base text-white/50"
//                       >
//                         <CheckCircleIcon className="size-5 md:size-6" />
//                         <span>{result.title}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <a href={project.link}>
//                     <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
//                       <span>View Live Site</span>
//                       <ArrowUpRightIcon className="size-4" />
//                     </button>
//                   </a>
//                 </div>
//                 <div>
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
//                   />
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };








import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import masterjiLMS from "@/assets/images/masterjiLMS.png";
import masterjiLMSMobile from "@/assets/images/masterjiLMSMobile.png";
import masterjistream from "@/assets/images/masterjistream.png";
import gta6 from "@/assets/images/gta6.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { WindowControls } from "@/components/WindowControls";

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
    link: "https://github.com/JasaniZeel4827/masterjiLMS", // Replace with live demo / video
    image: masterjiLMS,
  },
  {
    company: "Masterji",
    year: "2024",
    title: "Masterji Stream - Video Conferencing Module",
    results: [
      { title: "Integrated HD video + audio conferencing into Masterji LMS" },
      { title: "Enabled real-time chat, scheduling & responsive UI" },
      { title: "Added premium features: recording, screen sharing, AI summaries" },
    ],
    link: "https://github.com/JasaniZeel4827/sassforMasterji", // Replace with Masterji Stream demo
    image: masterjistream,
  },
  {
    company: "Rockstar Inspired",
    year: "2025",
    title: "GTA-6 Landing Page",
    results: [
      { title: "Created high-impact animated intro with GSAP timelines" },
      { title: "Implemented parallax hero with mouse driven effects" },
      { title: "Delivered smooth character reveal & optimized asset loading" },
    ],
    link: "https://gta-6-landing-page-psi.vercel.app/", // Replace with GTA-6 project live/demo link
    image: gta6, // Import project image
  },
];


export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl border border-white/20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <WindowControls />
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex w-full justify-center md:justify-start gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text text-center md:text-left">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-6 mt-8">
                    <a href={project.link} className="w-full sm:w-auto">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                        <span>View</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a 
                      href={project.link.includes('github.com') ? project.link : '#'} 
                      className={`w-full sm:w-auto ${!project.link.includes('github.com') ? 'opacity-50 cursor-not-allowed' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button 
                        className="h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-700"
                        disabled={!project.link.includes('github.com')}
                      >
                        <span>GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
