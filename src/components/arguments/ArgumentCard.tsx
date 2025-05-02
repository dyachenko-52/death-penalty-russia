
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
    <div className="grid md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-4 sm:gap-6">
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
