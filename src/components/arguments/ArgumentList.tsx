
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
      <ScrollArea className="h-[200px] sm:h-[250px] md:h-[400px] rounded-md border p-2 sm:p-4">
        <div className="space-y-2 sm:space-y-3 pr-2 sm:pr-4">
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
