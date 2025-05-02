
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
      className="w-full justify-start text-left h-auto p-2 sm:p-4"
      onClick={onClick}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
          <Icon name={argument.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <div>
          <div className="font-medium text-sm sm:text-base">{argument.title}</div>
          <div className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 line-clamp-2">{argument.description}</div>
        </div>
      </div>
    </Button>
  );
};

export default ArgumentButton;
