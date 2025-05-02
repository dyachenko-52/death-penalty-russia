
import { ScrollArea } from '@/components/ui/scroll-area';
import ArgumentButton from './ArgumentButton';
import { type Argument } from '@/types/arguments';

interface ArgumentListProps {
  arguments: Argument[];
  selectedArgument: Argument | null;
  onSelect: (argument: Argument) => void;
}

const ArgumentList = ({ arguments: args, selectedArgument, onSelect }: ArgumentListProps) => {
  return (
    <div className="order-2 md:order-1">
      <ScrollArea className="h-[280px] sm:h-[350px] md:h-[480px] rounded-md border p-1 sm:p-2">
        <div className="space-y-2 pr-1 sm:pr-2">
          {args.map((arg, i) => (
            <ArgumentButton
              key={i}
              argument={arg}
              isSelected={selectedArgument?.title === arg.title}
              onClick={() => onSelect(arg)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ArgumentList;
