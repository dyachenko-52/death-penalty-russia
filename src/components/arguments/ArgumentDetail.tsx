
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Argument } from '@/types/arguments';

interface ArgumentDetailProps {
  argument: Argument | null;
}

const ArgumentDetail: React.FC<ArgumentDetailProps> = ({ argument }) => {
  if (!argument) return null;
  
  return (
    <Card className="border-primary/20 h-full">
      <CardHeader className="bg-primary/5 border-b">
        <div className="flex items-center gap-3">
          <Icon name={argument.icon} className="h-6 w-6 text-primary" />
          <div>
            <CardTitle className="text-lg sm:text-xl">{argument.title}</CardTitle>
            <CardDescription>{argument.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 sm:pt-6 text-sm sm:text-base md:text-lg overflow-auto">
        <p className="whitespace-pre-line leading-relaxed">{argument.details}</p>
      </CardContent>
    </Card>
  );
};

export default ArgumentDetail;
