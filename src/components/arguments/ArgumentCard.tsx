
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { type Argument } from './ArgumentsData';

interface ArgumentCardProps {
  argument: Argument;
}

const ArgumentCard = ({ argument }: ArgumentCardProps) => {
  return (
    <Card className="border-primary/20 h-full">
      <CardHeader className="bg-primary/5 border-b">
        <div className="flex items-center gap-3">
          <Icon name={argument.icon} className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>{argument.title}</CardTitle>
            <CardDescription>{argument.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 text-lg">
        <p className="whitespace-pre-line leading-relaxed">{argument.details}</p>
      </CardContent>
    </Card>
  );
};

export default ArgumentCard;
