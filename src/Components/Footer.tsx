import React from 'react';
import { 
    Trophy, Users, Monitor, BookOpen, Award, Globe2, GraduationCap, 
    Building2, Laptop, School, Phone, Mail, MapPin, Facebook, Instagram,
    Linkedin, Youtube, MessageSquare, CheckCircle2, Database, Code, Palette,
    BrainCircuit, LineChart, FileSpreadsheet, Menu, X, ChevronUp, Star
  } from 'lucide-react';


function Footer()
{
    const navLinks = [
        { name: 'Home', href: 'home', navigateToSection: true },
        { name: 'About', href: '/about', navigateToSection: false },
        { name: 'Courses', href: '/courses', navigateToSection: false },
        { name: 'Contact', href: '/contact', navigateToSection: false }
      ];

    return(
        <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm">Right Computers & Wright Tech Software Solutions Pvt. Ltd. has been empowering students with quality technology education for 25 years.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <Icon key={index} className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-sm">Quality • Clarity • Less Amount & Placement</p>
          </div>
        </div>
      </footer>
    );

}
export default Footer;