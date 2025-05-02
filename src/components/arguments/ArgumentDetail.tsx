
import { type Argument } from './ArgumentData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ArgumentDetailProps {
  argument: Argument;
}

const ArgumentDetail = ({ argument }: ArgumentDetailProps) => {
  return (
    <Card className="border-primary/20 w-full">
      <CardHeader className="bg-primary/5 border-b">
        <CardTitle>{argument.title}</CardTitle>
        <CardDescription>{argument.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 text-lg">
        <p>{argument.details}</p>
      </CardContent>
    </Card>
  );
};

export default ArgumentDetail;
