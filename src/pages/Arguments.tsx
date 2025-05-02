
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
      <div className="animate-fade-in max-w-6xl mx-auto">
        <h1>Две стороны спора</h1>
        
        <p className="text-lg mb-8">
          Вопрос о смертной казни вызывает одни из самых острых дискуссий в обществе. 
          Сторонники и противники приводят весомые аргументы в защиту своих позиций. 
          Рассмотрим ключевые доводы обеих сторон этого сложного этического и правового спора.
        </p>
        
        <Tabs defaultValue="pro" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="pro" className="text-lg py-3">Аргументы "За"</TabsTrigger>
            <TabsTrigger value="contra" className="text-lg py-3">Аргументы "Против"</TabsTrigger>
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
