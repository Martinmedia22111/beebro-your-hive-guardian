import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useApp, TELEGRAM_BOT_URL } from '@/context/AppContext';
import FamilyCard from '@/components/FamilyCard';
import giftBoxImg from '@/assets/gift-box.jpg';
import { ChevronRight, Gift, Heart, Star } from 'lucide-react';

export default function GiftPage() {
  const navigate = useNavigate();
  const { families } = useApp();
  const available = families.filter(f => f.status !== 'taken').slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <img src={giftBoxImg} alt="Подарок BeeBro" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/50" />
        <div className="relative z-10 container max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Подарите не вещь,<br />а живую историю
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            BeeBro — это подарок с эмоцией и смыслом. Ваш близкий получит свою пчелиную семью и незабываемый сезон наблюдений.
          </p>
          <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Оформить подарок <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </a>
        </div>
      </section>

      {/* Gift formats */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Варианты подарка</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Gift className="w-8 h-8" />, title: 'Подарить семью', desc: 'Выберите конкретную пчелиную семью и оформите опеку на имя получателя.' },
              { icon: <Star className="w-8 h-8" />, title: 'Подарочный сертификат', desc: 'Сертификат на опеку без привязки к семье. Получатель выберет сам.' },
              { icon: <Heart className="w-8 h-8" />, title: 'Премиум-подарок', desc: 'Расширенный формат: семья + мёд + сертификат + персональное поздравление.' },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-8 text-center shadow-soft hover:shadow-card transition-all">
                <div className="w-16 h-16 rounded-full bg-honey-light flex items-center justify-center text-honey-dark mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Оформить</Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available families */}
      <section className="py-16 bg-cream-gradient">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-6">Доступные семьи для подарка</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {available.map(f => <FamilyCard key={f.id} family={f} />)}
          </div>
        </div>
      </section>

      {/* How gift works */}
      <section className="py-16">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold mb-8">Как это работает</h2>
          <div className="space-y-6 text-left">
            {[
              { n: '1', title: 'Выберите семью или сертификат', desc: 'Определитесь с форматом подарка.' },
              { n: '2', title: 'Напишите нам в Telegram', desc: 'Укажите имя получателя и пожелания к поздравлению.' },
              { n: '3', title: 'Оплатите удобным способом', desc: 'Мы предложим варианты оплаты.' },
              { n: '4', title: 'Подарите', desc: 'Получите красивый сертификат и вручите лично или онлайн.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">{s.n}</div>
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
