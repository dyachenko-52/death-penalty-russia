
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <PageLayout>
      <div className="animate-fade-in">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Смертная казнь в России: история, закон и общественное мнение</h1>
          <p className="text-xl mb-8">
            Смертная казнь — один из самых острых и спорных вопросов в современной России. 
            На этом сайте вы узнаете, как менялось отношение к высшей мере наказания в разные эпохи, 
            какие аргументы приводят сторонники и противники, и каково положение в России сегодня.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="flex items-center gap-2">
              <Link to="/history">
                <Icon name="Clock" size={18} />
                Изучить историю
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex items-center gap-2">
              <Link to="/opinions">
                <Icon name="Users" size={18} />
                Общественное мнение
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Icon name="Clock" className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>История</CardTitle>
                <CardDescription>Эволюция смертной казни в России</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Узнайте, как менялась практика применения высшей меры наказания от царских времен до наших дней.</p>
              <Button variant="link" asChild className="p-0 mt-2 flex items-center gap-1">
                <Link to="/history">Подробнее <Icon name="ArrowRight" size={16} /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Icon name="Scale" className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Закон и право</CardTitle>
                <CardDescription>Правовой статус смертной казни</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Изучите правовое положение смертной казни в современной России: мораторий, законодательство, международные обязательства.</p>
              <Button variant="link" asChild className="p-0 mt-2 flex items-center gap-1">
                <Link to="/law">Подробнее <Icon name="ArrowRight" size={16} /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Icon name="FilePlus2" className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Аргументы</CardTitle>
                <CardDescription>Дебаты о смертной казни</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Ознакомьтесь с аргументами сторонников и противников смертной казни в России и мире.</p>
              <Button variant="link" asChild className="p-0 mt-2 flex items-center gap-1">
                <Link to="/arguments">Подробнее <Icon name="ArrowRight" size={16} /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
