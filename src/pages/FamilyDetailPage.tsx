import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight, Lock } from 'lucide-react';
import FamilyCard from '@/components/FamilyCard';

const statusLabels: Record<string, string> = {
  available: 'Доступна', almost_taken: 'Почти занята', taken: 'Под опекой',
};

export default function FamilyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { families, setCartFamily, setGiftMode } = useApp();
  const family = families.find(f => f.id === id);

  if (!family) {
    return <div className="pt-24 pb-20 container text-center"><p className="text-xl">Семья не найдена</p><Button onClick={() => navigate('/catalog')} className="mt-4">К каталогу</Button></div>;
  }

  const similar = families.filter(f => f.id !== family.id && f.status !== 'taken').slice(0, 3);

  const handleAdopt = () => {
    setCartFamily(family);
    setGiftMode(false);
    navigate('/checkout');
  };

  const handleGift = () => {
    setCartFamily(family);
    setGiftMode(true);
    navigate('/checkout');
  };

  const milestones = [
    { label: 'Старт сезона', pct: 0 },
    { label: 'Активность', pct: 25 },
    { label: 'Медосбор', pct: 50 },
    { label: 'Пик сезона', pct: 75 },
    { label: 'Завершение', pct: 100 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={family.image} alt={family.name} className="w-full h-80 md:h-full object-cover" width={800} height={600} />
          </div>
          <div className="flex flex-col justify-center">
            <Badge className="w-fit mb-3">{statusLabels[family.status]}</Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{family.name}</h1>
            <p className="text-muted-foreground mb-4">{family.description}</p>
            <p className="font-display text-3xl font-bold text-foreground mb-6">от ${family.price}</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {family.features.map((f, i) => (
                <span key={i} className="px-3 py-1 bg-honey-light text-honey-dark rounded-full text-sm">{f}</span>
              ))}
            </div>

            {family.status !== 'taken' ? (
              <div className="flex gap-3">
                <Button size="lg" onClick={handleAdopt}>Взять под опеку <ChevronRight className="w-5 h-5 ml-1" /></Button>
                <Button size="lg" variant="outline" onClick={handleGift}>🎁 Подарить</Button>
              </div>
            ) : (
              <div>
                <p className="text-muted-foreground mb-3">Эта семья уже под опекой</p>
                <Button onClick={() => navigate('/catalog?status=available')}>Выбрать другую</Button>
              </div>
            )}
          </div>
        </div>

        {/* About */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-4">О семье</h2>
          <p className="text-muted-foreground max-w-2xl">{family.story}</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card p-4 rounded-lg border border-border text-center">
              <div className="text-sm text-muted-foreground">Характер</div>
              <div className="font-semibold mt-1">{family.character.split('.')[0]}</div>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border text-center">
              <div className="text-sm text-muted-foreground">Сила</div>
              <div className="font-semibold mt-1">{'⭐'.repeat(family.strength)}</div>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border text-center">
              <div className="text-sm text-muted-foreground">Сезон</div>
              <div className="font-semibold mt-1">{family.season}</div>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border text-center">
              <div className="text-sm text-muted-foreground">Прогресс</div>
              <div className="font-semibold mt-1">{family.progress}%</div>
            </div>
          </div>
        </section>

        {/* Season progress timeline */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Прогресс сезона</h2>
          <div className="relative">
            <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
              <div className="h-full bg-honey-gradient rounded-full transition-all" style={{ width: `${family.progress}%` }} />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              {milestones.map((m, i) => (
                <div key={i} className={`text-center ${family.progress >= m.pct ? 'text-foreground font-medium' : ''}`}>
                  <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${family.progress >= m.pct ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                  <span className="hidden sm:inline">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Updates */}
          {family.updates.length > 0 && (
            <div className="mt-8 space-y-4">
              <h3 className="font-display text-lg font-semibold">Последние обновления</h3>
              {family.updates.map((u, i) => (
                <div key={i} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl">{u.type === 'milestone' ? '🏆' : u.type === 'photo' ? '📸' : '🎬'}</div>
                  <div>
                    <div className="font-semibold">{u.title}</div>
                    <p className="text-sm text-muted-foreground">{u.description}</p>
                    <span className="text-xs text-muted-foreground">{u.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Live stream locked */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl border border-border p-10 text-center">
            <Lock className="w-10 h-10 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">Онлайн-трансляция</h3>
            <p className="text-muted-foreground mb-4">Доступно после оформления расширенной опеки</p>
            {family.status !== 'taken' && (
              <Button onClick={handleAdopt}>Оформить опеку</Button>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 max-w-2xl">
          <h2 className="font-display text-2xl font-bold mb-6">Вопросы по этой семье</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: 'Можно ли сменить семью?', a: 'Да, в течение 7 дней после оформления вы можете сменить семью на другую доступную.' },
              { q: 'Когда откроется доступ?', a: 'Доступ в личный кабинет открывается сразу после подтверждения оплаты.' },
              { q: 'Можно ли оформить на подарок?', a: 'Конечно! Нажмите кнопку «Подарить» и заполните данные получателя.' },
            ].map((f, i) => (
              <AccordionItem key={i} value={`dfaq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Similar families */}
        {similar.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-bold mb-6">Похожие семьи</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {similar.map(f => <FamilyCard key={f.id} family={f} />)}
            </div>
          </section>
        )}

        {/* Final CTA */}
        {family.status !== 'taken' && (
          <section className="mt-16 text-center py-10 bg-honey-light rounded-2xl">
            <h2 className="font-display text-2xl font-bold mb-4">{family.name} ждёт вас</h2>
            <div className="flex gap-3 justify-center">
              <Button size="lg" onClick={handleAdopt}>Взять под опеку</Button>
              <Button size="lg" variant="outline" onClick={handleGift}>🎁 Подарить</Button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
