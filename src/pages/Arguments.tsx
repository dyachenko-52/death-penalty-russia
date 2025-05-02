
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ArgumentCard from '@/components/arguments/ArgumentCard';
import EthicalDilemma from '@/components/arguments/EthicalDilemma';
import { proArguments, contraArguments, scholarOpinions } from '@/components/arguments/ArgumentData';
import { type Argument } from '@/types/arguments';

const Arguments = () => {
  const [selectedProArgument, setSelectedProArgument] = useState<Argument | null>(proArguments[0]);
  const [selectedContraArgument, setSelectedContraArgument] = useState<Argument | null>(contraArguments[0]);
  
  return (
    <PageLayout title="Аргументы">
      <div className="container max-w-6xl px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Аргументы о смертной казни
        </h1>
        
        <EthicalDilemma 
          title="Смертная казнь: за и против"
          description="Споры о допустимости и целесообразности смертной казни продолжаются на протяжении многих веков. Ниже представлены основные аргументы сторонников и противников этой меры наказания."
          imageSrc="https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        
        <Tabs defaultValue="pro" className="mt-8">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="pro">За смертную казнь</TabsTrigger>
            <TabsTrigger value="contra">Против смертной казни</TabsTrigger>
          </TabsList>
          <TabsContent value="pro" className="mt-4 sm:mt-6">
            <ArgumentCard 
              arguments={proArguments}
              selectedArgument={selectedProArgument}
              onSelect={setSelectedProArgument}
            />
          </TabsContent>
          <TabsContent value="contra" className="mt-4 sm:mt-6">
            <ArgumentCard 
              arguments={contraArguments}
              selectedArgument={selectedContraArgument}
              onSelect={setSelectedContraArgument}
            />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Arguments;
