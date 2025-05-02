
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type Argument } from './ArgumentsData';

interface ArgumentCardProps {
  argument: Argument;
}

const ArgumentCard = ({ argument }: ArgumentCardProps) => {
  return (
    <Card className="border-primary/20 h-full">
      <CardHeader className="bg-primary/5 border-b">
        <div>
          <CardTitle>{argument.title}</CardTitle>
          <CardDescription>{argument.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="whitespace-pre-line">{argument.details}</p>
      </CardContent>
    </Card>
  );
};

export default ArgumentCard;
