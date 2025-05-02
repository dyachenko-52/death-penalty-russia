
import { Button } from '@/components/ui/button';
import { type Argument } from './ArgumentsData';

interface ArgumentButtonProps {
  argument: Argument;
  isSelected: boolean;
  onClick: () => void;
}

const ArgumentButton = ({ argument, isSelected, onClick }: ArgumentButtonProps) => {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className="w-full justify-start text-left h-auto p-4"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div>
          <div className="font-medium">{argument.title}</div>
          <div className="text-sm text-muted-foreground mt-1">{argument.description}</div>
        </div>
      </div>
    </Button>
  );
};

export default ArgumentButton;
