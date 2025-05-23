import SectionTitle from '../atoms/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <img 
              src="https://avatars.githubusercontent.com/u/150656111?v=4" 
              alt="Profile" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600 text-lg">
              Hi! I'm a passionate Full Stack Developer with expertise in modern web technologies.
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-600">React, Vue.js, Tailwind CSS, JavaScript</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Python, MongoDB, SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
