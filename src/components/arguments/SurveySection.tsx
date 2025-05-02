
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SurveySection = () => {
  return (
    <Card className="mb-6 border-primary/20">
      <CardHeader className="bg-primary/5 border-b p-3 sm:p-4">
        <CardTitle className="text-lg sm:text-xl">Опросы общественного мнения</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-6">
          <div className="text-sm sm:text-base pb-2">
            Исследование ВЦИОМ показывает, что вопрос о применении смертной казни 
            остается значимым для квалифицированного большинства (73%) наших сограждан. 
            За последние 15 лет вокруг этой темы сформировалась более четкая позиция:
          </div>
          
          <div className="infographic bg-muted/30 rounded-lg p-4 sm:p-6">
            <h3 className="text-center font-semibold text-sm sm:text-base mb-6">
              Значимость вопроса смертной казни для россиян
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Доля граждан, для которых вопрос о смертной казни важен</span>
                  <span className="font-bold">73%</span>
                </div>
                <Progress value={73} className="h-3" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative pt-10 pb-2">
                  <div className="absolute top-0 left-0 text-xs text-muted-foreground">15 лет назад</div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-primary/40 flex items-center justify-center text-xl font-bold">
                      28%
                    </div>
                    <div className="mt-2 text-sm text-center">
                      Вопрос "безусловно важен"
                    </div>
                  </div>
                </div>
                
                <div className="relative pt-10 pb-2">
                  <div className="absolute top-0 left-0 text-xs text-muted-foreground">Сейчас</div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-primary/70 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      36%
                    </div>
                    <div className="mt-2 text-sm text-center">
                      Вопрос "безусловно важен"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
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
  );
};

export default SurveySection;
