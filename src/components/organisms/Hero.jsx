import { useState, useEffect } from 'react';

const Hero = () => {
  const [stats] = useState({
    experience: 14,
    projects: 187,
  });

  return (
    <section className="min-h-screen bg-dark pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Muhammad<br />
              <span className="text-accent-yellow">ANKA REZA</span>
            </h1>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-accent-yellow transition-colors">
                Twitter
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-accent-yellow transition-colors">
                Github
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-accent-yellow transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <p className="text-lg text-gray-400 max-w-lg">
            Any Type Of Query & Discussion.
            You may need my core expertise in your project.
          </p>

          <div className="flex items-center space-x-12">
            <div>
              <div className="text-4xl font-bold text-accent-yellow">{stats.experience}+</div>
              <div className="text-gray-400">Years of<br />Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-yellow">{stats.projects}+</div>
              <div className="text-gray-400">Projects<br />Completed</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <div className="bg-dark-100 p-6 rounded-lg hover:bg-dark-200 transition-colors cursor-pointer">
              <h3 className="font-semibold mb-2">Product Designer</h3>
              <p className="text-sm text-gray-400">Interface Design</p>
            </div>
            <div className="bg-dark-100 p-6 rounded-lg hover:bg-dark-200 transition-colors cursor-pointer">
              <h3 className="font-semibold mb-2">Full Stack Dev</h3>
              <p className="text-sm text-gray-400">Web Development</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <img 
              src="/profile.jpg" 
              alt="Carlos Mendoza" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-accent-yellow/20 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
