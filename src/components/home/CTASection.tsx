import React from 'react';
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection: React.FC = () => {
  const { elementRef: headingRef, isVisible: isHeadingVisible } = useScrollAnimation();
  const { elementRef: textRef, isVisible: isTextVisible } = useScrollAnimation();
  const { elementRef: buttonsRef, isVisible: isButtonsVisible } = useScrollAnimation();

  return (
    <div className="bg-blue-600 py-16 md:py-24 text-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 
          ref={headingRef}
          className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${
            isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Don't miss any important details again
        </h2>
        <p 
          ref={textRef}
          className={`text-xl mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
            isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Download DebriefMeet AI now and transform how you capture conversations
        </p>
        
        <div 
          ref={buttonsRef}
          className={`flex gap-4 justify-center transition-all duration-1000 ${
            isButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="https://apps.apple.com/us/app/clash-of-clans/id529479190" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-500 hover:scale-105"
          >
            <Button className="bg-black text-white hover:bg-gray-800 rounded-xl h-14 px-6">
              <div className="flex flex-col items-start">
                <span className="text-xs">Download on the</span>
                <span className="text-lg font-semibold">App Store</span>
              </div>
            </Button>
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.supercell.clashofclans" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-500 hover:scale-105"
          >
            <Button className="bg-black text-white hover:bg-gray-800 rounded-xl h-14 px-6">
              <div className="flex flex-col items-start">
                <span className="text-xs">GET IT ON</span>
                <span className="text-lg font-semibold">Google Play</span>
              </div>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
