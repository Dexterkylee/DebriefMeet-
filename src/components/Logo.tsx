import React from 'react';

interface LogoProps {
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ small = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className={`${small ? 'w-6 h-6' : 'w-8 h-8'} bg-[#4F46E5] rounded-lg flex items-center justify-center`}>
        <span className={`text-white font-semibold ${small ? 'text-base' : 'text-xl'}`}>D</span>
      </div>
      <div className={`${small ? 'text-base' : 'text-lg'} font-medium`}>
        <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">DebriefMeet</span>
        <span className="text-[#111827]"> AI</span>
      </div>
    </div>
  );
};

export default Logo; 