import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import grainImage from '@/assets/images/grain.jpg';
import { Code, Globe, Github } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with Next.js, TypeScript, and Tailwind CSS featuring dark mode and smooth animations.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: '/',
    codeUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard with analytics, product management, and order tracking for e-commerce businesses.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: '#',
    codeUrl: 'https://github.com/yourusername/ecommerce-dashboard',
  },
  {
    title: 'Task Manager',
    description: 'Collaborative task management app with real-time updates and team features.',
    technologies: ['Next.js', 'Firebase', 'TypeScript'],
    demoUrl: '#',
    codeUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'Recipe Finder',
    description: 'Discover and save recipes with nutritional information and cooking instructions.',
    technologies: ['React', 'Spoonacular API', 'Context API'],
    demoUrl: '#',
    codeUrl: 'https://github.com/yourusername/recipe-finder',
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
            
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:border-emerald-400/50 transition-colors h-full">
                  <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-emerald-400/10 rounded-t-lg flex items-center justify-center">
                    <Code className="w-12 h-12 text-emerald-400/30 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <a 
                        href={project.demoUrl} 
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a 
                        href={project.codeUrl} 
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-emerald-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
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
