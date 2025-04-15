import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded w-10 h-10 flex items-center justify-center text-white font-bold">
              <span className="text-xl">D</span>
            </div>
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">DebriefMeet AI</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            DOWNLOAD
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
