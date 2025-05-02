
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { proArguments, contraArguments, type Argument } from '@/components/arguments/ArgumentsData';
import ArgumentList from '@/components/arguments/ArgumentList';
import ArgumentCard from '@/components/arguments/ArgumentCard';

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
          
          {/* Мобильная версия */}
          <div className="block md:hidden">
            <TabsContent value="pro" className="mt-0 space-y-6">
              <ArgumentList 
                arguments={proArguments} 
                selectedArgument={selectedProArgument} 
                onSelect={setSelectedProArgument} 
              />
              {selectedProArgument && (
                <ArgumentCard argument={selectedProArgument} />
              )}
            </TabsContent>
            
            <TabsContent value="contra" className="mt-0 space-y-6">
              <ArgumentList 
                arguments={contraArguments} 
                selectedArgument={selectedContraArgument} 
                onSelect={setSelectedContraArgument} 
              />
              {selectedContraArgument && (
                <ArgumentCard argument={selectedContraArgument} />
              )}
            </TabsContent>
          </div>
          
          {/* Десктопная версия */}
          <div className="hidden md:block">
            <TabsContent value="pro" className="mt-0">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <ArgumentList 
                  arguments={proArguments} 
                  selectedArgument={selectedProArgument} 
                  onSelect={setSelectedProArgument} 
                />
                {selectedProArgument && (
                  <ArgumentCard argument={selectedProArgument} />
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="contra" className="mt-0">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <ArgumentList 
                  arguments={contraArguments} 
                  selectedArgument={selectedContraArgument} 
                  onSelect={setSelectedContraArgument} 
                />
                {selectedContraArgument && (
                  <ArgumentCard argument={selectedContraArgument} />
                )}
              </div>
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="p-6 bg-muted rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-4">Этическая дилемма</h2>
          <p>
            Дискуссия о смертной казни выходит далеко за рамки юридических вопросов и затрагивает 
            фундаментальные этические принципы: справедливость, гуманизм, ценность человеческой жизни, 
            права государства по отношению к гражданам.
          </p>
          <Separator className="my-4" />
          <p>
            Это тот редкий случай, когда на обеих сторонах спора есть весомые аргументы, 
            а выбор во многом зависит от личных ценностей, мировоззрения и общественно-культурного контекста.
            Именно поэтому дискуссия о смертной казни продолжается на протяжении столетий и вряд ли 
            когда-либо будет окончательно разрешена.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Arguments;
