
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { type Argument } from '@/types/arguments';

interface ArgumentButtonProps {
  argument: Argument;
  isSelected: boolean;
  onClick: () => void;
}

const ArgumentButton = ({ argument, isSelected, onClick }: ArgumentButtonProps) => {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className="w-full justify-start text-left h-auto py-3 px-2"
      onClick={onClick}
    >
      <div className="flex items-start gap-1.5">
        <div className="flex-shrink-0 mt-0.5">
          <Icon name={argument.icon} className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="font-medium text-xs sm:text-sm">{argument.title}</div>
          <div className="text-xs text-muted-foreground mt-0.5 line-clamp-3">{argument.description}</div>
        </div>
      </div>
    </Button>
  );
};

export default ArgumentButton;
