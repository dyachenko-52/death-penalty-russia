
import { Separator } from '@/components/ui/separator';

interface EthicalDilemmaProps {
  title?: string;
  description?: string;
  imageSrc?: string;
}

const EthicalDilemma = ({ 
  title = "Этическая дилемма", 
  description, 
  imageSrc 
}: EthicalDilemmaProps) => {
  return (
    <div className="p-4 sm:p-6 bg-muted rounded-lg mt-6 sm:mt-8 text-sm sm:text-base">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{title}</h2>
      {description && <p className="leading-snug sm:leading-relaxed">{description}</p>}
      <Separator className="my-3 sm:my-4" />
      <p className="leading-snug sm:leading-relaxed">
        Дискуссия о смертной казни выходит за рамки юридических вопросов и затрагивает 
        этические принципы: справедливость, гуманизм, ценность человеческой жизни и права государства.
      </p>
      <Separator className="my-3 sm:my-4" />
      <p className="leading-snug sm:leading-relaxed">
        Это редкий случай, когда обе стороны имеют весомые аргументы, 
        а выбор зависит от личных ценностей и мировоззрения. 
        Поэтому дискуссия продолжается столетиями и вряд ли будет окончательно разрешена.
      </p>
    </div>
  );
};

export default EthicalDilemma;
