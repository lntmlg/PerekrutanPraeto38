'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
    CheckCircle2, UploadCloud, Loader2, ServerCrash, Send, Target, Eye, Rocket, ChevronLeft, ChevronRight, 
    Users, Briefcase, Presentation, Shirt, Award, Menu, X, CheckCircle, MessageSquare, Globe, Instagram,
    CalendarDays, UserCheck, Megaphone, Swords
} from 'lucide-react';

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6902H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
    </svg>
);


// --- Navbar Component ---
const Navbar = ({ onLinkClick, activeSection }: { onLinkClick: (id: string) => void; activeSection: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navLinks = ["About", "Benefits", "Timeline", "Apply"];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (id: string) => {
        onLinkClick(id.toLowerCase());
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d1a2e]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img 
                            className="h-25 w-auto" 
                            src="https://miro.medium.com/v2/resize:fit:1400/1*KSH-ELYLBI0dzE1Wt7mRKg.png" 
                            alt="BNCC Skills Logo" 
                        />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {navLinks.map((link) => (
                                <button 
                                    key={link} 
                                    onClick={() => handleLinkClick(link)} 
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${activeSection === link.toLowerCase() ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {link}
                                    {activeSection === link.toLowerCase() && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-[#00a9e0] rounded-full transition-all duration-300"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-800/50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0d1a2e]">
                    {navLinks.map((link) => (
                        <button key={link} onClick={() => handleLinkClick(link)} className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors">
                            {link}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};


// --- Slideshow Component ---
const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/BEM03815.jpg",
    "/images/BEM03816.jpg",
    "/images/FE%20Sesi%20%231%20SS1.png",
    "/images/session4.png",
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
      {images.map((src, index) => (
        <img key={src} src={src} alt={`Slideshow image ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover bg-black transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} />
      ))}
       <div className="absolute inset-0 bg-black/30"></div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors focus:outline-none"><ChevronLeft className="h-6 w-6 text-white"/></button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors focus:outline-none"><ChevronRight className="h-6 w-6 text-white"/></button>
    </div>
  );
};

// --- Footer Component ---
const Footer = () => {
    const socialLinks = [
        { name: 'Website', icon: Globe, href: 'https://bncc.net/' },
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/bnccmalang/' },
        { name: 'X', icon: TwitterIcon, href: 'https://x.com/BNCC_Binus' },
    ];
    return (
        <footer className="bg-gray-900/50 border-t border-gray-700/50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white">Have any questions?</h3>
                    <p className="mt-2 text-gray-400">Contact our recruitment admin:</p>
                    <p className="mt-2 text-lg font-medium text-[#00a9e0]">Darren Gavriel Suntara</p>
                    <p className="text-gray-300">+62 812-3850-6716</p>
                </div>
                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map(link => (
                        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
                            <span className="sr-only">{link.name}</span>
                            <link.icon className="h-6 w-6" />
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-gray-500 text-sm">&copy; {new Date().getFullYear()} BNCC Learning & Training. All rights reserved.</p>
            </div>
        </footer>
    );
};

// --- Thank You Page Component ---
const ThankYouPage = ({ onBack }: { onBack: () => void }) => {
  const whatsappLink = "https://chat.whatsapp.com/FFM8A2506cG3oOZfwUEq3j";

  const handleBack = () => {
    // Force a full page refresh after going back
    window.location.href = window.location.origin;
  };

  return (
    <div className="bg-[#0d1a2e] min-h-screen text-white antialiased flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full text-center bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 sm:p-12 rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#00a9e0]/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-10 w-48 h-48 bg-sky-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="relative z-10">
          <CheckCircle className="h-20 w-20 mx-auto mb-6 text-green-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">Thank You!</h1>
          {/* FIX: Escaped apostrophe in "We've" */}
          <p className="mt-4 text-lg text-gray-300">Your application has been successfully submitted. We&apos;ve received your details and will review them shortly.</p>
          <div className="my-8 h-px bg-gray-700/50"></div>
           {/* FIX: Escaped apostrophe in "What's" */}
          <h2 className="text-xl font-bold text-white">What&apos;s Next?</h2>
          <p className="mt-2 text-gray-400">
            To complete your application, it is <strong>mandatory</strong> to join our official WhatsApp group for further announcements and the next stages of the recruitment process.
          </p>
          <div className="mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center py-3 px-8 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              Join WhatsApp Group
            </a>
          </div>
          <div className="mt-12">
            <button onClick={handleBack} className="text-sm text-sky-400 hover:underline">
              &larr; Back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Animated Section Wrapper ---
const AnimatedSection = ({ children, id, className = '' }: { children: React.ReactNode, id: string, className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section
            ref={ref}
            id={id}
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
        >
            {children}
        </section>
    );
};

// --- Section Separator Component ---
const SectionSeparator = () => {
    return (
        <div className="relative my-16 h-px bg-gradient-to-r from-transparent via-[#00a9e0]/50 to-transparent">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#0d1a2e] rotate-45 border-t border-l border-[#00a9e0]/50 shadow-[0_0_15px_5px_rgba(0,169,224,0.3)]"></div>
        </div>
    );
};

// --- Timeline Component (NEW) ---
const Timeline = ({ events }: { events: any[] }) => {
    return (
        <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700/50" aria-hidden="true"></div>

            <div className="relative flex flex-col gap-y-12">
                {events.map((event, index) => (
                    <div key={index} className="relative flex items-center">
                        {/* Content Left */}
                        <div className="w-1/2 pr-8 text-right">
                            <p className="font-bold text-lg text-white">{event.title}</p>
                            <p className="text-gray-400">{event.date}</p>
                        </div>

                        {/* Center Dot and Icon */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#0d1a2e] rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center ring-4 ring-[#0d1a2e]">
                                <event.icon className="w-5 h-5 text-[#00a9e0]" />
                            </div>
                        </div>

                        {/* Content Right */}
                        <div className="w-1/2 pl-8">
                            <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-4 rounded-xl shadow-lg">
                                <p className="text-gray-300">{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Main App Component ---
export default function App() {
  const [activeSection, setActiveSection] = useState('');


  useEffect(() => {
    // This effect now only handles UI setup like title and scroll observers.
    document.title = "BNCC LnT - Open Recruitment Praetorian 38";
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'https://miro.medium.com/v2/resize:fit:1400/1*KSH-ELYLBI0dzE1Wt7mRKg.png';
    
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        { rootMargin: "-30% 0px -30% 0px" } 
    );
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const positions = ["UI/UX Design", "Back-end Development", "Java Programming", "Front-end Development", "C Programming"];
  const qualifications = ["Binusian", "Member or activist or Alumni BNCC", "Able to work in a team and individually", "Public speaking and teaching skills is a plus"];
  const benefits = [
    { icon: Users, title: "Networking", desc: "Connect with peers, seniors, and alumni." },
    { icon: Briefcase, title: "Portfolio", desc: "Build real-world projects to showcase your skills." },
    { icon: Presentation, title: "Teaching Experience", desc: "Develop communication and leadership skills." },
    { icon: Shirt, title: "Exclusive BNCC Attire", desc: "Get official apparel to represent our community." },
    { icon: Award, title: "E-Certificate", desc: "Receive official recognition for your contribution." },
  ];

  const timelineEvents = [
    { icon: CalendarDays, title: "Open Recruitment", date: "6 July - 7 August", description: "Submit your application to become part of the team." },
    { icon: UserCheck, title: "Interview & Simulation", date: "10 - 16 August", description: "Showcase your skills and passion in interviews and a teaching simulation." },
    { icon: Megaphone, title: "Announcement", date: "20 August", description: "Successful candidates will be announced." },
    { icon: Swords, title: "Training Begins", date: "24 August onwards", description: "Get ready for the new LnT Class Season with comprehensive training." },
  ];

  return (
    <div className="bg-[#0d1a2e] min-h-screen text-white antialiased">
      <Navbar onLinkClick={scrollTo} activeSection={activeSection} />
      
      <header className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black"><img src="/images/BEM03815.jpg" alt="Team members working together" className="w-full h-full object-cover object-top opacity-50" /></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2e] via-[#0d1a2e]/80 to-transparent"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg animate-fade-in-up">Open Recruitment</h1>
            <p className="mt-4 text-2xl md:text-3xl font-semibold text-[#00a9e0] animate-fade-in-up animation-delay-300">Praetorian LnT 38</p>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection id="about" className="pt-16 md:pt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About The <span className="text-[#00a9e0]">Learning & Training</span> Division</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* FIX: Escaped apostrophe in "BNCC's" */}
              <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl"><Rocket className="h-10 w-10 mx-auto mb-4 text-[#00a9e0]" /><h3 className="text-xl font-bold mb-2">Who We Are</h3><p className="text-gray-400">The Learning & Training (LnT) division is the core of BNCC&apos;s educational mission. We are a passionate team dedicated to designing and delivering high-quality tech training for all BNCC members.</p></div>
              <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl"><Target className="h-10 w-10 mx-auto mb-4 text-[#00a9e0]" /><h3 className="text-xl font-bold mb-2">Our Mission</h3><p className="text-gray-400">To empower BNCC members with relevant IT skills through continuous learning, fostering a culture of knowledge-sharing, and preparing them for the competitive tech industry.</p></div>
              <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl"><Eye className="h-10 w-10 mx-auto mb-4 text-[#00a9e0]" /><h3 className="text-xl font-bold mb-2">Our Vision</h3><p className="text-gray-400">To be the leading student-driven IT training organization in Indonesia that actively develops competent and innovative technology enthusiasts.</p></div>
            </div>
          </AnimatedSection>

          <SectionSeparator />

          <AnimatedSection id="benefits">
            <div className="py-16 md:py-24" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '1.5rem 1.5rem' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map(benefit => (<div key={benefit.title} className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-6 rounded-2xl flex items-start space-x-4 transition-transform duration-300 hover:scale-105 hover:bg-gray-800/50"><div className="flex-shrink-0 bg-gray-700 p-3 rounded-full"><benefit.icon className="h-6 w-6 text-[#00a9e0]" /></div><div><h3 className="text-lg font-bold text-white">{benefit.title}</h3><p className="text-gray-400 mt-1">{benefit.desc}</p></div></div>))}
                </div>
            </div>
          </AnimatedSection>
          
          <SectionSeparator />
          
          <AnimatedSection id="timeline">
            <div className="py-16 md:py-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Recruitment Timeline</h2>
                <Timeline events={timelineEvents} />
            </div>
          </AnimatedSection>

          <SectionSeparator />

          <div className="py-16 md:py-24 space-y-24">
             <AnimatedSection id="poster"><h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Join The Praetorians</h2><div className="max-w-md mx-auto bg-gray-900 p-4 rounded-2xl shadow-2xl"><img src="/images/perekrutan praeto BNCC.png" alt="Praetorian LnT 37 Recruitment Poster" className="rounded-lg w-full"/></div></AnimatedSection>
             <AnimatedSection id="gallery"><h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Life at LnT BNCC</h2><ImageSlideshow /></AnimatedSection>
          </div>

          <SectionSeparator />

          <AnimatedSection id="apply">
            <div className="py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl h-full">
                    <h2 className="text-2xl font-bold text-white mb-5">QUALIFICATIONS</h2>
                    <ul className="space-y-4 text-gray-300">
                      {qualifications.map(q => (
                        <li key={q} className="flex items-baseline">
                          <span className="text-[#00a9e0] mr-3">&#8226;</span>
                          <span className="flex-1">{q}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 text-gray-400 italic">Step up and make an impact! Become a Praetorian LnT 37 and help shape the future of BNCC LnT!</p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">APPLICATION FORM</h2>
                    <div className="space-y-6">
                      <div className="mx-auto flex max-w-[280px] justify-center overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/60 p-0">
                        <img src="/images/ApplicationForm.jpeg" alt="Praetorian recruitment application form" className="h-auto w-full max-w-[280px] object-contain rounded-2xl" />
                      </div>
                      <div className="text-center">
                        <a
                          href="https://bncc.in/PraetorianRegis38"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md bg-[#00a9e0] px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-500"
                        >
                          Open Registration Form
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}