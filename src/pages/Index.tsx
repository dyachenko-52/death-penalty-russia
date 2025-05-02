
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <PageLayout>
      <div className="animate-fade-in">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Смертная казнь в России: история, закон и общественное мнение</h1>
          <p className="text-xl mb-8">
            Смертная казнь — один из самых острых и спорных вопросов в современной России. 
            На этом сайте вы узнаете, как менялось отношение к высшей мере наказания в разные эпохи, 
            какие аргументы приводят сторонники и противники, и каково положение в мире сегодня.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/history">Изучить историю</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/opinions">Общественное мнение</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>История</CardTitle>
              <CardDescription>Эволюция смертной казни в России</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Узнайте, как менялась практика применения высшей меры наказания от царских времен до наших дней.</p>
              <Button variant="link" asChild className="p-0 mt-2">
                <Link to="/history">Подробнее →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Закон и право</CardTitle>
              <CardDescription>Правовой статус смертной казни</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Изучите правовое положение смертной казни в современной России: мораторий, законодательство, международные обязательства.</p>
              <Button variant="link" asChild className="p-0 mt-2">
                <Link to="/law">Подробнее →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Аргументы</CardTitle>
              <CardDescription>Дебаты о смертной казни</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ознакомьтесь с аргументами сторонников и противников смертной казни в России и мире.</p>
              <Button variant="link" asChild className="p-0 mt-2">
                <Link to="/arguments">Подробнее →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
