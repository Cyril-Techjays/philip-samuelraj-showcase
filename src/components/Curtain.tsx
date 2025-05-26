
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

  useEffect(() => {
    if (isVisible) {
      // Start with curtain off-screen and render
      setShouldRender(true);
      setShowText(false);
      setAnimationPhase('hidden');
      
      // Slide down to visible after a small delay
      const slideDownTimer = setTimeout(() => {
        setAnimationPhase('visible');
      }, 50);

      // Show text after curtain is fully down
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1100);

      // Hide text and start sliding up
      const slideUpTimer = setTimeout(() => {
        setShowText(false);
        setAnimationPhase('hidden');
      }, 3000);

      // Complete animation and cleanup
      const completeTimer = setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 4100);

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

  return (
    <div 
      className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
      style={{
        transform: animationPhase === 'visible' ? 'translateY(0%)' : 'translateY(-100%)',
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
