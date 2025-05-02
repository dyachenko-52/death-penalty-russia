
import { type Argument } from '@/types/arguments';
import ArgumentDetail from './ArgumentDetail';
import ArgumentList from './ArgumentList';

interface ArgumentCardProps {
  arguments: Argument[];
  selectedArgument: Argument | null;
  onSelect: (argument: Argument) => void;
}

const ArgumentCard = ({ arguments: args, selectedArgument, onSelect }: ArgumentCardProps) => {
  return (
    <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-3 sm:gap-4">
      <ArgumentList
        arguments={args}
        selectedArgument={selectedArgument}
        onSelect={onSelect}
      />
      <ArgumentDetail argument={selectedArgument} />
    </div>
  );
};

export default ArgumentCard;
