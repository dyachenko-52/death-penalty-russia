
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
        <CardHeader className="bg-primary/5 border-b p-2 sm:p-4">
          <div className="flex items-center gap-2">
            <Icon name={argument.icon} className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <CardTitle className="text-sm sm:text-lg">{argument.title}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">{argument.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-3 sm:pt-4 text-xs sm:text-sm p-2 sm:p-4 max-h-[400px] md:max-h-[450px] overflow-y-auto">
          {argument.details.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-2 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ArgumentDetail;
