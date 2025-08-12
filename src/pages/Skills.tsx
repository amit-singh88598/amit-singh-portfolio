import React, { useEffect, useRef } from "react";
import AIImage from "../components/AIImage";
import {
  bounceIn,
  flipIn,
  rotateScaleIn,
  elasticScale,
  createScrollAnimation,
  animateProgressBar,
} from "../utils/animations";

const Skills: React.FC = () => {
  const techGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero title with elastic scale animation
    setTimeout(() => {
      createScrollAnimation(".skills-title", "elasticScale");
    }, 200);

    // Skill categories with diverse animations
    setTimeout(() => {
      createScrollAnimation(".css-skills", "flipIn");
      createScrollAnimation(".tools-skills", "bounceIn");
      createScrollAnimation(".testing-skills", "rotateScaleIn");
      createScrollAnimation(".certifications-skills", "fadeInRight");
    }, 500);

    // Technology icons with staggered diverse animations
    if (techGridRef.current) {
      const techItems = Array.from(
        techGridRef.current.querySelectorAll(".tech-item")
      );
      techItems.forEach((item, index) => {
        const animations = [
          "bounceIn",
          "flipIn",
          "rotateScaleIn",
          "elasticScale",
        ];
        const randomAnimation = animations[index % animations.length];
        setTimeout(() => {
          if (randomAnimation === "bounceIn") bounceIn(item, 0);
          else if (randomAnimation === "flipIn") flipIn(item, 0);
          else if (randomAnimation === "rotateScaleIn") rotateScaleIn(item, 0);
          else elasticScale(item, 0);
        }, 800 + index * 100);
      });
    }

    // Accessibility showcase with slide animations
    setTimeout(() => {
      createScrollAnimation(".accessibility-showcase", "fadeInLeft");
      createScrollAnimation(".accessibility-image", "fadeInRight");
    }, 1200);

    // Progress bars with animated fills
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar, index) => {
      const percentage = parseInt(bar.getAttribute("data-percentage") || "0");
      setTimeout(() => {
        animateProgressBar(bar, percentage);
      }, 1500 + index * 200);
    });
  }, []);

  // Technology icon mapping with SVG icons
  const getSkillIcon = (skillName: string): React.ReactElement => {
    const iconClass = "w-5 h-5";

    switch (skillName) {
      case "React.js":
        return (
          <div className="text-blue-500">
            <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
            </svg>
          </div>
        );
      case "HTML5":
        return (
          <div className="text-orange-500">
            <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
            </svg>
          </div>
        );
      case "CSS3":
        return (
          <div className="text-blue-600">
            <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
            </svg>
          </div>
        );
      case "JavaScript":
        return (
          <div className="text-yellow-500">
            <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="text-gray-500">
            <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        );
    }
  };

  const skillCategories = [
    {
      title: "Frontend Frameworks & Libraries",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      skills: [
        {
          name: "React.js",
          level: 95,
          description: "Advanced component architecture, hooks, context API",
        },
        {
          name: "HTML5",
          level: 98,
          description: "Semantic markup, accessibility best practices",
        },
        {
          name: "CSS3",
          level: 95,
          description: "Modern CSS, Flexbox, Grid, animations",
        },
        {
          name: "TypeScript",
          level: 90,
          description: "Type-safe JavaScript development",
        },
        {
          name: "JavaScript",
          level: 95,
          description: "ES6+, async/await, modern features",
        },
      ],
    },
    {
      title: "CSS Frameworks & Preprocessors",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      skills: [
        {
          name: "Tailwind CSS",
          level: 92,
          description: "Utility-first CSS framework",
        },
        { name: "SCSS", level: 88, description: "Advanced Sass preprocessing" },
        { name: "LESS", level: 85, description: "Dynamic stylesheet language" },
        {
          name: "Bootstrap",
          level: 90,
          description: "Responsive grid system and components",
        },
        {
          name: "Material UI",
          level: 87,
          description: "React component library",
        },
      ],
    },
    {
      title: "Accessibility & Testing",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      skills: [
        {
          name: "WCAG 2.1",
          level: 95,
          description: "Web Content Accessibility Guidelines",
        },
        {
          name: "WCAG 2.2",
          level: 93,
          description: "Latest accessibility standards",
        },
        {
          name: "Section 508",
          level: 94,
          description: "Federal accessibility compliance",
        },
        {
          name: "EN 301 549",
          level: 90,
          description: "European accessibility standard",
        },
        {
          name: "WAVE",
          level: 90,
          description: "Web accessibility evaluation tool",
        },
        {
          name: "AXE Dev",
          level: 92,
          description: "Accessibility testing toolkit",
        },
        {
          name: "Sort Site",
          level: 85,
          description: "Accessibility scanning and testing",
        },
        { name: "NVDA", level: 88, description: "Screen reader testing" },
        { name: "JAWS", level: 85, description: "Screen reader compatibility" },
        {
          name: "Voiceover",
          level: 87,
          description: "macOS accessibility testing",
        },
      ],
    },
    {
      title: "Development Tools & Workflow",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: [
        {
          name: "Git",
          level: 90,
          description: "Version control and collaboration",
        },
        {
          name: "Figma",
          level: 85,
          description: "Design to development workflow",
        },
        {
          name: "Webpack",
          level: 80,
          description: "Module bundling and optimization",
        },
        {
          name: "Vite",
          level: 82,
          description: "Fast build tool and dev server",
        },
        {
          name: "ESLint",
          level: 88,
          description: "Code quality and consistency",
        },
      ],
    },
    {
      title: "Project Management & Collaboration",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      skills: [
        {
          name: "Agile",
          level: 90,
          description: "Agile development methodology",
        },
        {
          name: "Scrum",
          level: 88,
          description: "Sprint planning and execution",
        },
        {
          name: "Jira",
          level: 85,
          description: "Issue tracking and project management",
        },
        {
          name: "Wrike",
          level: 80,
          description: "Team collaboration platform",
        },
        { name: "ClickUp", level: 82, description: "All-in-one workspace" },
        { name: "Trello", level: 87, description: "Kanban board management" },
      ],
    },
  ];

  const certifications = [
    {
      name: "DHS Section 508 Certified",
      issuer: "Department of Homeland Security",
      description: "Federal accessibility compliance certification",
      year: "2023",
    },
    {
      name: "Trusted Tester Testing Tools Certified",
      issuer: "DHS Accessibility Program",
      description: "Advanced accessibility testing methodologies",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h1 className="skills-title text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 opacity-0">
            Skills & Technologies
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in modern frontend technologies with a focus
            on accessibility and user experience
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg shadow-lg border border-secondary-200 p-4 sm:p-6 lg:p-8"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-primary-600 flex-shrink-0">
                  {category.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-secondary-900">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 min-w-0 flex-1">
                        <div className="text-lg sm:text-xl flex-shrink-0">
                          {getSkillIcon(skill.name)}
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-secondary-900 truncate">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-primary-600 ml-2 flex-shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-secondary-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-8">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, certIndex) => (
              <div
                key={certIndex}
                className="bg-white rounded-lg p-6 border border-secondary-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-secondary-600 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Excellence Showcase */}
        <div className="bg-primary-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Accessibility-First Development
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Creating inclusive web experiences that work for everyone,
                regardless of their abilities or the technologies they use to
                access the web.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-green-600 text-xl mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">
                    WCAG 2.1 & 2.2 Compliance
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-blue-600 text-xl mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">
                    Screen Reader Optimization
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-purple-600 text-xl mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">
                    Keyboard Navigation Support
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-purple-600 text-xl mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19Z" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">
                    Mobile First Approach
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-600 text-xl mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">
                    Color Contrast Optimization
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <AIImage
                  type="accessibility"
                  alt="Accessibility testing interface showing WCAG compliance tools and screen reader compatibility"
                  className="w-full h-80"
                />
              </div>
            </div>
          </div>

          {/* Technical Expertise Summary */}
          <h3 className="text-2xl font-bold text-center text-secondary-900 mb-14">
            Technical Expertise Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                15+
              </div>
              <div className="text-secondary-600 font-medium">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">7+</div>
              <div className="text-secondary-600 font-medium">
                Testing Tools
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">6+</div>
              <div className="text-secondary-600 font-medium">PM Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-secondary-600 font-medium">
                Certifications
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
