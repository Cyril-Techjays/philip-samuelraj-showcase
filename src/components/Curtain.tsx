
import { useState, useEffect } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'hidden' | 'visible'>('hidden');
  const [shouldRender, setShouldRender] = useState(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);



  useEffect(() => {
    // Clear any existing timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    if (isVisible) {
      // Start with curtain off-screen and render
      setShouldRender(true);
      setShowText(false);
      setAnimationPhase('hidden');
      
      // Slide down to visible after a small delay
      const slideDownTimer = setTimeout(() => {
        setAnimationPhase('visible');
      }, 50);
      timersRef.current.push(slideDownTimer);

      // Show text after curtain is fully down (2000ms transition + 50ms delay)
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 2050);
      timersRef.current.push(textTimer);

      // Hide text and start sliding up
      const slideUpTimer = setTimeout(() => {
        setShowText(false);
        setAnimationPhase('hidden');
      }, 3500); // Give time to read the text
      timersRef.current.push(slideUpTimer);

      // Complete animation and cleanup - 3500ms + 2000ms slide up
      const completeTimer = setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 5500);
      timersRef.current.push(completeTimer);

      return () => {
        timersRef.current.forEach(timer => clearTimeout(timer));
        timersRef.current = [];
      };
    } else {
      // Reset state when not visible
      setShouldRender(false);
      setShowText(false);
      setAnimationPhase('hidden');
    }
  }, [isVisible, onComplete]);

  // Don't render when animation is not active
  if (!shouldRender) {
    return null;
  }

  // Determine the transform based on animation state
  const getTransform = () => {
    if (slideUp) return '-translate-y-full'; // Slide up (exit)
    if (slideDown) return 'translate-y-0'; // Slide down (show)
    return '-translate-y-full'; // Initial state (hidden above)
  };

  return (
    <div 
      className={`fixed inset-0 bg-black z-[200] flex items-center justify-center transition-transform duration-1000 ${getTransform()}`}
    >
      <h1 
        className={`text-white text-4xl md:text-6xl font-light tracking-wide transition-opacity duration-500 ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {sectionName}
      </h1>
    </div>
  );
};

export default Curtain;
