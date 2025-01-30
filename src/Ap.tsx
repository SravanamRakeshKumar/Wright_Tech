import React, { useState, useEffect, useRef } from 'react';
import { 
  Trophy, Users, Monitor, BookOpen, Award, Globe2, GraduationCap, 
  Building2, Laptop, School, Phone, Mail, MapPin, Facebook, Instagram,
  Linkedin, Youtube, MessageSquare, CheckCircle2, Database, Code, Palette,
  BrainCircuit, LineChart, FileSpreadsheet, Menu, X, ChevronUp, Star
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Refs for sections that will have reveal effects
  const aboutRef = useRef<HTMLElement>(null);
  const coursesRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const trainingModesRef = useRef<HTMLElement>(null);
  const certificatesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);

      const sections = ['home', 'about', 'courses', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal effect using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once revealed, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all elements with reveal effects
    const refs = [
      aboutRef.current,
      coursesRef.current,
      achievementsRef.current,
      trainingModesRef.current,
      certificatesRef.current,
      contactRef.current
    ];

    refs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Courses', href: 'courses' },
    { name: 'Contact', href: 'contact' }
  ];

  const achievements = [
    { icon: Users, text: '8 Lakhs Students Directly Trained', color: 'text-blue-600' },
    { icon: Monitor, text: '35 Lakhs Reached through TV/Online', color: 'text-green-600' },
    { icon: BookOpen, text: '6,500 Workshops Conducted', color: 'text-purple-600' }
  ];

  const certificates = [
    'Microsoft', 'Python', 'Java', 'SAP', 'AutoCAD', 'Cloud', 'ERP', 'Data Science',
    'Microsoft', 'Python', 'Java', 'SAP', 'AutoCAD', 'Cloud', 'ERP', 'Data Science' // Duplicated for seamless scroll
  ];

  const accreditations = [
    {
      name: 'MSME Registered',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'ISO 9001:2015',
      image: 'https://images.unsplash.com/photo-1557997682-0ab734d34d05?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'APSCHE Approved',
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'ASB Certified',
      image: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?auto=format&fit=crop&q=80&w=400'
    },
    // Duplicate for continuous scroll
    {
      name: 'MSME Registered',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'ISO 9001:2015',
      image: 'https://images.unsplash.com/photo-1557997682-0ab734d34d05?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'APSCHE Approved',
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'ASB Certified',
      image: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const trainingModes = [
    {
      icon: Building2,
      title: 'Corporate Training',
      description: 'Specialized training programs tailored for corporate clients with hands-on experience',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Laptop,
      title: 'Online Training',
      description: 'Flexible learning through our advanced online platform with live instructor support',
      image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: School,
      title: 'Classroom Training',
      description: 'Traditional classroom learning with modern infrastructure and expert faculty',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const courseCategories = [
    {
      title: 'Programming & Development',
      icon: Code,
      courses: [
        'Full Stack Python',
        'Full Stack Java',
        'Python with AI',
        'Python with ML',
        'Web Technologies',
        'C, C++'
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      courses: [
        'Data Science',
        'Data Analyst',
        'Power BI',
        'SAS',
        'Medical Coding'
      ]
    },
    {
      title: 'Design & Multimedia',
      icon: Palette,
      courses: [
        'DTP',
        'Photoshop',
        'Multi Media',
        'Coreldraw',
        'AutoCAD'
      ]
    },
    {
      title: 'SAP Modules',
      icon: BrainCircuit,
      courses: [
        'FI-CO',
        'SD',
        'MM',
        'ABAP',
        'HR'
      ]
    },
    {
      title: 'Business Applications',
      icon: LineChart,
      courses: [
        'Digital Marketing',
        'MS Office',
        'Tally',
        'Testing Tools',
        'MATLAB'
      ]
    }
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => scrollToSection('home')}
            >
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div className="text-xl font-bold text-white">Right Computers</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-white transition-colors font-medium relative group ${
                    activeSection === link.href ? 'text-yellow-400' : 'hover:text-yellow-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all ${
                    activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
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
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full py-2 px-4 text-left rounded-lg transition-colors ${
                    activeSection === link.href 
                      ? 'text-yellow-400 bg-blue-800'
                      : 'text-white hover:bg-blue-800'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button className="w-full mt-4 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-blue-900 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-800 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <section className="pt-10 bg-blue-900 text-white min-h-screen" id="home">
        <div className="container mx-auto px-4 py-16">


          {/* Main Hero Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center  mb-16">


          <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Professional at work"
                className="w-full h-[350px] mt-[30px] rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden  text-end absolute -bottom-5 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 group-hover:block">
                <p className="text-1xg pr-[120px]">Director</p>
                <h3 className="text-4xl font-bold text-red-500">Syed Basha</h3>
                <p className="text-1xg">M.B.A., M.Com.</p>
                <p className="italic">"My Work is My Worship"</p>
              </div>
            </div>

            <div className=" text-center md:text-left">
              <div className="inline-block relative mb-6">
                <div className="absolute -inset-1 bg-yellow-400 rounded-full animate-pulse"></div>
                <Trophy className="w-16 h-16 relative animate-bounce" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400 mb-4">
                Celebrating 25 Years
              </h1>
              <p className="text-xl text-blue-200 mb-8">of Excellence in Technology Education</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="inline-flex items-center px-6 py-3 bg-yellow-400 text-blue-900 rounded-full font-semibold transform hover:scale-105 transition-all hover:shadow-lg">
                  <Award className="w-5 h-5 mr-2" />
                  Enroll Now
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all hover:shadow-lg"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Us
                </button>
              </div>
            </div>

            
          </div>

          {/* Celebration Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-56">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" 
                alt="Corporate Training"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent opacity-90">
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-xl font-bold">Corporate Excellence</h3>
                  </div>
                  <p>Leading technology education for 25 years</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Training Success"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent opacity-90">
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-xl font-bold">Student Success</h3>
                  </div>
                  <p>8 Lakh+ students trained successfully</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800" 
                alt="Global Recognition"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent opacity-90">
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe2 className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-xl font-bold">Global Impact</h3>
                  </div>
                  <p>Reaching millions through TV & online platforms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            {[
              { number: '25+', label: 'Years of Excellence' },
              { number: '8L+', label: 'Students Trained' },
              { number: '6.5K+', label: 'Workshops' },
              { number: '35L+', label: 'Online Reach' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 border-r last:border-0 border-white/20">
                <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* About Section with Reveal */}
      <section ref={aboutRef} className="py-16 bg-white reveal-element" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Milestones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <item.icon className={`w-12 h-12 ${item.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modes Section with Reveal */}
      <section ref={trainingModesRef} className="py-16 bg-gray-50 reveal-element">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Training Modes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trainingModes.map((mode, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={mode.image} 
                  alt={mode.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-90">
                  <div className="absolute bottom-0 p-6 text-white">
                    <mode.icon className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-bold mb-2">{mode.title}</h3>
                    <p className="text-sm text-gray-200">{mode.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section with Reveal */}
      <section ref={coursesRef} className="py-16 bg-gray-50 reveal-element" id="courses">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Our Courses</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-center gap-2 group">
                      <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-blue-600 transition-colors">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section with Reveal */}
      <section ref={certificatesRef} className="py-16 bg-gray-50 text-gray-800 overflow-hidden reveal-element">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-12 h-12 mx-auto mb-6 text-blue-600 animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">Our Accreditations</h2>
          <p className="text-xl text-gray-600 mb-8">Recognized and certified by leading organizations</p>
          
          <div className="relative">
            <div className="flex space-x-8 animate-scroll-fast">
              {accreditations.map((accred, index) => (
                <div 
                  key={`${accred.name}-${index}`} 
                  className="flex-none w-64 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <img 
                    src={accred.image} 
                    alt={accred.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold">{accred.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section with Reveal */}
      <section className="py-16 bg-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <Globe2 className="w-12 h-12 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">Globally Recognized Certification</h2>
          <p className="text-xl text-blue-200 mb-8">Empowering careers with industry-standard certifications</p>
          
          <div className="relative">
            <div className="flex space-x-8 animate-scroll-fast">
              {certificates.map((cert, index) => (
                <div 
                  key={`${cert}-${index}`} 
                  className="flex-none w-64 bg-white/10 rounded-lg backdrop-blur-sm overflow-hidden hover:bg-white/20 transition-all transform hover:scale-105"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${1550000000000 + index}?auto=format&fit=crop&q=80&w=400`}
                    alt={cert}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Reveal */}
      <section ref={contactRef} className="py-16 bg-gray-50 reveal-element" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Call Us', content: '9849062060, 6309894500' },
              { icon: Mail, title: 'Email Us', content: 'rightcomputers786@gmail.com' },
              { icon: MapPin, title: 'Visit Us', content: 'Gandhi Nagar, Vijayawada' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
                      onClick={() => scrollToSection(link.href)}
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
    </div>
  );
}

export default App;