import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import MeetingPreview from './MeetingPreview';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { elementRef: headingRef, isVisible: isHeadingVisible } = useScrollAnimation();
  const { elementRef: textRef, isVisible: isTextVisible } = useScrollAnimation();
  const { elementRef: buttonsRef, isVisible: isButtonsVisible } = useScrollAnimation();
  const { elementRef: previewRef, isVisible: isPreviewVisible } = useScrollAnimation();

  return (
    <div className="py-16 md:py-24 flex flex-col items-center">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 
          ref={headingRef}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-2">Every word counts,</div>
          <div>AI captures it all.</div>
        </h1>
        <p 
          ref={textRef}
          className={`text-xl text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 ${
            isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Never miss a detail from your meetings again. DebriefMeet AI automatically 
          transcribes, summarizes, and extracts action items from your conversations.
        </p>
        
        <div 
          ref={buttonsRef}
          className={`flex gap-4 flex-wrap justify-center mb-16 transition-all duration-1000 ${
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
      
      <div 
        ref={previewRef}
        className={`w-full max-w-5xl mx-auto transition-all duration-1000 ${
          isPreviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <MeetingPreview />
      </div>
    </div>
  );
};

export default Hero;
