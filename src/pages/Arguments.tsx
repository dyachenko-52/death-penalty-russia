
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { proArguments, contraArguments } from '@/components/arguments/ArgumentData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { type Argument } from '@/types/arguments';
import { ScrollArea } from '@/components/ui/scroll-area';

const Arguments = () => {
  return (
    <PageLayout title="Аргументы">
      <div className="container max-w-6xl px-2 py-4 sm:px-4 sm:py-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-6">
          Аргументы о смертной казни
        </h1>
        
        <p className="text-sm sm:text-base mb-4">
          Споры о допустимости и целесообразности смертной казни продолжаются на протяжении многих веков. 
          Ниже представлены основные аргументы сторонников и противников этой меры наказания.
        </p>
        
        <Tabs defaultValue="pro" className="mt-4">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="pro">За смертную казнь</TabsTrigger>
            <TabsTrigger value="contra">Против смертной казни</TabsTrigger>
          </TabsList>
          <TabsContent value="pro" className="mt-3 sm:mt-4">
            <ArgumentsAccordion arguments={proArguments} />
          </TabsContent>
          <TabsContent value="contra" className="mt-3 sm:mt-4">
            <ArgumentsAccordion arguments={contraArguments} />
          </TabsContent>
        </Tabs>
        
        <EthicalDilemmaMobile />
      </div>
    </PageLayout>
  );
};

const ArgumentsAccordion = ({ arguments: args }: { arguments: Argument[] }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <div className="space-y-3">
      {args.map((arg, index) => (
        <ArgumentItem 
          key={index}
          argument={arg}
          isExpanded={expandedIndex === index}
          onClick={() => toggleExpand(index)}
        />
      ))}
    </div>
  );
};

const ArgumentItem = ({ 
  argument, 
  isExpanded, 
  onClick 
}: { 
  argument: Argument; 
  isExpanded: boolean; 
  onClick: () => void;
}) => {
  return (
    <Card className={cn("border overflow-hidden transition-all", 
      isExpanded ? "border-primary/40" : "")}>
      <CardHeader 
        className={cn("py-3 px-3 cursor-pointer flex flex-row items-center gap-2", 
          isExpanded ? "bg-primary/10" : "bg-muted/30")}
        onClick={onClick}
      >
        <Icon name={argument.icon} className="h-5 w-5 text-primary flex-shrink-0" />
        <CardTitle className="text-base font-medium">{argument.title}</CardTitle>
        <Icon 
          name={isExpanded ? "ChevronDown" : "ChevronRight"} 
          className="h-4 w-4 ml-auto text-muted-foreground"
        />
      </CardHeader>
      
      {isExpanded && (
        <>
          <div className="px-3 py-2 text-sm text-muted-foreground border-t border-b bg-muted/5">
            {argument.description}
          </div>
          
          <CardContent className="p-3">
            <ScrollArea className="h-[200px] pr-3">
              {argument.details.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-sm mb-3 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </ScrollArea>
          </CardContent>
        </>
      )}
    </Card>
  );
};

const EthicalDilemmaMobile = () => {
  return (
    <div className="p-3 sm:p-4 bg-muted/20 rounded-lg mt-5 sm:mt-8 text-sm border">
      <h2 className="text-base sm:text-lg font-medium mb-2">Этическая дилемма</h2>
      <p className="text-sm leading-relaxed mb-3">
        Дискуссия о смертной казни выходит за рамки юридических вопросов и затрагивает 
        этические принципы: справедливость, гуманизм, ценность человеческой жизни и права государства.
      </p>
      <p className="text-sm leading-relaxed">
        Это редкий случай, когда обе стороны имеют весомые аргументы, 
        а выбор зависит от личных ценностей и мировоззрения. 
        Поэтому дискуссия продолжается столетиями и вряд ли будет окончательно разрешена.
      </p>
    </div>
  );
};

export default Arguments;
