import Navigation from "@/components/Navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ForwardedRef, forwardRef } from 'react';

interface MediaMention {
  source: string;
  headline: string;
  date: string;
}

const mediaMentionsData: MediaMention[] = [
  {
    source: "FINANCIAL TIMES",
    headline: "Tech Giant Announces Revolutionary AI Platform",
    date: "JANUARY 2025"
  },
  {
    source: "FORBES",
    headline: "The Future of Technology Leadership",
    date: "DECEMBER 2024"
  },
  {
    source: "TECHCRUNCH",
    headline: "Investment Strategies for Emerging Markets",
    date: "NOVEMBER 2024"
  },
  {
    source: "HARVARD BUSINESS REVIEW",
    headline: "Building Sustainable Tech Companies",
    date: "OCTOBER 2024"
  }
];

const MediaMentionCard = forwardRef<HTMLDivElement, { mention: MediaMention }>(({ mention }, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-16 bg-white shadow-xl" style={{ width: '900px', height: '700px', maxWidth: '95%', maxHeight: '85vh', borderRadius: '80px' }}>
      <p className="text-xl text-gray-500 uppercase tracking-widest mb-8">{mention.source}</p>
      <h2 className="text-6xl md:text-7xl font-bold text-gray-900 text-center leading-tight mb-10">{mention.headline}</h2>
      <p className="text-2xl text-gray-500 uppercase tracking-wide">{mention.date}</p>
    </div>
  );
});

MediaMentionCard.displayName = 'MediaMentionCard';

const MediaMentions = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!backgroundRef.current || !shapesRef.current || !cardRef.current || !prevButtonRef.current || !nextButtonRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 }
    });

    // Initial state (hidden)
    gsap.set([cardRef.current, prevButtonRef.current, nextButtonRef.current], {
      opacity: 0,
      y: 30
    });

    // Intro animation
    tl.to(cardRef.current, { opacity: 1, y: 0 }, "+=0.5")
      .to(prevButtonRef.current, { opacity: 1, y: 0 }, "-=0.8")
      .to(nextButtonRef.current, { opacity: 1, y: 0 }, "<0.1");

    // Background color - Solid white (already present)
    gsap.set(backgroundRef.current, { background: "#ffffff" });

    // Mouse movement animation for dots (Galaxy effect)
    const dots = gsap.utils.toArray(shapesRef.current.children);
    const movementRange = 50; // Maximum pixel movement for dots based on mouse position

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate mouse position relative to the center of the viewport
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      // Calculate the target offset for the dots based on mouse position
      const targetX = (deltaX / centerX) * movementRange; // Scale movement by percentage of distance from center
      const targetY = (deltaY / centerY) * movementRange; // Scale movement by percentage of distance from center

      gsap.to(dots, {
        x: targetX, // Animate to the calculated pixel offset
        y: targetY, // Animate to the calculated pixel offset
        duration: 1.5, // Smoothness of the follow effect
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Shooting star animation
    const shootingStars = gsap.utils.toArray('.shooting-star');
    shootingStars.forEach((star: any) => {
      gsap.set(star, { x: window.innerWidth, y: gsap.utils.random(0, window.innerHeight), opacity: 0 });

      gsap.to(star, {
        x: -window.innerWidth, // Move across the screen to the left
        y: '+=random(-100, 100)', // Slight random vertical movement
        opacity: 1,
        duration: 'random(1, 3)', // Random duration for speed variance
        ease: "power1.out",
        delay: 'random(2, 10)', // Random delay before starting
        repeat: -1, // Loop indefinitely
        repeatDelay: 'random(5, 15)', // Random delay between repeats
        onRepeat: () => { // Randomize start position on repeat
          gsap.set(star, { x: window.innerWidth, y: gsap.utils.random(0, window.innerHeight), opacity: 0 });
        }
      });
    });

    // Hover animation (already present)
    const card = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.03,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        duration: 0.3
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, [currentIndex]);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaMentionsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaMentionsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div ref={backgroundRef} className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-20">
      <Navigation />
      
      {/* Floating Dots Container - Galaxy effect with more dots and shooting stars */}
      <div ref={shapesRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Add many tiny ethereal blue and purple dots here */}
        {Array.from({ length: 1200 }).map((_, i) => {
          const isShootingStar = i < 20; // Make the first 20 dots shooting stars
          const colorClass = gsap.utils.random(['bg-blue-400', 'bg-purple-400']);
          const size = isShootingStar ? '3px' : `${gsap.utils.random(2, 5)}px`; // Shooting stars are slightly larger

          return (
            <div 
              key={i}
              className={`absolute rounded-full ${colorClass} ${isShootingStar ? 'shooting-star' : ''}`} // Add shooting-star class
              style={{
                width: size,
                height: size,
                opacity: isShootingStar ? 0 : gsap.utils.random(0.1, 0.4), // Shooting stars start hidden
                top: `${gsap.utils.random(0, 100)}%`,
                left: `${gsap.utils.random(0, 100)}%`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Centered Media Mention Card with Ref */}
      <MediaMentionCard ref={cardRef} mention={mediaMentionsData[currentIndex]} />

      {/* Navigation Buttons with Arrows */}
      <div className="flex justify-center mt-8 space-x-8 z-10">
        <button ref={prevButtonRef} onClick={prevCard} className="text-gray-800 text-4xl p-2 hover:text-gray-600 transition-colors">←</button>
        <button ref={nextButtonRef} onClick={nextCard} className="text-gray-800 text-4xl p-2 hover:text-gray-600 transition-colors">→</button>
      </div>

    </div>
  );
};

export default MediaMentions;
