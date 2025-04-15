
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, FileText, MessageSquareText, Sparkles } from "lucide-react";

const features = [
  {
    title: "AI Summaries",
    description: "Automatically generate concise summaries of your captured content using AI.",
    icon: BrainCircuit,
  },
  {
    title: "Quick Capture",
    description: "Quickly capture notes, thoughts, or any text content with a simple interface.",
    icon: FileText,
  },
  {
    title: "Content Organization",
    description: "Organize your captures with tags, search, and categories for easy retrieval.",
    icon: MessageSquareText,
  },
  {
    title: "Smart Suggestions",
    description: "Get intelligent suggestions based on the content you capture.",
    icon: Sparkles,
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-12 container">
      <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border bg-card">
            <CardHeader className="pb-2">
              <div className="mb-2 h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
