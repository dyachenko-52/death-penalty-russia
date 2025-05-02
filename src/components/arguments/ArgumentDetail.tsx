
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { type Argument } from '@/types/arguments';

interface ArgumentDetailProps {
  argument: Argument | null;
}

const ArgumentDetail = ({ argument }: ArgumentDetailProps) => {
  if (!argument) return null;
  
  return (
    <div className="order-1 md:order-2">
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
    </div>
  );
};

export default ArgumentDetail;
