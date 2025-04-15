
import React from 'react';
import NoteCard, { NoteCardProps } from './NoteCard';
import { useNavigate } from 'react-router-dom';

interface NoteGridProps {
  notes: Omit<NoteCardProps, 'onClick'>[];
  className?: string;
}

const NoteGrid: React.FC<NoteGridProps> = ({ notes, className }) => {
  const navigate = useNavigate();
  
  const handleNoteClick = (id: string) => {
    navigate(`/notes/${id}`);
  };
  
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {notes.map((note) => (
        <NoteCard 
          key={note.id} 
          {...note} 
          onClick={() => handleNoteClick(note.id)} 
        />
      ))}
    </div>
  );
};

export default NoteGrid;
