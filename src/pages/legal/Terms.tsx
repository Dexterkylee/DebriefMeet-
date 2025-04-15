import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 sm:px-6 py-8">
        <Button variant="ghost" asChild className="mb-8 hover:bg-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-sm sm:prose max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: April 15, 2025
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4 text-gray-700">
              By accessing or using Debrief.ai, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">2. Service Description</h2>
            <p className="mb-4 text-gray-700">
              Debrief.ai provides an AI-powered meeting transcription and summarization service. We automatically transcribe your meetings and generate summaries and action items.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
            <p className="mb-4 text-gray-700">You are responsible for:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring you have the right to record and transcribe meetings</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
            <p className="mb-4 text-gray-700">
              You retain all rights to your content. By using our service, you grant us a license to process and analyze your content to provide our services.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4 text-gray-700">
              Debrief.ai is provided "as is" without any warranties. We are not liable for any damages arising from the use of our service.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">6. Contact Information</h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:dexterdejesus173@gmail.com" className="text-blue-600 hover:text-blue-800">
                dexterdejesus173@gmail.com
              </a>
              {' '}or by mail at:
            </p>
            <p className="text-gray-700">
              Metro Manila, Philippines, 1000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 