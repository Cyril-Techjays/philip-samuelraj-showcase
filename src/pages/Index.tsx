
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
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

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(loaderTimeout);
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
      <div className="min-h-screen" style={{ backgroundColor: 'rgba(152,157,159,255)' }}>
        <Navigation />
        
        <main className="pt-20 min-h-screen flex flex-col relative">
          {/* Hero Image positioned at bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img 
              src="/lovable-uploads/3c091176-f9d0-4e0e-8d95-d505ba340543.png"
              alt="Philip Samuelraj"
              className="w-[500px] h-auto"
            />
          </div>

          {/* Right Side Text */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-right">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed">
              <div>Innovator</div>
              <div className="text-white/70">|</div>
              <div>Investor</div>
              <div className="text-white/70">|</div>
              <div>Leader</div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                Philip Samuelraj — Philip Samuelraj — Philip Samuelraj — Philip Samuelraj — 
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
