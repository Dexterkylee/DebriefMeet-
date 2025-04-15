import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-sm sm:prose max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: April 15, 2025
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4 text-gray-700">
              We collect information you provide directly to us when using Debrief.ai, including:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Audio recordings of your meetings</li>
              <li>Transcripts generated from these recordings</li>
              <li>Account information (email, name, etc.)</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4 text-gray-700">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Provide and improve our services</li>
              <li>Generate accurate transcripts and summaries</li>
              <li>Enhance the user experience</li>
              <li>Send important updates and notifications</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">3. Data Security</h2>
            <p className="mb-4 text-gray-700">
              We implement industry-standard security measures to protect your data. All recordings and transcripts are encrypted both in transit and at rest.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">4. Your Rights</h2>
            <p className="mb-4 text-gray-700">You have the right to:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Access your data</li>
              <li>Request data deletion</li>
              <li>Opt out of data collection</li>
              <li>Export your data</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at{' '}
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

export default Privacy; 