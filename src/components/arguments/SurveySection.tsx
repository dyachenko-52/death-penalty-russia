
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
              
              <div className="text-xs sm:text-sm text-muted-foreground text-center italic mt-4">
                По данным исследования ВЦИОМ
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurveySection;
