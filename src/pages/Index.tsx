
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const greetings = [
    "Hello",      // English
    "Bonjour",    // French
    "Hallo",      // German
    "வணக்கம்",    // Tamil
    "Hola"        // Spanish
  ];

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 600); // Change every 600ms to complete cycle in 3 seconds

    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      // Reduce parallax effect on smaller screens
      const isMobile = window.innerWidth <= 768;
      const multiplier = isMobile ? 5 : 20;
      const x = (e.clientX / window.innerWidth - 0.5) * multiplier;
      const y = (e.clientY / window.innerHeight - 0.5) * multiplier;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(loaderTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 bg-black z-[100] flex items-center justify-center transition-transform duration-1000 ${
          showLoader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-light tracking-wide px-4 text-center">
          {greetings[currentGreeting]}
        </h1>
      </div>

      {/* Main Content */}
      <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
        <Navigation />
        
        <main className="pt-16 sm:pt-20 min-h-screen flex flex-col relative overflow-hidden">
          {/* Hero Image Container - Responsive */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div 
              className="relative transition-transform duration-100 ease-out"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
              }}
            >
              <img 
                src="/lovable-uploads/3c091176-f9d0-4e0e-8d95-d505ba340543.png"
                alt="Philip Samuelraj"
                className="
                  w-[280px] h-[320px] 
                  sm:w-[400px] sm:h-[480px]
                  md:w-[600px] md:h-[700px]
                  lg:w-[700px] lg:h-[800px]
                  xl:w-[800px] xl:h-[890px]
                  object-cover object-center
                  max-h-[85vh] sm:max-h-[90vh]
                "
              />
            </div>
          </div>

          {/* Right Side Text - Responsive positioning */}
          <div className="absolute top-1/2 right-4 sm:right-6 md:right-8 transform -translate-y-1/2 text-right z-10">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-500 leading-relaxed">
              <div>Innovator</div>
              <div>Investor</div>
              <div>Leader</div>
            </div>
          </div>

          {/* Bottom Text - Responsive sizing */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-10">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-gray-500 tracking-tight opacity-80">
                Philip Samuelraj — Philip Samuelraj — Philip Samuelraj — Philip Samuelraj — Philip Samuelraj — Philip Samuelraj — 
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
