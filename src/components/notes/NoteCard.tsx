
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";

export interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  summary?: string;
  tags?: string[];
  createdAt: Date;
  className?: string;
  onClick?: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({
  id,
  title,
  content,
  summary,
  tags,
  createdAt,
  className,
  onClick,
}) => {
  const displayContent = summary || content;
  const truncatedContent = 
    displayContent.length > 150 
      ? `${displayContent.substring(0, 150)}...` 
      : displayContent;

  return (
    <Card 
      className={cn("note-card cursor-pointer", className)}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-muted-foreground line-clamp-3">{truncatedContent}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <CalendarIcon className="h-3 w-3" />
          <span>{format(createdAt, 'MMM d, yyyy')}</span>
        </div>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
