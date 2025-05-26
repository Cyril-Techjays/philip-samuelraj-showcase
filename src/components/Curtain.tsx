
import { useState, useEffect, useRef } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'hidden' | 'sliding-down' | 'visible' | 'sliding-up'>('hidden');
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
      
      // Start sliding down immediately
      const slideDownTimer = setTimeout(() => {
        setAnimationPhase('sliding-down');
      }, 100);
      timersRef.current.push(slideDownTimer);

      // Show text when curtain reaches bottom
      const showTextTimer = setTimeout(() => {
        setAnimationPhase('visible');
        setShowText(true);
      }, 1100);
      timersRef.current.push(showTextTimer);

      // Hide text and start sliding up (at 2 seconds when navigation happens)
      const slideUpTimer = setTimeout(() => {
        setShowText(false);
        setAnimationPhase('sliding-up');
      }, 2000);
      timersRef.current.push(slideUpTimer);

      // Complete animation and cleanup
      const completeTimer = setTimeout(() => {
        setAnimationPhase('hidden');
        setShouldRender(false);
        onComplete();
      }, 3000);
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

  const getTransform = () => {
    switch (animationPhase) {
      case 'hidden':
        return 'translateY(-100%)';
      case 'sliding-down':
      case 'visible':
        return 'translateY(0%)';
      case 'sliding-up':
        return 'translateY(-100%)';
      default:
        return 'translateY(-100%)';
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
      style={{
        transform: getTransform(),
        transition: animationPhase === 'hidden' ? 'none' : 'transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      }}
    >
      <h1 
        className="text-white text-4xl md:text-6xl font-light tracking-wide"
        style={{
          opacity: showText ? 1 : 0,
          transition: 'opacity 300ms ease-in-out'
        }}
      >
        {sectionName}
      </h1>
    </div>
  );
};

export default Curtain;
