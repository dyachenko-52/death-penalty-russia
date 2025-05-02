
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { proArguments, contraArguments, type Argument } from '@/types/arguments';
import ArgumentCard from '@/components/arguments/ArgumentCard';
import EthicalDilemma from '@/components/arguments/EthicalDilemma';

const Arguments = () => {
  const [selectedProArgument, setSelectedProArgument] = useState<Argument | null>(proArguments[0]);
  const [selectedContraArgument, setSelectedContraArgument] = useState<Argument | null>(contraArguments[0]);

  return (
    <PageLayout>
      <div className="animate-fade-in px-0 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Две стороны спора</h1>
        
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
          Вопрос о смертной казни вызывает острые дискуссии в обществе. 
          Сторонники и противники приводят весомые аргументы. 
          Рассмотрим ключевые доводы с обеих сторон.
        </p>
        
        <Tabs defaultValue="pro" className="mb-6 sm:mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6">
            <TabsTrigger value="pro" className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Аргументы "За"</TabsTrigger>
            <TabsTrigger value="contra" className="text-sm sm:text-base md:text-lg py-2 sm:py-3">Аргументы "Против"</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pro" className="mt-0">
            <ArgumentCard 
              arguments={proArguments} 
              selectedArgument={selectedProArgument} 
              onSelect={setSelectedProArgument} 
            />
          </TabsContent>
          
          <TabsContent value="contra" className="mt-0">
            <ArgumentCard 
              arguments={contraArguments} 
              selectedArgument={selectedContraArgument} 
              onSelect={setSelectedContraArgument} 
            />
          </TabsContent>
        </Tabs>
        
        <EthicalDilemma />
      </div>
    </PageLayout>
  );
};

export default Arguments;
