import React from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Wand2, Sparkles, Lightbulb, Zap, Blocks } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-purple-100 p-3">
                  <Wand2 className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">About DebriefMeet AI</h1>
              <p className="text-xl text-muted-foreground">
                Simplifying content capture and organization with AI-powered tools
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-10">
              <p>
                DebriefMeet AI was created to solve the problem of information overload. In today's fast-paced world, we're constantly bombarded with information from meetings, articles, emails, and more.
              </p>
              <p>
                Our mission is to help you capture, organize, and make sense of all this information through an intuitive interface enhanced with powerful AI capabilities.
              </p>
              
              <h2 className="flex items-center gap-2 mt-8">
                <Sparkles className="h-5 w-5 text-purple-600" />
                How It Works
              </h2>
              
              <ol>
                <li>
                  <strong>Capture</strong> - Quickly capture text content from any source, meeting, or thought.
                </li>
                <li>
                  <strong>Summarize</strong> - Use AI to generate concise summaries of your content.
                </li>
                <li>
                  <strong>Organize</strong> - Categorize and tag your captures for easy reference.
                </li>
                <li>
                  <strong>Retrieve</strong> - Find exactly what you need with powerful search and filtering.
                </li>
              </ol>
              
              <h2 className="flex items-center gap-2 mt-8">
                <Lightbulb className="h-5 w-5 text-purple-600" />
                Our Vision
              </h2>
              
              <p>
                We envision a world where capturing and organizing information is effortless, allowing people to focus on what truly matters - creativity, innovation, and meaningful work.
              </p>
              
              <h2 className="flex items-center gap-2 mt-8">
                <Zap className="h-5 w-5 text-purple-600" />
                AI-Powered Features
              </h2>
              
              <p>
                DebriefMeet AI leverages cutting-edge artificial intelligence to provide:
              </p>
              
              <ul>
                <li>Intelligent summarization of long-form content</li>
                <li>Automatic tagging and categorization</li>
                <li>Smart search that understands context</li>
                <li>Content recommendations</li>
                <li>Insights and patterns across your captures</li>
              </ul>
            </div>
            
            <div className="flex justify-center mt-12">
              <Button asChild size="lg">
                <Link to="/new">
                  <Blocks className="h-4 w-4 mr-2" />
                  Start Capturing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 DebriefMeet AI. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              Privacy
            </Button>
            <Button variant="ghost" size="sm">
              Terms
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
