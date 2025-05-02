
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
    title: "Справедливое возмездие",
    description: "Соразмерное наказание за особо тяжкие преступления",
    details: "Сторонники смертной казни считают, что некоторые преступления настолько ужасны, что только высшая мера может быть справедливым ответом. Принцип «око за око» восходит к древнейшим правовым системам и глубоко укоренен в общественном сознании. Многие полагают, что убийцы детей, серийные убийцы и террористы не заслуживают продолжать жить после своих чудовищных деяний.",
    icon: "Scale"
  },
  {
    title: "Сдерживающий эффект",
    description: "Предотвращение тяжких преступлений страхом наказания",
    details: "Существует мнение, что угроза смертной казни может удержать потенциальных преступников от совершения особо тяжких преступлений. Сторонники этой точки зрения утверждают, что страх перед высшей мерой наказания сильнее, чем страх пожизненного заключения, и поэтому смертная казнь эффективнее других мер предотвращает наиболее жестокие преступления.",
    icon: "ShieldAlert"
  },
  {
    title: "Экономическая выгода",
    description: "Сокращение расходов на содержание особо опасных преступников",
    details: "Пожизненное содержание преступников в специальных условиях стоит обществу значительных средств. По мнению некоторых, нецелесообразно тратить эти деньги на тех, кто совершил особо тяжкие преступления, особенно если речь идёт о рецидивистах без шансов на исправление. Эти средства могли бы быть перенаправлены на социальные программы, помощь жертвам преступлений или предотвращение преступности.",
    icon: "Coins"
  },
  {
    title: "Общественное мнение",
    description: "Поддержка большинством населения",
    details: "Согласно социологическим опросам, значительная часть населения России поддерживает смертную казнь для отдельных категорий преступников. Сторонники возврата к смертной казни указывают, что в демократическом обществе мнение большинства должно учитываться при формировании уголовной политики государства.",
    icon: "Users"
  },
  {
    title: "Исключение рецидива",
    description: "Абсолютная гарантия от повторных преступлений",
    details: "Смертная казнь полностью исключает возможность рецидива со стороны казнённого преступника. В истории известны случаи, когда особо опасные преступники, приговорённые к длительным срокам заключения, сбегали из тюрем или совершали новые тяжкие преступления в местах заключения, например, убивали сокамерников или тюремный персонал.",
    icon: "Ban"
  }
];

const contraArguments: Argument[] = [
  {
    title: "Необратимость судебных ошибок",
    description: "Невозможность исправить ошибку после казни невиновного",
    details: "Ни одна судебная система не застрахована от ошибок. История знает немало случаев, когда невиновные люди были казнены, а их невиновность доказывалась слишком поздно. В отличие от других наказаний, смертную казнь невозможно отменить или компенсировать, если выясняется, что осуждённый был невиновен. Современные методы ДНК-экспертизы позволили оправдать многих из тех, кто был приговорён к смертной казни.",
    icon: "AlertTriangle"
  },
  {
    title: "Нарушение права на жизнь",
    description: "Противоречие базовому и неотъемлемому праву человека",
    details: "Право на жизнь признаётся основополагающим, фундаментальным правом человека. Смертная казнь прямо противоречит этому принципу, позволяя государству лишать граждан жизни. Международное право и современные тенденции движутся в сторону признания абсолютной ценности человеческой жизни, независимо от поступков конкретного человека.",
    icon: "Heart"
  },
  {
    title: "Отсутствие доказанной эффективности",
    description: "Нет убедительных доказательств сдерживающего эффекта",
    details: "Многочисленные исследования не обнаруживают устойчивой корреляции между наличием смертной казни и уровнем тяжких преступлений. Страны, отказавшиеся от смертной казни, не наблюдали роста числа убийств. Более того, множество тяжких преступлений совершается в состоянии аффекта или под воздействием психических расстройств, когда человек не способен рационально оценивать последствия своих действий и угрозу наказания.",
    icon: "LineChart"
  },
  {
    title: "Деградация общества",
    description: "Государственные убийства нормализуют жестокость",
    details: "Применение государством узаконенного убийства в качестве наказания может способствовать общей брутализации общества, нормализации насилия и снижению ценности человеческой жизни. Легитимизация убийства со стороны государства может подрывать идею о неприкосновенности человеческой жизни в целом. Кроме того, публичные казни или широкое освещение исполнения смертных приговоров может оказывать негативное психологическое воздействие на общество.",
    icon: "Skull"
  },
  {
    title: "Дискриминационное применение",
    description: "Непропорциональное назначение уязвимым группам",
    details: "Исследования показывают, что смертная казнь часто применяется непропорционально часто к представителям социально уязвимых групп: национальным меньшинствам, малоимущим, людям без качественной юридической защиты. Это поднимает серьезные вопросы о справедливости системы и равенстве всех перед законом.",
    icon: "Unequal"
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
