import React, { useState } from 'react';
import { 
  Trophy, Users, Monitor, BookOpen, Award, Globe2, GraduationCap, 
  Building2, Laptop, School, Phone, Mail, MapPin, Facebook, Instagram,
  Linkedin, Youtube, MessageSquare, CheckCircle2, Database, Code, Palette,
  BrainCircuit, LineChart, FileSpreadsheet, Menu, X, ChevronUp, Star
} from 'lucide-react';

function Header()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      const navLinks = [
        { name: 'Home', href: '/', navigateToSection: true },
        { name: 'About', href: '/about', navigateToSection: false },
        { name: 'Courses', href: '/courses', navigateToSection: false },
        { name: 'Contact', href: '/contact', navigateToSection: false }
      ];
    return(
         <header className="fixed w-full z-50 bg-blue-900/95 backdrop-blur-sm shadow-lg">
                <nav className="container mx-auto px-4 py-4">
                  <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div 
                      className="flex items-center Software Soluations cursor-pointer"
                      onClick={scrollToTop}
                    >

                      {/* <Trophy className="w-8 h-8 text-yellow-400" /> */}
                      <img className="absolute w-15 h-17" src="logo.png" alt="logo" />
                      <div className="absolute ml-[70px] p-0 text-center text-2xl font-bold text-white">Wright Tech <p className="-mt-[13px] text-[15px] text-yellow-400">Software Solutions</p></div>
                    </div>
        
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.navigateToSection ? `${link.href}` : link.href}
                          className="text-white transition-colors font-medium relative group hover:text-yellow-400"
                        >
                          {link.name}
                        </a>
                      ))}
                      <button className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-full font-semibold hover:bg-yellow-300 transition-all hover:scale-105 transform">
                        Enroll Now
                      </button>
                    </div>
        
                    {/* Mobile Menu Button */}
                    <button 
                      className="md:hidden text-white p-2 hover:bg-blue-800 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                  </div>
        
                  {/* Mobile Navigation */}
                  <div className={`md:hidden transition-all duration-300 ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="pt-4 pb-2 space-y-2">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.navigateToSection ? `${link.href}` : link.href}
                          className={`block w-full py-2 px-4 text-left rounded-lg transition-colors ${
                            link.navigateToSection
                              ? 'text-yellow-400 bg-blue-800'
                              : 'text-white hover:bg-blue-800'
                          }`}
                        >
                          {link.name}
                        </a>
                      ))}
                      <button className="w-full mt-4 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </nav>
              </header>
        
    );
}
 export default Header;