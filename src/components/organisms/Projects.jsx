import SectionTitle from '../atoms/SectionTitle';
import ProjectCard from '../molecules/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Developed a full-stack e-commerce platform using React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQ_UyicSgoiOcXlWNgxVIaQ7jIlItPK5noQ&s'
    },
    {
      title: 'Task Management App',
      description: 'Built a collaborative task management application with real-time updates',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIN5CeArTP93p-I3nBytv4Gxw5Z7z7XbQkw&s'
    },
    {
      title: 'AI Chat Application',
      description: 'Created an AI-powered chat application with natural language processing',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: 'https://aici-umg.com/wp-content/uploads/2024/09/Perkembangan-AI-Inovasi-Terbaru-dan-Ke-Depan-1024x585.webp'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
