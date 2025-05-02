
import PageLayout from '@/components/PageLayout';
import { Timeline, TimelineContent, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector } from '@/components/ui/timeline';

const History = () => {
  return (
    <PageLayout>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <h1>Этапы развития смертной казни в России</h1>
        
        <Timeline className="my-8">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className="bg-primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h2 className="text-xl font-semibold">До 1917 года</h2>
              <p>
                В царской России смертная казнь применялась широко. В XVI–XVII веках активно использовались 
                публичные казни, а Уложение о наказаниях предусматривало смертную казнь за множество преступлений. 
                Елизавета Петровна приостанавливала смертную казнь на 20 лет, однако позднее она была восстановлена.
              </p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className="bg-primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h2 className="text-xl font-semibold">Советский период</h2>
              <p>
                После революции 1917 года смертная казнь сначала была отменена большевиками, но затем восстановлена.
                Период массовых репрессий 1930-х годов стал одним из самых мрачных в истории применения смертной казни.
                Расстрелы применялись как за политические, так и за уголовные преступления.
              </p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className="bg-primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h2 className="text-xl font-semibold">1990-е годы</h2>
              <p>
                После распада СССР в России начались активные дискуссии об отмене смертной казни. 
                Последний смертный приговор был приведён в исполнение в 1996 году. В этот период 
                смертная казнь рассматривалась как исключительная мера наказания за особо тяжкие преступления.
              </p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className="bg-primary" />
            </TimelineSeparator>
            <TimelineContent>
              <h2 className="text-xl font-semibold">Мораторий (с 1996 года)</h2>
              <p>
                В 1996 году после вступления России в Совет Европы был введён мораторий на исполнение смертных приговоров. 
                В 1999 году Конституционный Суд РФ своим постановлением фактически запретил вынесение смертных приговоров до введения 
                суда присяжных во всех субъектах России. После 2009 года, когда суды присяжных начали действовать во всех регионах, 
                Конституционный Суд продлил мораторий.
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        
        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-8">
          <h2 className="text-xl font-semibold mb-2">Современное состояние</h2>
          <p>
            Несмотря на выход России из Совета Европы в 2022 году, мораторий на смертную казнь продолжает действовать. 
            Вопрос о возможном возвращении смертной казни периодически поднимается в общественных и политических дискуссиях, 
            однако пока официальной позиции о снятии моратория не объявлено.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default History;
