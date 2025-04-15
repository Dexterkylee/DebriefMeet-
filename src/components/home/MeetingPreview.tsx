
import React from 'react';
import { FileText, Clock } from 'lucide-react';
const MeetingPreview: React.FC = () => {
  return <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200 max-w-4xl mx-auto">
      <div className="bg-gray-900 text-white px-4 py-2 flex items-center">
        <div className="flex gap-2 mr-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium my-0 py-0 px-0 mx-0">Meeting Assistant</div>
        <div className="ml-auto text-sm">12:45 PM</div>
      </div>
      
      <div className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-md p-4 bg-gray-50">
          <div className="flex items-center text-blue-600 mb-4">
            <FileText className="h-5 w-5 mr-2" />
            <h3 className="font-medium">Meeting Transcript</h3>
          </div>
          
          <div className="text-sm">
            <p className="font-semibold mb-1">Alex:</p>
            <p className="text-gray-700 mb-4">
              I think we should focus on improving the user onboarding
              experience for Q3.
            </p>
            
            <p className="font-semibold mb-1">Jamie:</p>
            <p className="text-gray-700">
              Agreed. Our metrics show a 30% drop-off during the
              initial setup process.
            </p>
          </div>
        </div>
        
        <div className="border rounded-md p-4 bg-gray-50">
          <div className="flex items-center text-blue-600 mb-4">
            <Clock className="h-5 w-5 mr-2" />
            <h3 className="font-medium">Meeting Minutes</h3>
          </div>
          
          <div className="text-sm">
            <p className="font-semibold mb-2">Key Discussion Points:</p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Team identified user onboarding as a priority for Q3</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Current metrics show 30% drop-off during initial setup</span>
              </li>
              <li className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span>Proposed solutions:</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
};
export default MeetingPreview;
