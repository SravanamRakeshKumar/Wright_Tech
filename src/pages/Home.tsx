import React, {useState,useRef,useEffect} from 'react';
import { 
  Trophy, Users, Monitor, BookOpen, Award, Globe2, GraduationCap, 
  Building2, Laptop, School, Phone, Mail, MapPin, Facebook, Instagram,
  Linkedin, Youtube, MessageSquare, CheckCircle2, Database, Code, Palette,
  BrainCircuit, LineChart, FileSpreadsheet, Menu, X, ChevronUp, Star
} from 'lucide-react';
import StatCounter from '../Components/StatCounter';
import { motion } from "framer-motion";
import Confetti from 'react-confetti';
import microsoft from "../images/microsoft.png";
import java from "../images/java.png";
import sap from "../images/sap.png";
import autocad from "../images/autocad.png";
import iso from "../images/iso.png";
import cloud from "../images/cloud.png";
import director from '../images/director.jpg';
function Home() {
    
  const [showConfetti, setShowConfetti] = useState(true);
  
    // Refs for sections that will have eal effects
    const aboutRef = useRef<HTMLElement>(null);
    const coursesRef = useRef<HTMLElement>(null);
    const achievementsRef = useRef<HTMLElement>(null);
    const trainingModesRef = useRef<HTMLElement>(null);
    const certificatesRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     setIsScrolled(window.scrollY > 20);
    //     setShowScrollTop(window.scrollY > 500);
  
    //     const sections = ['home', 'about', 'courses', 'contact'];
    //     const current = sections.find(section => {
    //       const element = document.getElementById(section);
    //       if (element) {
    //         const rect = element.getBoundingClientRect();
    //         return rect.top <= 100 && rect.bottom >= 100;
    //       }
    //       return false;
    //     });
    //     if (current) {
    //       setActiveSection(current);
    //     }
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
  
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

    useEffect(() => {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }, []);
  
    // const scrollToSection = (sectionId: string) => {
    //   const element = document.getElementById(sectionId);
    //   if (element) {
    //     const headerOffset = 80;
    //     const elementPosition = element.getBoundingClientRect().top;
    //     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    //     window.scrollTo({
    //       top: offsetPosition,
    //       behavior: 'smooth'
    //     });
    //   }
    //   setIsMenuOpen(false);
    // };
  

   const achievements = [
      { icon: Users, text: '8 Lakhs Students Directly Trained', color: 'text-blue-600' },
      { icon: Monitor, text: '35 Lakhs Reached through TV/Online', color: 'text-green-600' },
      { icon: BookOpen, text: '6,500 Workshops Conducted', color: 'text-purple-600' }
    ];
  
    const certificates = [
      {
        name:'Microsoft',
        image:microsoft
      },
      {
        name:'Python',
        image:"https://pluspng.com/img-png/python-logo-png-open-2000.png"
      },
      {
        name:'Java',
        image:java
      },
      {
        name:'SAP',
        image:sap
      },
      {
        name:'AutoCAD',
        image:autocad
      },
      {
        name:'Cloud',
        image:cloud
      },
      {
        name:'ERP',
        image:"https://tse2.mm.bing.net/th?id=OIP.shwdSs3Eiwt1kOgQ89Q7TgHaFo&pid=Api&P=0&h=180"
      },
      {
        name:'Data Science',
        image:"https://e7.pngegg.com/pngimages/624/130/png-clipart-university-of-washington-data-science-research-logo-science-purple-laboratory.png"
      },
      {
        name:'Microsoft',
        image:microsoft
      },
      {
        name:'Python',
        image:"https://pluspng.com/img-png/python-logo-png-open-2000.png"
      },
      {
        name:'Java',
        image:java
      },
      {
        name:'SAP',
        image:sap
      },
      {
        name:'AutoCAD',
        image:autocad
      },
      {
        name:'Cloud',
        image:cloud
      },
      {
        name:'ERP',
        image:"https://tse2.mm.bing.net/th?id=OIP.shwdSs3Eiwt1kOgQ89Q7TgHaFo&pid=Api&P=0&h=180"
      },
      {
        name:'Data Science',
        image:"https://e7.pngegg.com/pngimages/624/130/png-clipart-university-of-washington-data-science-research-logo-science-purple-laboratory.png"
      },


    ];
  
    const accreditations = [
      {
        name: 'MSME Registered',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'ISO 9001:2015',
        image:iso
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
        image: '../images/iso.png'
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
     {showConfetti && <Confetti numberOfPieces={200} recycle={false} gravity={0.3} />}
      <section className="pt-5 bg-blue-900 text-white min-h-screen" id="home">
              <div className="container mx-auto px-4 py-16 ">
      
                {/* Main Hero Content */}
    <motion.div 
      className="grid md:grid-cols-2 gap-8 items-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Image with hover effects */}
      <motion.div 
        className="relative group"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-xl"></div>
        <img 
          src={director}
          alt="Professional at work"
          className="w-full h-[350px] mt-[30px] rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
        />
         <div className="absolute text-end absolute  -left-5 top-0  p-6 text-black transform opacity-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 group-hover:opacity-100">
          <p className="text-1.2xg pr-[120px] font-bold -mb-[5px]">Director</p>
          <h3 className="text-4xl font-bold text-pink-800">Syed Basha</h3>
          <p className="text-1xg">M.B.A., M.Com.</p>
          <p className="italic">"My Work is My Worship"</p>
        </div>
      </motion.div>

      {/* Text Content with Trophy Icon */}
      <motion.div 
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="inline-block relative mb-6">
          <div className="absolute -inset-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <Trophy className="w-16 h-16 relative animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400 mb-4">
          Celebrating 25 Years
        </h1>
        <p className="text-xl text-blue-200 mb-8">of Excellence in Technology Education</p>
        
        {/* Buttons with Hover Effects */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.button 
            className="inline-flex items-center px-6 py-3 bg-yellow-400 text-blue-900 rounded-full font-semibold transform hover:scale-105 transition-all hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award className="w-5 h-5 mr-2" />
            Enroll Now
          </motion.button>

          <motion.button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </motion.div>

      
                {/* Celebration Highlights */}
                <h2 className="text-3xl font-bold mt-5 text-center">Our Accreditations</h2>
                <div className="grid md:grid-cols-3 gap-8 mt-20">
                  <div className="relative group overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" 
                      alt="Corporate Training"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-90 ">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-90">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-90">
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
                <StatCounter end={800000} duration={2.5} suffix="+" title="Students Trained" />
          <StatCounter end={25} duration={2} suffix="" title="Years of Excellence" />
          <StatCounter end={6500} duration={2} suffix="+" title="Workshops Conducted" />
          <StatCounter end={3500000} duration={3} suffix="+" title="Online Reach" />
                </div>


              </div>
            </section>
       <section ref={aboutRef} className="py-16 bg-white reveal-element" id="about">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Milestones</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {achievements.map((item, index) => (
                    <div 
                      key={index} 
                      className="border p-6 bg-white rounded-xl shadow-lg hover:border-b-blue-800 hover:border-b-[7px] shadow-xl transition-all hover:-translate-y-1 transform cursor-pointer "
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
                      className="p-6 bg-white rounded-xl shadow-lg hover:bg-blue-200   shadow-xl transition-all hover:-translate-y-1 transform cursor-pointer"
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
                <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
                <p className="text-xl text-gray-600 mb-8">Recognized and certified by leading organizations</p>
                
                <div className=" relative">
                  <div className="flex space-x-8 animate-scroll-fast ">
                    {accreditations.map((accred, index) => (
                      <div 
                        key={`${accred.name}-${index}`} 
                        className="inline-block flex-none w-64 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
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
                        className="flex-none justify-space-evenly w-64  bg-white/10 rounded-lg  overflow-hidden "
                      >
                        <img 
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-[130px] w-[60%] object-contain m-auto"
                        />
                        <div className="p-2">
                          <p className="text-lg font-semibold">{cert.name}</p>
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
                      className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg  hover:shadow-xl transition-all  hover:-translate-y-1 transform cursor-pointer"
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
      </div>
      


        // <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        //      <section className="pt-10 bg-blue-900 text-white min-h-screen" id="home">
        //             <div className="container mx-auto px-4 py-16">
        //               <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        //                 <div className="text-center md:text-left">
        //                   <div className="inline-block relative mb-6">
        //                     <div className="absolute -inset-1 bg-yellow-400 rounded-full animate-pulse"></div>
        //                     <Trophy className="w-16 h-16 relative animate-bounce" />
        //                   </div>
        //                   <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400 mb-4">
        //                     Celebrating 25 Years
        //                   </h1>
        //                   <p className="text-xl text-blue-200 mb-8">of Excellence in Technology Education</p>
        //                   <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        //                     <button className="inline-flex items-center px-6 py-3 bg-yellow-400 text-blue-900 rounded-full font-semibold transform hover:scale-105 transition-all hover:shadow-lg">
        //                       <Award className="w-5 h-5 mr-2" />
        //                       Enroll Now
        //                     </button>
        //                     <button className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all hover:shadow-lg">
        //                       <MessageSquare className="w-5 h-5 mr-2" />
        //                       Contact Us
        //                     </button>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //           </section>


        //         </div>
              );
            }
            
export default Home;
            