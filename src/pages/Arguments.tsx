
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type Argument = {
  title: string;
  description: string;
  details: string;
  icon: string;
};

const proArguments: Argument[] = [
  {
    title: "Возмездие",
    description: "Справедливое наказание за особо тяжкие преступления",
    details: "Сторонники смертной казни считают, что за особо тяжкие преступления, особенно убийства детей и террористические акты, необходимо наказывать высшей мерой. Принцип справедливого возмездия предполагает, что наказание должно соответствовать тяжести совершенного деяния. Жестокость по отношению к невинным жертвам, по мнению многих, может быть справедливо наказана только лишением жизни преступника.",
    icon: "Scale"
  },
  {
    title: "Сдерживающий эффект",
    description: "Страх казни предотвращает совершение тяжких преступлений",
    details: "Сторонники смертной казни утверждают, что страх быть казненным может удержать потенциальных преступников от совершения особо тяжких преступлений. Хотя многие исследования не подтверждают наличие причинно-следственной связи между смертной казнью и уровнем преступности, её сторонники считают, что для некоторых людей именно страх смерти может стать решающим фактором при отказе от преступления.",
    icon: "ShieldAlert"
  },
  {
    title: "Экономия ресурсов",
    description: "Не нужно тратить средства на пожизненное содержание преступников",
    details: "Одним из аргументов за смертную казнь является экономия государственных ресурсов. Содержание осуждённых к пожизненному заключению обходится обществу очень дорого: специальные условия содержания, охрана, питание, медицинское обслуживание — всё это требует значительных финансовых затрат на протяжении многих десятилетий. Сторонники казни считают, что эти средства можно было бы использовать на более конструктивные социальные программы.",
    icon: "Coins"
  },
  {
    title: "Общественная поддержка",
    description: "Большинство россиян выступают за возвращение смертной казни",
    details: "Согласно различным социологическим опросам, значительная часть российского общества (от 50 до 70% в разных опросах) поддерживает идею возвращения смертной казни для отдельных категорий преступников. Сторонники возврата к смертной казни указывают на то, что в демократическом обществе законодательство должно отражать волю большинства граждан, и игнорировать это мнение — значит идти против принципов народовластия.",
    icon: "Users"
  }
];

const contraArguments: Argument[] = [
  {
    title: "Судебные ошибки",
    description: "Невозможно исправить после исполнения приговора",
    details: "Ни одна судебная система не застрахована от ошибок. После того как смертный приговор приведен в исполнение, его уже невозможно отменить или исправить. История знает множество случаев, когда невиновные люди были приговорены к смертной казни, а их невиновность доказывалась слишком поздно. В России также известны случаи, когда после казни осуждённых выяснялось, что они не совершали инкриминируемых им преступлений.",
    icon: "AlertTriangle"
  },
  {
    title: "Право на жизнь",
    description: "Основополагающее и неотъемлемое право человека",
    details: "Право на жизнь признается основополагающим, фундаментальным правом человека, закрепленным во Всеобщей декларации прав человека и других международных документах. Смертная казнь прямо противоречит этому принципу, позволяя государству лишать граждан жизни. Многие правозащитники и юристы считают, что право распоряжаться человеческой жизнью не должно принадлежать никому, включая государство.",
    icon: "Heart"
  },
  {
    title: "Неэффективность",
    description: "Нет доказательств, что казнь снижает преступность",
    details: "Многочисленные исследования, проведенные в разных странах, не обнаруживают чёткой корреляции между наличием смертной казни и уровнем тяжких преступлений. Статистика показывает, что отмена смертной казни в разных странах не приводила к росту числа убийств. Более того, во многих странах, где смертная казнь отменена, уровень насильственной преступности ниже, чем в странах, где она сохраняется.",
    icon: "LineChart"
  },
  {
    title: "Гуманистические стандарты",
    description: "Большинство развитых стран отказались от смертной казни",
    details: "В современном мире смертная казнь рассматривается как архаичная и негуманная мера наказания. Подавляющее большинство развитых демократических стран полностью отказались от смертной казни, считая ее несовместимой с принципами гуманизма и уважения человеческого достоинства. Противники казни указывают, что любое цивилизованное общество должно стремиться к гуманизации правовой системы, а не к ужесточению наказаний.",
    icon: "Globe"
  }
];

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
            <div className="grid md:grid-cols-[300px_1fr] gap-6">
              <div className="order-2 md:order-1">
                <ScrollArea className="h-[500px] rounded-md border p-4">
                  <div className="space-y-4 pr-4">
                    {proArguments.map((arg, i) => (
                      <Button
                        key={i}
                        variant={selectedProArgument?.title === arg.title ? "default" : "outline"} 
                        className="w-full justify-start text-left h-auto p-4"
                        onClick={() => setSelectedProArgument(arg)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Icon name={arg.icon} className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">{arg.title}</div>
                            <div className="text-sm text-muted-foreground mt-1">{arg.description}</div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              
              <div className="order-1 md:order-2">
                {selectedProArgument && (
                  <Card className="border-primary/20">
                    <CardHeader className="bg-primary/5 border-b">
                      <div className="flex items-center gap-3">
                        <Icon name={selectedProArgument.icon} className="h-6 w-6 text-primary" />
                        <div>
                          <CardTitle>{selectedProArgument.title}</CardTitle>
                          <CardDescription>{selectedProArgument.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 text-lg">
                      <p className="whitespace-pre-line leading-relaxed">{selectedProArgument.details}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contra" className="mt-0">
            <div className="grid md:grid-cols-[300px_1fr] gap-6">
              <div className="order-2 md:order-1">
                <ScrollArea className="h-[500px] rounded-md border p-4">
                  <div className="space-y-4 pr-4">
                    {contraArguments.map((arg, i) => (
                      <Button
                        key={i}
                        variant={selectedContraArgument?.title === arg.title ? "default" : "outline"} 
                        className="w-full justify-start text-left h-auto p-4"
                        onClick={() => setSelectedContraArgument(arg)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Icon name={arg.icon} className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">{arg.title}</div>
                            <div className="text-sm text-muted-foreground mt-1">{arg.description}</div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              
              <div className="order-1 md:order-2">
                {selectedContraArgument && (
                  <Card className="border-primary/20">
                    <CardHeader className="bg-primary/5 border-b">
                      <div className="flex items-center gap-3">
                        <Icon name={selectedContraArgument.icon} className="h-6 w-6 text-primary" />
                        <div>
                          <CardTitle>{selectedContraArgument.title}</CardTitle>
                          <CardDescription>{selectedContraArgument.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 text-lg">
                      <p className="whitespace-pre-line leading-relaxed">{selectedContraArgument.details}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>
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
