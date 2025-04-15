
import React from 'react';
import Header from '@/components/layout/Header';
import CaptureForm from '@/components/capture/CaptureForm';
import { toast } from 'sonner';

const NewCapture = () => {
  const handleSave = (data: { title: string; content: string; summary?: string }) => {
    // In a real app, this would save to a database
    console.log('Saved capture:', data);
    toast.success("Capture saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <h1 className="text-2xl font-bold mb-6">New Capture</h1>
        <CaptureForm onSave={handleSave} />
      </main>
    </div>
  );
};

export default NewCapture;
