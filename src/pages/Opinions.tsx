
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type ResearcherOpinion = {
  name: string;
  title: string;
  period: string;
  opinion: string;
  initials: string;
};

const researchers: ResearcherOpinion[] = [
  {
    name: "И. В. Васильев",
    title: "Криминолог и правовед",
    period: "1890-1950",
    opinion: "Иван Васильевич Васильев в своих работах начала XX века рассматривал смертную казнь как крайнюю меру, которая может быть оправдана только в исключительных случаях. Он не был абсолютным противником смертной казни, но подчеркивал необходимость ее строгой регламентации и минимизации применения. «Смертная казнь должна быть последним средством государственной защиты, когда все другие средства оказываются бессильными», - писал он. Васильев был сторонником постепенного ограничения сферы применения смертной казни с перспективой ее полной отмены по мере развития общества.",
    initials: "ИВ"
  },
  {
    name: "Н. С. Таганцев",
    title: "Юрист, криминолог, сенатор",
    period: "1843-1923",
    opinion: "Николай Степанович Таганцев, один из классиков российской юриспруденции, выступал за постепенное ограничение и конечную отмену смертной казни. В своем труде «Русское уголовное право» он писал: «Применение смертной казни постепенно суживается историей; последняя выдвигает на смену ей другие виды наказания, указывает на другие способы борьбы с преступностью». Таганцев считал, что смертная казнь не является эффективным средством предупреждения преступлений и противоречит цели исправления преступника. При этом он признавал, что полная отмена смертной казни возможна только при соответствующем уровне развития общества.",
    initials: "НТ"
  },
  {
    name: "А. Ф. Кистяковский",
    title: "Юрист, профессор уголовного права",
    period: "1833-1885",
    opinion: "Александр Фёдорович Кистяковский, известный украинский и российский учёный-криминалист, выступал решительным противником смертной казни. В своём труде «Исследование о смертной казни» (1867) он детально проанализировал историю и проблемы применения этого наказания. Кистяковский утверждал, что смертная казнь не соответствует основным целям наказания — исправлению преступника и общему предупреждению преступлений. Он аргументировал, что суровость наказания не предотвращает преступления так эффективно, как неотвратимость наказания, и что общество должно найти более гуманные и эффективные способы борьбы с преступностью.",
    initials: "АК"
  },
  {
    name: "М. Н. Гернет",
    title: "Выдающийся юрист и криминолог",
    period: "1874-1953",
    opinion: "Михаил Николаевич Гернет, автор фундаментального труда «История царской тюрьмы», выступал как принципиальный противник смертной казни. В своих работах он подчеркивал, что смертная казнь является пережитком прошлого и не обладает превентивным действием. Гернет считал, что «смертная казнь - это не акт правосудия, а акт мести». Он указывал на несправедливость этого наказания, его необратимость в случае судебной ошибки и социальную неравномерность его применения.",
    initials: "МГ"
  },
  {
    name: "Г. И. Солнцев",
    title: "Правовед и философ права",
    period: "1786-1866",
    opinion: "Гавриил Ильич Солнцев, первый в России доктор права и профессор Казанского университета, был одним из ранних противников смертной казни в российской юридической науке. В своем труде «Российское уголовное право» (1820) он предлагал полный отказ от смертной казни, считая ее несовместимой с принципами естественного права и высказывая идеи, опережавшие свое время. Солнцев указывал, что право на жизнь - естественное право человека, которое государство не должно нарушать, и предлагал заменить смертную казнь системой исправительных наказаний.",
    initials: "ГС"
  }
];

const Opinions = () => {
  return (
    <PageLayout>
      <div className="animate-fade-in max-w-5xl mx-auto px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Мнения</h1>
        
        {/* Секция с опросами */}
        <Card className="mb-8 border-primary/20">
          <CardHeader className="bg-primary/5 border-b p-3 sm:p-4">
            <CardTitle className="text-lg sm:text-xl">Результаты опросов общественного мнения</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-6">
              <div className="text-sm sm:text-base pb-2">
                Исследование ВЦИОМ показывает, что вопрос о применении смертной казни 
                остается значимым для квалифицированного большинства (73%) наших сограждан. 
                За последние 15 лет вокруг этой темы сформировалась более четкая позиция.
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Динамика общественного мнения 2010-2025</h3>
                <p className="text-sm mb-4">Насколько для Вас лично важно, будет ли в России применяться смертная казнь или нет?</p>
                <p className="text-xs text-muted-foreground mb-4">(закрытый вопрос, один ответ, % от всех опрошенных)</p>
                
                <div className="overflow-x-auto">
                  <Table className="border">
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-medium">Ответ</TableHead>
                        <TableHead className="text-center font-medium">2010*</TableHead>
                        <TableHead className="text-center font-medium">2021</TableHead>
                        <TableHead className="text-center font-medium">2025</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-muted/30">
                        <TableCell className="font-medium">Безусловно, важно</TableCell>
                        <TableCell className="text-center">28</TableCell>
                        <TableCell className="text-center">33</TableCell>
                        <TableCell className="text-center bg-primary/10 font-semibold">36</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/30">
                        <TableCell className="font-medium">Скорее важно</TableCell>
                        <TableCell className="text-center">45</TableCell>
                        <TableCell className="text-center">38</TableCell>
                        <TableCell className="text-center">37</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/30">
                        <TableCell className="font-medium">Скорее неважно</TableCell>
                        <TableCell className="text-center">16</TableCell>
                        <TableCell className="text-center">11</TableCell>
                        <TableCell className="text-center">11</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/30">
                        <TableCell className="font-medium">Безусловно, неважно</TableCell>
                        <TableCell className="text-center">4</TableCell>
                        <TableCell className="text-center">6</TableCell>
                        <TableCell className="text-center">6</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/30">
                        <TableCell className="font-medium">Затрудняюсь ответить</TableCell>
                        <TableCell className="text-center">8</TableCell>
                        <TableCell className="text-center">12</TableCell>
                        <TableCell className="text-center">10</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="text-xs text-muted-foreground mt-3 italic">
                  По данным исследования ВЦИОМ<br />
                  * - данные за 2010 год приведены для сравнения
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Заголовок перед мнениями исследователей */}
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Мнения исследователей</h2>
        
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
          Вопрос о смертной казни на протяжении веков привлекал внимание выдающихся российских юристов, 
          философов и общественных деятелей. Их взгляды формировали научный и общественный дискурс по 
          этой сложной этической и правовой проблеме.
        </p>
        
        <div className="space-y-4 sm:space-y-6">
          {researchers.map((researcher, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="grid md:grid-cols-[auto_1fr] gap-4 sm:gap-6 p-4 sm:p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16 sm:h-24 sm:w-24 mb-2 sm:mb-3">
                    <AvatarFallback className="text-lg sm:text-xl bg-primary text-primary-foreground">
                      {researcher.initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-xs sm:text-sm text-gray-500 text-center">{researcher.period}</p>
                </div>
                
                <div>
                  <CardHeader className="p-0 pb-2 sm:pb-4">
                    <CardTitle className="text-xl sm:text-2xl">{researcher.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{researcher.title}</CardDescription>
                  </CardHeader>
                  <Separator className="my-2 sm:my-4" />
                  <CardContent className="p-0 text-sm sm:text-base">
                    <p className="text-gray-700 leading-snug sm:leading-relaxed">{researcher.opinion}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Opinions;
