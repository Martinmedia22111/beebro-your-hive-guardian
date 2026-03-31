import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/context/AppContext';
import giftBoxImg from '@/assets/gift-box.jpg';
import { ChevronRight, Gift, Heart, Star, Check, Users, Crown } from 'lucide-react';

export default function GiftPage() {
  const navigate = useNavigate();
  const { setGiftMode } = useApp();

  const handleGiftNavigate = () => {
    setGiftMode(true);
    navigate('/catalog');
  };

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
            BeeBro — это подарок с эмоцией и смыслом. Ваш близкий получит свою пчелиную семью, личный кабинет и незабываемый сезон наблюдений.
          </p>
          <Button size="lg" onClick={handleGiftNavigate}>
            Выбрать подарок <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </section>

      {/* Gift formats */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-4">Варианты подарка</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Выберите формат участия для получателя подарка
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Доля улья */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col">
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Доля улья</h3>
                    <p className="text-xs text-muted-foreground">Совместная опека</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Подарите участие в жизни пчелиной семьи. Получатель станет совладельцем улья, будет наблюдать за пчёлами и получит мёд.
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {['Опека над пчелиной семьёй', 'Доступ к онлайн-трансляциям', 'Мёд от семьи', 'Сертификат опекуна', 'Подарочное оформление'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <span className="font-display text-3xl font-bold text-foreground">$79</span>
                    <span className="text-sm text-muted-foreground ml-1">/ сезон</span>
                  </div>
                  <Button onClick={handleGiftNavigate} className="bg-amber-500 hover:bg-amber-600">
                    🎁 Подарить
                  </Button>
                </div>
              </div>
            </div>

            {/* Целый улей */}
            <div className="relative bg-card rounded-2xl border-2 border-emerald-500 overflow-hidden shadow-elevated flex flex-col">
              <div className="absolute -top-0 left-0 right-0">
                <div className="bg-emerald-600 text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                  Премиум-подарок
                </div>
              </div>
              <div className="p-8 pt-12 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Crown className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Целый улей</h3>
                    <p className="text-xs text-muted-foreground">Полное владение</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Подарите целый улей. Получатель станет единственным владельцем — весь мёд, все обновления, полный эксклюзив.
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {['Весь улей — только его', 'Доступ к онлайн-наблюдению', 'Весь мёд от улья', 'Сертификат владельца', 'Премиум подарочное оформление'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <span className="font-display text-3xl font-bold text-foreground">$349</span>
                    <span className="text-sm text-muted-foreground ml-1">/ сезон</span>
                  </div>
                  <Button onClick={handleGiftNavigate} className="bg-emerald-600 hover:bg-emerald-700">
                    🎁 Подарить
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why gift BeeBro */}
      <section className="py-16 bg-cream-gradient">
        <div className="container">
          <h2 className="font-display text-2xl font-bold text-center mb-10">Почему BeeBro — идеальный подарок</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Gift className="w-8 h-8" />, title: 'Уникальность', desc: 'Это не банальный подарок. Это живой опыт наблюдения за пчелиной семьёй на реальной пасеке.' },
              { icon: <Heart className="w-8 h-8" />, title: 'Эмоции на весь сезон', desc: 'Подарок, который продолжает радовать 5 месяцев. Обновления, фото, видео — каждую неделю.' },
              { icon: <Star className="w-8 h-8" />, title: 'Мёд в подарок', desc: 'В конце сезона получатель получит мёд, произведённый его пчелиной семьёй.' },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-8 text-center shadow-soft hover:shadow-card transition-all">
                <div className="w-16 h-16 rounded-full bg-honey-light flex items-center justify-center text-honey-dark mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How gift works */}
      <section className="py-16">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold mb-8">Как подарить</h2>
          <div className="space-y-6 text-left">
            {[
              { n: '1', title: 'Выберите формат', desc: 'Доля улья ($79) или Целый улей ($349) — оба включают подарочное оформление.' },
              { n: '2', title: 'Выберите семью или улей', desc: 'Определитесь с конкретным предложением из каталога.' },
              { n: '3', title: 'Заполните данные получателя', desc: 'Имя, поздравление, дата вручения.' },
              { n: '4', title: 'Подарите', desc: 'Получите подарочный сертификат и ссылку. Отправьте по email или вручите лично.' },
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
