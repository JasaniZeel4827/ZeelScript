// /* eslint-disable react/no-unescaped-entities */
// import { SectionHeader } from '@/components/SectionHeader';
// import { Card } from '@/components/Card';
// import { CardHeader } from '@/components/CardHeader';
// import grainImage from '@/assets/images/grain.jpg';
// import myAvatar from '@/assets/images/my-avatar.png';
// import Image from 'next/image';

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen">
//       <main className="pt-20 pb-16">
//         <div className="relative">
//           <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>

//           <div className="container px-4 mx-auto">
//             <SectionHeader
//               eyebrow="About Me"
//               title="Who I Am & Why I Code"
//               description="Learn more about who I am, what I do, and my journey so far."
//             />

//             <div className="mt-12">
//               <Card className="p-8">
//                 <div className="space-y-8">
//                   <div className="flex flex-col md:flex-row gap-8 items-center">
//                     <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-emerald-400/30 flex-shrink-0 relative">
//                       <div className="w-full h-full bg-gradient-to-br from-emerald-400/20 to-transparent">
//                         <Image 
//                           src={myAvatar} 
//                           alt="Zeel Jasani" 
//                           className="object-cover w-full h-full"
//                           width={160}
//                           height={160}
//                         />
//                       </div>
//                     </div>
//                     <div className="text-center md:text-left">
//                       <h2 className="text-2xl font-medium mb-3">Hello, I'm Zeel Jasani</h2>
//                       <p className="text-white/80">
//                         Full-Stack Developer. Problem Solver. Technology Enthusiast.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="space-y-6">
//                     <section>
//                       <h3 className="text-xl font-medium mb-3">My Journey</h3>
//                       <p className="text-white/80 leading-relaxed">
//                         I am currently an undergraduate computer science student. 
//                         My journey began with classroom projects, 
//                         but my passion for technology inspired me to dive deeper into the world of full-stack development. 
//                         I am constantly learning and am always eager to apply my skills to solve real-world problems.
//                       </p>
//                     </section>

//                     <section>
//                       <h3 className="text-xl font-medium mb-3">What I Do</h3>
//                       <p className="text-white/80 leading-relaxed">
//                         I'm Zeel. A full-stack software developer
//                         specializing in scalable backends,
//                         cross-platform apps, and intelligent software solutions.
//                       </p>
//                     </section>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }









/* eslint-disable react/no-unescaped-entities */
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { WindowControls } from '@/components/WindowControls';
import { CardHeader } from '@/components/CardHeader';
import grainImage from '@/assets/images/grain.jpg';
import myAvatar from '@/assets/images/my-avatar.png';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20 pb-16">
        <div className="relative">
          <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>

          <div className="container px-4 mx-auto">
            <SectionHeader
              eyebrow="About Me"
              title="Who I Am & Why I Code"
              description="Learn more about who I am, what I do, and my journey so far."
            />

            <div className="mt-12">
              <Card className="relative pt-10 px-8 pb-8">
                <WindowControls />
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-emerald-400/30 flex-shrink-0 relative">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-400/20 to-transparent">
                        <Image 
                          src={myAvatar} 
                          alt="Zeel Jasani" 
                          className="object-cover w-full h-full"
                          width={160}
                          height={160}
                        />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-2xl font-medium mb-3">Hello, I'm Zeel Jasani</h2>
                      <p className="text-white/80">
                        Software Developer. Problem Solver. Technology Enthusiast.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-medium mb-3">My Journey</h3>
                      <p className="text-white/80 leading-relaxed">
                        I am currently an undergraduate computer science student. 
                        My journey began with classroom projects, 
                        but my passion for technology inspired me to dive deeper into the world of full-stack development. 
                        I am constantly learning and am always eager to apply my skills to solve real-world problems.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-medium mb-3">What I Do</h3>
                      <p className="text-white/80 leading-relaxed">
                        I'm Zeel. Software Developer
                        specializing in scalable backends,
                        cross-platform apps, and intelligent software solutions.
                      </p>
                    </section>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
