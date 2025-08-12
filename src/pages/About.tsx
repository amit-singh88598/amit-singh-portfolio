import React, { useEffect, useRef } from 'react';
import amitProfile from '../assets/amitProfile.png';
import ABRA from '../assets/ABRA.svg';
import DHS from '../assets/DHS.png';


import { 
  fadeInUp, 
  slideInFromTop, 
  bounceIn, 
  flipIn, 
  rotateScaleIn,
  createScrollAnimation 
} from '../utils/animations';

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const profileImageRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations with different effects
    if (titleRef.current) {
      slideInFromTop(titleRef.current, 0.2);
    }
    if (subtitleRef.current) {
      fadeInUp(subtitleRef.current, 0.4);
    }
    if (profileImageRef.current) {
      rotateScaleIn(profileImageRef.current, 0.6);
    }

    // Scroll-triggered animations for different sections
    createScrollAnimation('.personal-info', 'fadeInLeft');
    createScrollAnimation('.profile-stats', 'fadeInRight');
    
    // Values section with bounce effect
    if (valuesRef.current) {
      const valueCards = Array.from(valuesRef.current.querySelectorAll('.value-card'));
      valueCards.forEach((card, index) => {
        setTimeout(() => {
          bounceIn(card, index * 0.1);
        }, 800);
      });
    }

    // Certifications with flip animation
    if (certificationRef.current) {
      const certCards = Array.from(certificationRef.current.querySelectorAll('.cert-card'));
      certCards.forEach((card, index) => {
        setTimeout(() => {
          flipIn(card, index * 0.2);
        }, 1200);
      });
    }

    // Additional scroll animations
    createScrollAnimation('.journey-section', 'fadeInUp');
    createScrollAnimation('.developer-image', 'elasticScale');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section id="main-content" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" ref={heroRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center px-4">
            <h1 
              ref={titleRef}
              className="about-title text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 opacity-0"
            >
              About Me
            </h1>
            <p 
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate about creating inclusive digital experiences through modern frontend development
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div 
                ref={profileImageRef}
                className="w-80 h-80 rounded-full mx-auto overflow-hidden shadow-2xl border-4 border-primary-200 opacity-0"
              >
                <img 
                  src={amitProfile}
                  alt="Amit Singh - Frontend Engineer & Accessibility Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="personal-info space-y-6 opacity-0">
              <h2 className="text-3xl font-bold text-secondary-900">
                Frontend Engineer & Accessibility Specialist
              </h2>
              <p className="text-lg text-secondary-700 leading-relaxed">
                With over 4.5 years of experience in frontend development, I specialize in creating 
                modern, accessible web applications using React.js, TypeScript, and cutting-edge CSS frameworks.
              </p>
              <p className="text-lg text-secondary-700 leading-relaxed">
                My passion lies in building inclusive digital experiences that work for everyone, 
                regardless of their abilities or the technology they use to access the web.
              </p>
              
              <div className="profile-stats grid grid-cols-2 gap-6 pt-6 opacity-0">
                <div className="text-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-primary-600 mb-1">4.5+</div>
                  <div className="text-secondary-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-primary-600 mb-1">3</div>
                  <div className="text-secondary-600">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
              Core Values & Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-secondary-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  User-Centered Design
                </h3>
                <p className="text-secondary-600">
                  Every decision I make prioritizes the end user's experience, ensuring 
                  interfaces are intuitive and accessible to all users.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border border-secondary-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  Quality & Standards
                </h3>
                <p className="text-secondary-600">
                  I adhere to web standards, best practices, and accessibility guidelines 
                  to deliver high-quality, maintainable code.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border border-secondary-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  Continuous Learning
                </h3>
                <p className="text-secondary-600">
                  I stay current with emerging technologies and industry trends to 
                  deliver cutting-edge solutions and maintain technical excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-secondary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-secondary-900 mb-8">
              Professional Certifications
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-center text-secondary-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Passionate about creating inclusive digital experiences through modern frontend development
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-secondary-200">
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <img 
                      src={DHS}
                      alt="Department of Homeland Security"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">
                      DHS Section 508 Certified
                    </h3>
                    <p className="text-secondary-600">
                      Department of Homeland Security accessibility compliance certification
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-secondary-200">
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <img 
                      src={DHS}
                      alt="Department of Homeland Security"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">
                      Trusted Tester Certified
                    </h3>
                    <p className="text-secondary-600">
                      Advanced accessibility testing tools and methodologies certification
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-secondary-200">
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <img 
                      src={ABRA}
                      alt="ABRA Accessibility Certification"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">
                      Accessibility For iOS/ Android Apps
                    </h3>
                    <p className="text-secondary-600">
                      Accessibility testing on iOS and Andriod Apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="about-title text-3xl font-bold text-secondary-900 mb-4 sm:mb-6">
              Education
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    BTech in Computer Science & Engineering
                  </h3>
                  <p className="text-lg text-primary-600 font-medium mb-2">
                    Uttarakhand Technical University, Dehradun
                  </p>
                  <p className="text-secondary-600 mb-4">
                    2016 - 2020
                  </p>
                  <p className="text-secondary-700">
                    Comprehensive foundation in computer science principles, software engineering, 
                    data structures, algorithms, and modern programming practices that laid the 
                    groundwork for my frontend development and accessibility expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
