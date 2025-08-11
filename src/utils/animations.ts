import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation configurations
export const animationConfig = {
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.1,
};

// Fade in from bottom animation
export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element, 
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      delay,
    }
  );
};

// Fade in from left animation
export const fadeInLeft = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      x: -60,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      delay,
    }
  );
};

// Fade in from right animation
export const fadeInRight = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      x: 60,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      delay,
    }
  );
};

// Fade out animation
export const fadeOut = (element: string | Element, delay: number = 0) => {
  return gsap.to(element, {
    opacity: 0,
    duration: animationConfig.duration,
    ease: animationConfig.ease,
    delay,
  });
};

// Slide in from top animation
export const slideInFromTop = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: "bounce.out",
      delay,
    }
  );
};

// Slide in from bottom animation
export const slideInFromBottom = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: "back.out(1.7)",
      delay,
    }
  );
};

// Rotate and scale in animation
export const rotateScaleIn = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      rotation: -180,
      scale: 0,
      opacity: 0,
    },
    {
      rotation: 0,
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay,
    }
  );
};

// Bounce in animation
export const bounceIn = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "bounce.out",
      delay,
    }
  );
};

// Flip in animation
export const flipIn = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      rotationY: -90,
      opacity: 0,
    },
    {
      rotationY: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay,
    }
  );
};

// Elastic scale animation
export const elasticScale = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      scale: 0.3,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
      delay,
    }
  );
};

// Slide and fade animation
export const slideAndFade = (element: string | Element, direction: 'left' | 'right' | 'up' | 'down' = 'up', delay: number = 0) => {
  const directions = {
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
    up: { x: 0, y: -80 },
    down: { x: 0, y: 80 },
  };

  return gsap.fromTo(element,
    {
      ...directions[direction],
      opacity: 0,
      scale: 0.8,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      delay,
    }
  );
};

// Scale in animation
export const scaleIn = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: animationConfig.duration,
      ease: "back.out(1.7)",
      delay,
    }
  );
};

// Stagger animation for multiple elements
export const staggerFadeInUp = (elements: string | Element[], delay: number = 0) => {
  return gsap.fromTo(elements,
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      stagger: animationConfig.stagger,
      delay,
    }
  );
};

// Scroll-triggered animations
export const createScrollAnimation = (
  element: string | Element,
  animationType: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'bounceIn' | 'slideInFromTop' | 'slideInFromBottom' | 'flipIn' | 'rotateScaleIn' | 'elasticScale' = 'fadeInUp'
) => {
  const animations = {
    fadeInUp: { y: 60, opacity: 0 },
    fadeInLeft: { x: -60, opacity: 0 },
    fadeInRight: { x: 60, opacity: 0 },
    scaleIn: { scale: 0.8, opacity: 0 },
    bounceIn: { scale: 0, opacity: 0 },
    slideInFromTop: { y: -100, opacity: 0 },
    slideInFromBottom: { y: 100, opacity: 0 },
    flipIn: { rotationY: -90, opacity: 0 },
    rotateScaleIn: { rotation: -180, scale: 0, opacity: 0 },
    elasticScale: { scale: 0.3, opacity: 0 },
  };

  const endStates = {
    fadeInUp: { y: 0, opacity: 1 },
    fadeInLeft: { x: 0, opacity: 1 },
    fadeInRight: { x: 0, opacity: 1 },
    scaleIn: { scale: 1, opacity: 1 },
    bounceIn: { scale: 1, opacity: 1 },
    slideInFromTop: { y: 0, opacity: 1 },
    slideInFromBottom: { y: 0, opacity: 1 },
    flipIn: { rotationY: 0, opacity: 1 },
    rotateScaleIn: { rotation: 0, scale: 1, opacity: 1 },
    elasticScale: { scale: 1, opacity: 1 },
  };

  const easings = {
    fadeInUp: animationConfig.ease,
    fadeInLeft: animationConfig.ease,
    fadeInRight: animationConfig.ease,
    scaleIn: "back.out(1.7)",
    bounceIn: "bounce.out",
    slideInFromTop: "bounce.out",
    slideInFromBottom: "back.out(1.7)",
    flipIn: "power2.out",
    rotateScaleIn: "back.out(1.7)",
    elasticScale: "elastic.out(1, 0.3)",
  };

  return gsap.fromTo(element, animations[animationType], {
    ...endStates[animationType],
    duration: animationType === 'elasticScale' ? 1.5 : animationType === 'rotateScaleIn' ? 1.2 : animationConfig.duration,
    ease: easings[animationType],
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
};

// Typing animation effect
export const typeWriter = (element: string | Element, text: string, speed: number = 0.05) => {
  const tl = gsap.timeline();
  const chars = text.split('');
  
  // Clear the element first
  gsap.set(element, { text: '' });
  
  chars.forEach((char, index) => {
    tl.to(element, {
      duration: speed,
      text: text.substring(0, index + 1),
      ease: "none",
    }, index * speed);
  });
  
  return tl;
};

// Hover animations
export const createHoverAnimation = (element: string | Element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  el.addEventListener('mouseenter', () => {
    gsap.to(el, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

// Progress bar animation
export const animateProgressBar = (element: string | Element, percentage: number) => {
  return gsap.fromTo(element,
    { width: "0%" },
    {
      width: `${percentage}%`,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Counter animation
export const animateCounter = (element: string | Element, endValue: number, duration: number = 2) => {
  const obj = { value: 0 };
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  
  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      if (el) {
        el.textContent = Math.round(obj.value).toString();
      }
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
};

// Page transition animations
export const pageTransitionIn = () => {
  const tl = gsap.timeline();
  
  tl.fromTo('.page-transition',
    { y: '100%' },
    { y: '0%', duration: 0.5, ease: "power2.out" }
  )
  .fromTo('.page-content > *',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
    "-=0.3"
  );
  
  return tl;
};

export const pageTransitionOut = () => {
  const tl = gsap.timeline();
  
  tl.to('.page-content > *',
    { y: -30, opacity: 0, duration: 0.3, stagger: 0.05, ease: "power2.in" }
  )
  .to('.page-transition',
    { y: '-100%', duration: 0.5, ease: "power2.in" },
    "-=0.2"
  );
  
  return tl;
};
