
import { ScrollArea } from '@/components/ui/scroll-area';
import ArgumentButton from './ArgumentButton';
import { type Argument } from './ArgumentsData';

interface ArgumentListProps {
  arguments: Argument[];
  selectedArgument: Argument | null;
  onSelect: (argument: Argument) => void;
}

const ArgumentList = ({ arguments: args, selectedArgument, onSelect }: ArgumentListProps) => {
  return (
    <ScrollArea className="h-[300px] md:h-[500px] rounded-md border p-4">
      <div className="space-y-4 pr-4">
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
  );
};

export default ArgumentList;
