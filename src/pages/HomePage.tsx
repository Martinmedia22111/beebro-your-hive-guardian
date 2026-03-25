import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useApp } from '@/context/AppContext';
import FamilyCard from '@/components/FamilyCard';
import { Eye, Heart, Gift, Shield, Leaf, Star, ChevronRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import apiaryTrust from '@/assets/apiary-trust.jpg';
import giftBox from '@/assets/gift-box.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HomePage() {
  const navigate = useNavigate();
  const { families } = useApp();
  const featured = families.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Пасека BeeBro" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-background" />
        <div className="relative z-10 container text-center text-primary-foreground py-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Возьми пчелиную семью
            <br />
            <span className="text-gradient-honey">под опеку</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Выбирай семью, наблюдай за жизнью улья в течение сезона, получай обновления, эмоции и бонусы. BeeBro — это живой цифровой опыт.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/catalog')} className="text-base px-8">
              Выбрать семью <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/how-it-works')} className="text-base px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="py-20 bg-cream-gradient">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: '🐝', title: 'Выберите семью', desc: 'Посмотрите доступных пчёл, узнайте их характер и историю' },
              { icon: '📋', title: 'Оформите опеку', desc: 'Выберите тариф, оплатите участие — и семья станет вашей' },
              { icon: '📱', title: 'Наблюдайте и получайте бонусы', desc: 'Следите за сезоном, получайте фото, видео, сертификат и мёд' },
            ].map((step, i) => (
              <div key={i} className="text-center p-8 bg-card rounded-lg shadow-soft border border-border">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-xs font-semibold text-primary mb-2">Шаг {i + 1}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" onClick={() => navigate('/catalog')}>
              Перейти к выбору <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why people love BeeBro */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают BeeBro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, title: 'Живой формат', desc: 'Это не просто покупка — это причастность к реальной пчелиной семье' },
              { icon: <Eye className="w-6 h-6" />, title: 'Наблюдение за сезоном', desc: 'Фото, видео, обновления — вы видите, как живёт ваша семья' },
              { icon: <Gift className="w-6 h-6" />, title: 'Идеальный подарок', desc: 'Подарите не вещь, а живую историю с эмоцией и смыслом' },
              { icon: <Shield className="w-6 h-6" />, title: 'Красиво упаковано', desc: 'Цифровой кабинет, сертификат, прогресс — всё продумано до мелочей' },
              { icon: <Leaf className="w-6 h-6" />, title: 'Экологично', desc: 'Вы поддерживаете реальную пасеку и помогаете пчёлам' },
              { icon: <Star className="w-6 h-6" />, title: 'Ограничено', desc: 'Количество семей ограничено — каждый сезон уникален' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-lg hover:bg-card hover:shadow-soft transition-all border border-transparent hover:border-border">
                <div className="w-12 h-12 rounded-lg bg-honey-light flex items-center justify-center text-honey-dark shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular families */}
      <section className="py-20 bg-cream-gradient">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Доступные семьи
            </h2>
            <Button variant="outline" onClick={() => navigate('/catalog')} className="hidden sm:flex">
              Все семьи <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(f => <FamilyCard key={f.id} family={f} />)}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Button onClick={() => navigate('/catalog')}>
              Все семьи <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Что получает опекун
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { emoji: '📱', label: 'Личный кабинет' },
              { emoji: '📸', label: 'Фото и видео' },
              { emoji: '📊', label: 'Прогресс сезона' },
              { emoji: '📜', label: 'Цифровой сертификат' },
              { emoji: '🍯', label: 'Мёд от семьи*' },
              { emoji: '🎁', label: 'Бонусы и сувениры*' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-lg border border-border shadow-soft">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">* В зависимости от выбранного тарифа</p>
        </div>
      </section>

      {/* Gift block */}
      <section className="py-20 bg-cream-gradient">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img src={giftBox} alt="Подарочный формат BeeBro" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={600} />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
            <div className="relative z-10 p-10 md:p-16 max-w-lg">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Подарите не вещь,<br />а живую историю
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                BeeBro — это подарок с эмоцией. Оформите опеку на имя близкого, добавьте поздравление и подарите уникальный опыт.
              </p>
              <Button size="lg" onClick={() => navigate('/gift')}>
                🎁 Подарить BeeBro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Реальная пасека.<br />Реальные пчёлы.
              </h2>
              <p className="text-muted-foreground mb-6">
                BeeBro — это не абстракция. За проектом стоит семейная пасека в Минской области с многолетним опытом. Каждая семья реальная, каждый улей — настоящий. Мы просто дали вам возможность быть ближе к этому процессу.
              </p>
              <div className="flex flex-wrap gap-3">
                {['🌿 Натурально', '🗓 Сезонно', '🔒 Ограничено', '📱 Онлайн-доступ'].map(badge => (
                  <span key={badge} className="px-4 py-2 bg-honey-light text-honey-dark rounded-full text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={apiaryTrust} alt="Наша пасека" className="w-full h-80 object-cover" loading="lazy" width={1200} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-20 bg-cream-gradient">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: 'Это покупка мёда?', a: 'Нет. BeeBro — это опека над пчелиной семьёй. Вы наблюдаете за жизнью улья, получаете обновления и бонусы. Мёд может быть частью расширенного тарифа, но это не главное.' },
              { q: 'Можно ли наблюдать онлайн?', a: 'Да! В личном кабинете вы получаете фото, видео, обновления и сезонный прогресс. В расширенном тарифе доступна онлайн-трансляция с пасеки.' },
              { q: 'Что я получу после оплаты?', a: 'Доступ в личный кабинет, цифровой сертификат опекуна, регулярные обновления. В расширенном тарифе — видео, трансляция и баночка мёда.' },
              { q: 'Можно ли подарить?', a: 'Конечно! У нас есть специальный подарочный формат с красивым сертификатом, персональным поздравлением и возможностью отложенной активации.' },
              { q: 'Что если все семьи заняты?', a: 'Количество семей ограничено сезоном. Если все заняты, вы можете оставить заявку и мы уведомим вас первым, когда откроется новый сезон.' },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => navigate('/faq')}>
              Все вопросы <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Выберите свою<br /><span className="text-gradient-honey">пчелиную семью</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Количество семей ограничено. Начните свой уникальный сезон вместе с BeeBro уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/catalog')} className="px-8">
              Перейти в каталог
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/gift')} className="px-8">
              🎁 Подарить BeeBro
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
