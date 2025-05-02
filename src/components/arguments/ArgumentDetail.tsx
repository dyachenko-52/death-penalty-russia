
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
        <CardHeader className="bg-primary/5 border-b p-3 sm:p-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Icon name={argument.icon} className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
            <div>
              <CardTitle className="text-base sm:text-xl">{argument.title}</CardTitle>
              <CardDescription className="text-sm">{argument.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4 sm:pt-6 text-sm sm:text-base p-3 sm:p-6">
          {argument.details.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-3 leading-snug sm:leading-relaxed">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ArgumentDetail;
