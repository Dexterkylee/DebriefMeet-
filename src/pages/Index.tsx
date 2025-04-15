import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import CTASection from '@/components/home/CTASection';
import NoteGrid from '@/components/notes/NoteGrid';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Index = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading mock data
    const timer = setTimeout(() => {
      const mockNotes = [
        {
          id: '1',
          title: 'Meeting with Marketing Team',
          content: 'Discussed Q2 campaign strategy. Need to follow up on budget approval and creative direction by next week.',
          summary: 'Marketing team meeting covered Q2 campaign planning, pending budget and creative approvals needed.',
          tags: ['meeting', 'marketing'],
          createdAt: new Date(2023, 3, 15),
        },
        {
          id: '2',
          title: 'Product Development Ideas',
          content: 'New feature ideas: 1) Improved user onboarding, 2) Dark mode implementation, 3) Enhanced search functionality with filters.',
          tags: ['product', 'features'],
          createdAt: new Date(2023, 3, 12),
        },
        {
          id: '3',
          title: 'Weekly Status Report',
          content: 'This week we completed the user authentication overhaul and started work on the new dashboard widgets. Some delays with the API integration that need attention.',
          summary: 'Completed auth overhaul, started dashboard widgets, API integration facing delays.',
          tags: ['report', 'weekly'],
          createdAt: new Date(2023, 3, 10),
        },
      ];
      setNotes(mockNotes);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const hasNotes = false; // Force Hero display for demo purposes

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {!hasNotes ? (
          <>
            <Hero />
            <CTASection />
          </>
        ) : (
          <div className="container py-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Your Captures</h1>
              <Button asChild>
                <Link to="/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Capture
                </Link>
              </Button>
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-48 rounded-lg bg-muted animate-pulse" />
                ))}
              </div>
            ) : (
              <NoteGrid notes={notes} />
            )}
          </div>
        )}
      </main>
      
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded w-8 h-8 flex items-center justify-center text-white font-bold mr-2">
              <span className="text-sm">D</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © 2025 DebriefMeet AI. All rights reserved.
            </span>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy">
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
            </Link>
            <Link to="/terms">
              <Button variant="ghost" size="sm">
                Terms
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
