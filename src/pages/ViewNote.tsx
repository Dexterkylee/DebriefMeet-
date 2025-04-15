
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, Edit, Sparkles, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { toast } from 'sonner';

const ViewNote = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching a single note
    const timer = setTimeout(() => {
      // This would be an API call in a real app
      const mockNotes = [
        {
          id: '1',
          title: 'Meeting with Marketing Team',
          content: 'Discussed Q2 campaign strategy. Need to follow up on budget approval and creative direction by next week. Team is enthusiastic about the new product line and wants to ensure messaging aligns with overall brand strategy.\n\nKey action items:\n- Sarah to create initial mockups\n- John to research competitive positioning\n- Maya to draft preliminary budget\n\nNext meeting scheduled for April 22nd.',
          summary: 'Marketing team meeting covered Q2 campaign planning, pending budget and creative approvals needed.',
          tags: ['meeting', 'marketing'],
          createdAt: new Date(2023, 3, 15),
        },
        {
          id: '2',
          title: 'Product Development Ideas',
          content: 'New feature ideas: 1) Improved user onboarding, 2) Dark mode implementation, 3) Enhanced search functionality with filters. \n\nWe should prioritize the onboarding flow based on recent user feedback. Dark mode is a nice-to-have but could improve user satisfaction. Search improvements will help with retention and make the product more powerful for heavy users.',
          tags: ['product', 'features'],
          createdAt: new Date(2023, 3, 12),
        },
        {
          id: '3',
          title: 'Weekly Status Report',
          content: 'This week we completed the user authentication overhaul and started work on the new dashboard widgets. Some delays with the API integration that need attention. Engineering team is requesting additional resources to meet the quarterly targets. Security audit passed with only minor recommendations for improvement.',
          summary: 'Completed auth overhaul, started dashboard widgets, API integration facing delays.',
          tags: ['report', 'weekly'],
          createdAt: new Date(2023, 3, 10),
        },
      ];
      
      const foundNote = mockNotes.find(note => note.id === id);
      setNote(foundNote || null);
      setLoading(false);
      
      if (!foundNote) {
        toast.error("Note not found");
        navigate("/");
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id, navigate]);

  const handleDelete = () => {
    // This would delete the note in a real app
    toast.success("Note deleted");
    navigate("/");
  };

  const handleEdit = () => {
    // This would navigate to an edit page in a real app
    toast.info("Edit functionality would open here");
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-6"></div>
            <div className="h-64 bg-muted rounded mb-4"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-medium mb-4">Note not found</p>
            <Button onClick={() => navigate("/")}>Go back home</Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all captures
        </Button>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold">{note.title}</h1>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={handleEdit}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleDelete}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(note.createdAt), 'MMMM d, yyyy')}</span>
              </div>
              
              {note.tags && note.tags.length > 0 && (
                <div className="flex gap-1 flex-wrap">
                  {note.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent>
            {note.summary && (
              <div className="mb-6 p-4 bg-secondary/50 rounded-md border">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  <h3 className="font-medium text-sm">AI Summary</h3>
                </div>
                <p className="text-muted-foreground">{note.summary}</p>
              </div>
            )}
            
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p className="whitespace-pre-line">{formatContent(note.content)}</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ViewNote;
