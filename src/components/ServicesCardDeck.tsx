
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ServicesCardDeck = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    {
      icon: "✨",
      title: "Artificial Intelligence & Data",
      description: "Leverage cutting-edge AI and data analytics to transform your business insights and automate intelligent decision-making processes."
    },
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Build tailored software solutions that perfectly match your business requirements with scalable and maintainable architectures."
    },
    {
      icon: "🎨",
      title: "Premium Design Services",
      description: "Create stunning user experiences with our expert UI/UX design team, focusing on aesthetics, usability, and brand identity."
    },
    {
      icon: "📱",
      title: "Product Development",
      description: "From concept to launch, we guide your product journey with agile methodologies and innovative development practices."
    },
    {
      icon: "✅",
      title: "Quality Assurance",
      description: "Ensure flawless performance with comprehensive testing strategies, automated workflows, and continuous quality monitoring."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Migrate and optimize your infrastructure with modern cloud architectures for enhanced scalability, security, and performance."
    }
  ];

  const updateDeck = () => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      let offset = index - currentIndex;
      if (offset > services.length / 2) {
        offset -= services.length;
      } else if (offset < -services.length / 2) {
        offset += services.length;
      }
      
      const absOffset = Math.abs(offset);
      const x = offset * 170;
      const z = -absOffset * 120;
      const rotateY = offset * -10;
      const scale = Math.max(0.7, 1 - (absOffset * 0.13));
      let opacity = Math.max(0, 1 - (absOffset * 0.32));
      
      if (absOffset > 2) {
        opacity = 0;
      }
      
      // Use a single timeline for smoother animations
      const tl = gsap.timeline();
      tl.to(card, {
        x: x,
        z: z,
        rotateY: rotateY,
        scale: scale,
        opacity: opacity,
        duration: 1.2,
        ease: "power3.out",
        force3D: true,
        transformOrigin: "center center"
      });
      
      card.style.zIndex = (services.length - absOffset).toString();
    });
  };

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToCard = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    updateDeck();
  }, [currentIndex]);

  useEffect(() => {
    // Initialize animations
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
      );
    }

    // Auto-play
    const autoPlayInterval = setInterval(() => {
      nextCard();
    }, 4000);

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(autoPlayInterval);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full py-16 px-6 relative">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animation: 'float 20s infinite linear'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
          Techjays Services
        </h2>

        <div 
          ref={containerRef}
          className="relative h-[500px] flex items-center justify-center"
          style={{ perspective: '2000px' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute w-[700px] h-[400px] bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-white/50 cursor-pointer flex items-center gap-12"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity'
              }}
              onMouseEnter={() => {
                const card = cardsRef.current[index];
                if (card && index === currentIndex && !isAnimating) {
                  gsap.to(card, { 
                    scale: 1.05, 
                    boxShadow: "0 50px 120px rgba(102,126,234,0.28)", 
                    duration: 0.4, 
                    ease: "power2.out" 
                  });
                }
              }}
              onMouseLeave={() => {
                const card = cardsRef.current[index];
                if (card && index === currentIndex && !isAnimating) {
                  gsap.to(card, { 
                    scale: 1, 
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)", 
                    duration: 0.4, 
                    ease: "power2.out" 
                  });
                }
              }}
            >
              <div className="w-[120px] h-[120px] flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl text-6xl shadow-lg">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-10 mt-16">
          <button
            onClick={prevCard}
            disabled={isAnimating}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          <div className="flex gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                disabled={isAnimating}
                className={`h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
                  index === currentIndex 
                    ? 'w-10 bg-gradient-to-r from-purple-500 to-blue-500' 
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextCard}
            disabled={isAnimating}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>

      <style>
        {`
        @keyframes float {
          from {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          to {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
        `}
      </style>
    </div>
  );
};

export default ServicesCardDeck;
