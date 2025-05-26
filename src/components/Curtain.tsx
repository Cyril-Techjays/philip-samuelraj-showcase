
import { useState, useEffect } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'down' | 'up'>('initial');
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Reset states and force render
      setShouldRender(true);
      setShowText(false);
      
      // Add small delay before setting to initial to prevent jumps
      setTimeout(() => {
        setAnimationPhase('initial');
      }, 10);
      
      // Start sliding down after ensuring component is rendered
      const slideDownTimer = setTimeout(() => {
        setAnimationPhase('down');
      }, 100);

      // Show text after curtain is fully down (1.2s total - 100ms delay + 1s animation + 100ms buffer)
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1200);

      // Start sliding up at 3 seconds
      const slideUpTimer = setTimeout(() => {
        setShowText(false);
        setAnimationPhase('up');
      }, 3000);

      // Complete animation after curtain is fully up - extended to 4300ms to allow full transition
      const completeTimer = setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 4300);

      return () => {
        clearTimeout(slideDownTimer);
        clearTimeout(textTimer);
        clearTimeout(slideUpTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  // Don't render when animation is not active
  if (!shouldRender) {
    return null;
  }

  // Three-phase animation logic:
  // Phase 1: Start off-screen at top (translateY(-100%))
  // Phase 2: Slide down and stay visible (translateY(0%))
  // Phase 3: Slide back up off-screen (translateY(-100%))
  const getTransform = () => {
    switch (animationPhase) {
      case 'initial':
        return 'translateY(-100%)'; // Start off-screen
      case 'down':
        return 'translateY(0%)'; // Slide down to visible
      case 'up':
        return 'translateY(-100%)'; // Slide up off-screen
      default:
        return 'translateY(-100%)';
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
      style={{
        transform: getTransform(),
        transition: 'transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)'
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
