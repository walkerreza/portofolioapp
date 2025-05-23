import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-sm border-b border-dark-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-white">REZA</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#works" className="text-gray-400 hover:text-white transition-colors">Works</a>
            <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
            <button className="px-4 py-2 bg-dark-100 text-white rounded-lg hover:bg-dark-200 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4 space-y-4`}>
          <a href="#" className="block text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#works" className="block text-gray-400 hover:text-white transition-colors">Works</a>
          <a href="#blog" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
          <button className="w-full px-4 py-2 bg-dark-100 text-white rounded-lg hover:bg-dark-200 transition-colors">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
