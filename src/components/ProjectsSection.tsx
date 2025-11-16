import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Projetos em <span className="text-[#D4AF37]">Destaque</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cada obra é uma história de sucesso, planejamento e realização impecável.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-black cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-80'
                }`}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                <div className="w-12 h-0.5 bg-[#D4AF37] mb-3 transform origin-left transition-all duration-300 group-hover:w-24" />
                <p className="text-[#D4AF37] text-sm mb-2">{project.category}</p>
                <h3 className="text-white">{project.title}</h3>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 border-2 border-[#D4AF37] transition-opacity duration-300 pointer-events-none ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
