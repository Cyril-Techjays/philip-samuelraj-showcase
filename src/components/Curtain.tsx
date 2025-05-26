
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

  

  return (
    <div 
      className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
      style={{
        transform: animationPhase === 'visible' ? 'translateY(0%)' : 'translateY(-100%)',
        transition: 'transform 2000ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      }}
    >
      <h1 
        className="text-white text-4xl md:text-6xl font-light tracking-wide"
        style={{
          opacity: showText ? 1 : 0,
          transition: 'opacity 500ms ease-in-out'
        }}
      >
        {sectionName}
      </h1>
    </div>
  );
};

export default Curtain;
