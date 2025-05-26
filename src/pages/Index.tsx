
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
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
      const y = (e.clientY / window.innerHeight - 0.5) * 20; // -10 to 10
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
        <h1 className="text-white text-6xl md:text-8xl font-light tracking-wide">
          {greetings[currentGreeting]}
        </h1>
      </div>

      {/* Main Content */}
      <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
        <Navigation />
        
        <main className="pt-20 min-h-screen flex flex-col relative overflow-hidden">
          {/* Hero Image positioned with parallax effect */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 transition-transform duration-100 ease-out"
            style={{
              transform: `translate(-50%, 0) translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <img 
              src="/lovable-uploads/3c091176-f9d0-4e0e-8d95-d505ba340543.png"
              alt="Philip Samuelraj"
              className="w-[800px] h-[890px] object-cover object-top"
            />
          </div>

          {/* Right Side Text */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-right">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-500 leading-relaxed">
              <div>Innovator</div>
              <div>Investor</div>
              <div>Leader</div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-500 tracking-tight">
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
