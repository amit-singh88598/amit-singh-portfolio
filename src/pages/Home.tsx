import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AIImage from '../components/AIImage';
import { fadeInUp, staggerFadeInUp, createScrollAnimation, animateCounter } from '../utils/animations';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    if (titleRef.current) {
      fadeInUp(titleRef.current, 0.2);
    }
    if (subtitleRef.current) {
      fadeInUp(subtitleRef.current, 0.4);
    }
    if (buttonsRef.current) {
      fadeInUp(buttonsRef.current, 0.6);
    }

    // Scroll-triggered animations
    if (highlightsRef.current) {
      const highlights = Array.from(highlightsRef.current.querySelectorAll('.highlight-card'));
      staggerFadeInUp(highlights, 0);
    }

    // Animate counters
    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach((el, index) => {
      const value = parseInt(el.textContent || '0');
      animateCounter(el, value, 2);
    });

    // Scroll animations for sections
    createScrollAnimation('.workspace-section', 'fadeInLeft');
    createScrollAnimation('.workspace-image', 'fadeInRight');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section id="main-content" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" ref={heroRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4 sm:mb-6 opacity-0 px-4"
            >
              Amit Singh
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-600 font-semibold mb-4 px-4">
              Frontend Engineer | Accessibility Specialist
            </h2>
            <p 
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 px-4"
            >
              4.5+ years of experience crafting modern, accessible, and user-friendly web applications 
              using React.js, Next.js, and cutting-edge frontend technologies with WCAG 2.2 compliance.
            </p>
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-secondary-600 px-4">
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">Dehradun, Uttarakhand</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:7300689054" className="hover:text-primary-600 transition-colors">7300689054</a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:amitsingh992728@gmail.com" className="hover:text-primary-600 transition-colors truncate">amitsingh992728@gmail.com</a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/in/amit-singh-71755b159" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">LinkedIn Profile</a>
              </div>
            </div>

            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0 px-4"
            >
              <Link
                to="/experience"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Experience
              </Link>
              <Link
                to="/skills"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 border border-primary-600 text-sm sm:text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Skills
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" ref={highlightsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Why Choose Me</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Combining technical expertise with accessibility focus to deliver exceptional user experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="highlight-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-xl font-bold">A11Y</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Accessibility Expert</h3>
              <p className="text-secondary-600">
                DHS Section 508 certified with expertise in WCAG 2.1/2.2 compliance and inclusive design
              </p>
            </div>
            <div className="highlight-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-xl font-bold">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">React Specialist</h3>
              <p className="text-secondary-600">
                4+ years building scalable React applications with TypeScript and modern development practices
              </p>
            </div>
            <div className="highlight-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-xl font-bold">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Design Systems</h3>
              <p className="text-secondary-600">
                Proficient in Tailwind CSS, Material UI, and creating consistent, maintainable design systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Workspace Showcase */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="workspace-section">
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Modern Development Environment
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Working with cutting-edge tools and technologies to deliver 
                exceptional web experiences that meet the highest accessibility standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                  <span className="text-secondary-700">Modern IDE with accessibility extensions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                  <span className="text-secondary-700">Real-time accessibility testing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                  <span className="text-secondary-700">Cross-browser compatibility testing</span>
                </div>
              </div>
            </div>
            <div className="relative workspace-image">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <AIImage 
                  type="tech-workspace" 
                  alt="Modern developer workspace with multiple monitors and coding environment"
                  className="w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2 counter">4+</div>
              <div className="text-secondary-600">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2 counter">50</div>
              <div className="text-secondary-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2 counter">2</div>
              <div className="text-secondary-600">Certifications</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2 counter">100</div>
              <div className="text-secondary-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
