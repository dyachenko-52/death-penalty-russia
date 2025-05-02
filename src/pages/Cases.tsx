
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

type CriminalCase = {
  name: string;
  description: string;
  details: string;
  image: string;
  year: string;
  status: string;
};

const cases: CriminalCase[] = [
  {
    name: "Андрей Чикатило",
    description: "Расстрелян в 1994 году",
    details: "Один из самых известных серийных убийц в истории СССР и России, был осужден за убийство 52 человек, в основном женщин и детей. Чикатило был расстрелян 14 февраля 1994 года, став одним из последних казненных в России до введения моратория. Его дело широко освещалось в СМИ и стало символом ужаса, который могут совершать серийные убийцы, и одновременно примером того, за какие преступления общество считает оправданным применение высшей меры наказания.",
    image: "https://images.unsplash.com/photo-1589519160732-576f165b9aad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    year: "1994",
    status: "Расстрелян"
  },
  {
    name: "Александр Кравченко",
    description: "Ошибочный приговор",
    details: "Александр Кравченко был осуждён в 1983 году за убийство девочки и казнён. Через 10 лет после его казни, во время расследования дела Чикатило, выяснилось, что именно Чикатило совершил это преступление, а Кравченко был невиновен. Этот трагический случай судебной ошибки стал одним из самых ярких аргументов против смертной казни в России и показал необратимость последствий неверного приговора, когда речь идёт о высшей мере наказания.",
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    year: "1983",
    status: "Казнён, позже оправдан"
  },
  {
    name: "Александр Пичушкин",
    description: "«Битцевский маньяк»",
    details: "Серийный убийца, известный как «Битцевский маньяк», был осуждён в 2007 году за убийство 48 человек и покушение на убийство ещё троих. Несмотря на особую жестокость и масштаб преступлений, Пичушкин был приговорён к пожизненному заключению, а не к смертной казни, из-за действующего в России моратория. Его дело вызвало широкий общественный резонанс и возобновило дискуссии о необходимости возвращения смертной казни для серийных убийц.",
    image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    year: "2007",
    status: "Пожизненное заключение"
  },
  {
    name: "Николай Джумагалиев",
    description: "«Металлоискатель»",
    details: "Советский серийный убийца-каннибал, известный как «Металлоискатель» из-за металлических зубных протезов. В 1980 году Джумагалиев был арестован за убийство и каннибализм. Признанный невменяемым, он избежал смертной казни и был направлен на принудительное лечение в психиатрическую больницу. Его дело стало одним из самых шокирующих в истории советской криминалистики и получило широкое освещение в СМИ после распада СССР.",
    image: "https://images.unsplash.com/photo-1523674714772-4ea82b7b2218?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    year: "1980",
    status: "Признан невменяемым"
  },
  {
    name: "Теракт в Будённовске",
    description: "1995 год",
    details: "14-19 июня 1995 года в городе Будённовске (Ставропольский край) произошёл один из крупнейших террористических актов в истории России. Отряд боевиков во главе с Шамилем Басаевым захватил больницу и удерживал около 1500-2000 заложников. В результате теракта погибло 129 человек, более 400 были ранены. После этого трагического события в обществе звучали призывы к возвращению смертной казни для террористов, однако из-за действия моратория и сложных переговоров смертные приговоры не применялись к участникам теракта.",
    image: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    year: "1995",
    status: "Мораторий"
  }
];

const Cases = () => {
  return (
    <PageLayout>
      <div className="animate-fade-in max-w-5xl mx-auto">
        <h1>Громкие дела</h1>
        
        <p className="text-lg mb-8">
          История смертной казни в России неразрывно связана с громкими уголовными делами, 
          которые формировали общественное мнение и влияли на законодательство. 
          Ниже представлены некоторые из самых резонансных случаев, связанных с вопросом 
          применения высшей меры наказания.
        </p>
        
        <div className="space-y-8">
          {cases.map((criminalCase, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                <div className="p-6">
                  <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
                    <img
                      src={criminalCase.image}
                      alt={criminalCase.name}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="flex items-center justify-between mt-4">
                    <Badge variant="outline" className="text-sm">{criminalCase.year}</Badge>
                    <Badge 
                      variant={
                        criminalCase.status === "Расстрелян" ? "destructive" : 
                        criminalCase.status === "Казнён, позже оправдан" ? "destructive" : 
                        criminalCase.status === "Пожизненное заключение" ? "secondary" : 
                        "outline"
                      }
                      className="text-sm"
                    >
                      {criminalCase.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 pt-0 md:pt-6 md:pl-0">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-2xl">{criminalCase.name}</CardTitle>
                    <CardDescription className="text-lg">{criminalCase.description}</CardDescription>
                  </CardHeader>
                  <Separator className="my-4 md:hidden" />
                  <CardContent className="p-0">
                    <p className="text-gray-700">{criminalCase.details}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="p-6 bg-muted rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-4">Влияние на общественное мнение</h2>
          <p>
            Эти и другие громкие дела оказали значительное влияние на отношение российского общества 
            к вопросу смертной казни. С одной стороны, преступления серийных убийц и террористов усиливали 
            поддержку высшей меры наказания, с другой — случаи судебных ошибок и неправомерных приговоров 
            становились весомыми аргументами против неё.
          </p>
          <p className="mt-4">
            Каждое такое дело становилось не только юридическим прецедентом, но и поводом для широкой 
            общественной дискуссии о справедливости, гуманизме и эффективности системы наказаний 
            в современном обществе.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cases;
