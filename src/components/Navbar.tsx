
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, ShoppingCart, BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Blog', href: '/blog', icon: BookText },
    { name: 'LMS Portal', href: '/lms', icon: BookOpen },
    { name: 'Shop', href: '/shop', icon: ShoppingCart },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-techknot-blue">Tech<span className="text-techknot-purple">Knots</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/#') ? (
                  <a 
                    href={link.href}
                    className="font-medium hover:text-techknot-purple transition-colors flex items-center gap-1"
                  >
                    {link.icon && <link.icon size={16} />}
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href}
                    className="font-medium hover:text-techknot-purple transition-colors flex items-center gap-1"
                  >
                    {link.icon && <link.icon size={16} />}
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Button className="bg-techknot-blue hover:bg-techknot-purple transition-all">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/#') ? (
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.icon && <link.icon size={18} />}
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href}
                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.icon && <link.icon size={18} />}
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="px-4 pt-4">
              <Button className="w-full bg-techknot-blue hover:bg-techknot-purple transition-all">
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
