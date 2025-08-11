import React, { useEffect, useRef } from 'react';
import AIImage from '../components/AIImage';
import { 
  bounceIn, 
  flipIn, 
  rotateScaleIn, 
  elasticScale,
  slideAndFade,
  createScrollAnimation 
} from '../utils/animations';

const Experience: React.FC = () => {

  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const codingImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations with different effects
    if (titleRef.current) {
      elasticScale(titleRef.current, 0.2);
    }

    // Timeline items with staggered bounce animations
    if (timelineRef.current) {
      const timelineItems = Array.from(timelineRef.current.querySelectorAll('.timeline-item'));
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          slideAndFade(item, index % 2 === 0 ? 'left' : 'right', index * 0.2);
        }, 500);
      });
    }

    // Achievements with flip animations
    if (achievementsRef.current) {
      const achievementCards = Array.from(achievementsRef.current.querySelectorAll('.achievement-card'));
      achievementCards.forEach((card, index) => {
        setTimeout(() => {
          flipIn(card, index * 0.15);
        }, 1000);
      });
    }

    // Tech stack with rotate and scale animations
    if (techStackRef.current) {
      const techItems = Array.from(techStackRef.current.querySelectorAll('.tech-item'));
      techItems.forEach((item, index) => {
        setTimeout(() => {
          rotateScaleIn(item, index * 0.1);
        }, 1500);
      });
    }

    // Coding image with bounce effect
    if (codingImageRef.current) {
      setTimeout(() => {
        bounceIn(codingImageRef.current!, 0);
      }, 2000);
    }

    // Scroll-triggered animations
    createScrollAnimation('.experience-intro', 'fadeInUp');
    createScrollAnimation('.coding-showcase', 'fadeInLeft');
  }, []);

  const experiences = [
    {
      title: "Frontend Engineer",
      company: "Rubico IT",
      period: "January 2022 - Present",
      description: "Developed responsive web applications using HTML, CSS, JavaScript, ReactJS, Bootstrap, Sass, Tailwind, Webpack, and implemented WCAG 2.2 guidelines using ARIA implementation and following best practices for ADA compliant.",
      achievements: [
        "Implemented efficient and reusable components using ReactJS, Nextjs, JavaScript resulting in improved website performance",
        "Worked on EPUB and UI Design, building websites in WordPress from scratch using reusable templates",
        "Optimized applications for cross-browser compatibility, maximum speed, and scalability",
        "Performed Mobile accessibility/ Web accessibility unit testing along with Accessibility Audits using (NVDA, JAWS, and VOICEOVER) and Remediation",
        "Performed Accessibility Audits (WCAG 2.0, WCAG 2.1, WCAG 2.2, and Section 508)"
      ],
      technologies: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Sass", "Tailwind CSS", "Webpack", "WCAG 2.2", "ARIA", "NVDA", "JAWS", "VOICEOVER"]
    },
    {
      title: "Frontend Web Developer",
      company: "Digaut pvt ltd",
      period: "October 2020 - January 2022",
      description: "Developed responsive web applications using HTML, CSS, ReactJS, Tailwind CSS, MUI, Bootstrap, and jQuery. Performed accessibility testing as per ADA compliance.",
      achievements: [
        "Built responsive web applications using modern frontend technologies",
        "Implemented accessibility testing and compliance with ADA standards",
        "Collaborated with design teams to create pixel-perfect user interfaces",
        "Gained expertise in multiple CSS frameworks and JavaScript libraries"
      ],
      technologies: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Material UI", "Bootstrap", "jQuery", "ADA Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h1 
            ref={titleRef}
            className="experience-title text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 opacity-0"
          >
            Professional Experience
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            4.5+ years of frontend development and accessibility expertise across innovative projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200"></div>
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 w-0.5 h-full bg-primary-200"></div>
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-item opacity-0 ${
                // Mobile: all items align left, Desktop: alternate left/right
                'md:flex md:items-center ' + (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
              }`}>
                {/* Mobile Layout */}
                <div className="md:hidden flex">
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <div className="w-3 h-3 bg-primary-600 rounded-full mr-3 mb-2 sm:mb-0"></div>
                        <span className="text-xs sm:text-sm text-primary-600 font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-2">{exp.title}</h3>
                      <p className="text-primary-600 font-medium mb-3">{exp.company}</p>
                      <p className="text-sm sm:text-base text-secondary-700 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-700 text-xs sm:text-sm rounded-full hover:bg-primary-200 transition-colors duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block md:w-1/2 px-4 lg:px-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-sm text-primary-600 font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">{exp.title}</h3>
                    <p className="text-primary-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-secondary-700 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full hover:bg-primary-200 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Excellence Showcase */}
        <section className="py-16 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="coding-showcase opacity-0">
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                  Coding Excellence
                </h2>
                <p className="text-lg text-secondary-700 mb-6">
                  Committed to writing clean, maintainable, and accessible code that follows 
                  industry best practices and modern development standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-secondary-700">Test-driven development approach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-secondary-700">Code review and quality assurance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-secondary-700">Performance optimization techniques</span>
                  </div>
                </div>
              </div>
              <div 
                ref={codingImageRef}
                className="relative opacity-0"
              >
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <AIImage 
                    type="coding" 
                    alt="Developer working on clean, accessible code"
                    className="w-full h-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Highlights */}
        <div className="mt-20 bg-secondary-50 rounded-lg p-8" ref={achievementsRef}>
          <h3 className="text-2xl font-bold text-center text-secondary-900 mb-8">
            Professional Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="achievement-card text-center opacity-0 hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.5+</div>
              <div className="text-secondary-600 font-medium">Years of Experience</div>
            </div>
            <div className="achievement-card text-center opacity-0 hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-secondary-600 font-medium">Major Projects</div>
            </div>
            <div className="achievement-card text-center opacity-0 hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-primary-600 mb-2">WCAG 2.2</div>
              <div className="text-secondary-600 font-medium">Compliance Expert</div>
            </div>
            <div className="achievement-card text-center opacity-0 hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <div className="text-secondary-600 font-medium">Certifications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3 sm:mb-4">Featured Projects</h2>
            <p className="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed">
              Real-world applications showcasing modern frontend development and accessibility expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Doorest Project */}
            <div className="bg-white rounded-lg shadow-lg border border-secondary-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="text-xl font-bold">Doorest</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Doorest - Service Platform</h3>
                <p className="text-secondary-700 mb-4">
                  A comprehensive service platform and e-commerce solution connecting users with essential services. 
                  Enhanced application performance and user experience through effective frontend and API integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">React.js</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">E-commerce</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">API Integration</span>
                </div>
                <a 
                  href="https://doorest.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* LOCMA Project */}
            <div className="bg-white rounded-lg shadow-lg border border-secondary-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">LOCMA</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">LOCMA - Local Business Platform</h3>
                <p className="text-secondary-700 mb-4">
                  A hyper-local e-commerce platform connecting local businesses with customers. 
                  Developed the UI with seamless user experience by following WCAG 2.2 guidelines and ADA compliance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">React.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">WCAG 2.2</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">ADA Compliance</span>
                </div>
                <a 
                  href="https://locma.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Tunescribers Project */}
            <div className="bg-white rounded-lg shadow-lg border border-secondary-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <h3 className="text-xl font-bold">Tunescribers</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Tunescribers - Music Platform</h3>
                <p className="text-secondary-700 mb-4">
                  An e-commerce platform connecting music lovers to musicians. 
                  Developed the UI with seamless user experience in Next.js, using Shadcn UI library, Tailwind CSS, 
                  and following accessibility best practices by WCAG 2.2.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Shadcn UI</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">WCAG 2.2</span>
                </div>
                <a 
                  href="https://tunescribers.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
