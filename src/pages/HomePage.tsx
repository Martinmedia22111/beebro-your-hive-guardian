import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useApp, TELEGRAM_BOT_URL } from '@/context/AppContext';
import FamilyCard from '@/components/FamilyCard';
import HeroBlock from '@/components/home/HeroVariants';
import { Eye, Heart, Gift, Shield, Leaf, Star, ChevronRight } from 'lucide-react';
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
      <HeroBlock variant={2} />

      {/* How it works - 3 steps */}
      <section className="py-20 bg-cream-gradient">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: '🐝', title: 'Выберите семью', desc: 'В каталоге — реальные семьи с пасеки в Минской области. У каждой свой характер, история и фото.' },
              { icon: '📋', title: 'Оформите опеку', desc: 'Напишите нам в Telegram, выберите тариф (от 79 BYN) — и семья закрепляется за вами на весь сезон.' },
              { icon: '📱', title: 'Наблюдайте и получайте бонусы', desc: 'Фото, видео, сезонный прогресс, именной сертификат и мёд от вашей семьи.' },
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
              { icon: <Heart className="w-6 h-6" />, title: 'Это не покупка — это опыт', desc: 'Вы не просто платите деньги. Вы получаете свою семью, наблюдаете за ней весь сезон и чувствуете причастность к живому процессу.' },
              { icon: <Eye className="w-6 h-6" />, title: 'Всё прозрачно', desc: 'Фото, видео и обновления прямо в Telegram. Вы видите, что происходит с вашими пчёлами — каждые 1–2 недели.' },
              { icon: <Gift className="w-6 h-6" />, title: 'Идеальный подарок', desc: 'Подарите не вещь, а живую историю. Красивый сертификат, поздравление и уникальный сезон наблюдений.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Продумано до мелочей', desc: 'Сертификат, прогресс сезона, уведомления в Telegram — всё работает без лишних усилий с вашей стороны.' },
              { icon: <Leaf className="w-6 h-6" />, title: 'Реальная польза', desc: 'Вы поддерживаете семейную пасеку и помогаете пчёлам. Это не маркетинг — это реальная экологическая инициатива.' },
              { icon: <Star className="w-6 h-6" />, title: 'Мест мало', desc: 'В сезоне участвует ограниченное число семей. Когда все заняты — новых не будет до следующего года.' },
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Что получает опекун
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Всё это входит в стоимость. Никаких скрытых платежей.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { emoji: '📱', label: 'Telegram-канал', sub: 'Обновления онлайн' },
              { emoji: '📸', label: 'Фото и видео', sub: 'Каждые 1–2 недели' },
              { emoji: '📊', label: 'Прогресс сезона', sub: 'В реальном времени' },
              { emoji: '📜', label: 'Цифровой сертификат', sub: 'Именной, с печатью' },
              { emoji: '🍯', label: 'Мёд от вашей семьи*', sub: '0.5 л с доставкой' },
              { emoji: '🎁', label: 'Бонусы и сувениры*', sub: 'По итогам сезона' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-lg border border-border shadow-soft">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <span className="text-sm font-medium block">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.sub}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">* В расширенном и подарочном тарифах</p>
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
                BeeBro — это подарок с эмоцией. Оформите опеку на имя близкого, добавьте поздравление и подарите уникальный сезон наблюдений за настоящими пчёлами.
              </p>
              <Button size="lg" onClick={() => navigate('/gift')}>
                🎁 Подарить BeeBro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust — objection-handling */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Это реально.<br />Пасека. Пчёлы. Мёд.
              </h2>
              <p className="text-muted-foreground mb-4">
                За BeeBro стоит семейная пасека Козловских в Минской области. Пасеке 8 лет, 40+ ульев, карпатская и среднерусская породы. Мы не перекупаем мёд — мы выращиваем пчёл и ухаживаем за ними сами.
              </p>
              <p className="text-muted-foreground mb-6">
                Каждая семья, которую вы видите в каталоге — реальна. Фото и видео снимаются на пасеке, обновления публикуются пасечником лично. Мы даём вам доступ к процессу, который обычно скрыт.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { q: '«А вдруг это обман?»', a: 'Мы показываем реальные фото пасеки, координаты и контакты. Приезжайте — покажем вашу семью лично.' },
                  { q: '«Что я реально получу?»', a: 'Фото/видео обновления каждые 1–2 недели в Telegram, именной сертификат, и мёд в расширенном тарифе.' },
                  { q: '«Почему так дорого / дёшево?»', a: 'Цена покрывает обслуживание семьи, контент, обновления и логистику. Это не покупка мёда — это сезонный опыт.' },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-lg border border-border p-4">
                    <div className="text-sm font-semibold text-foreground mb-1">{item.q}</div>
                    <div className="text-sm text-muted-foreground">{item.a}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {['🌿 Натурально', '🗓 Сезон 2025', '🔒 Осталось 4 места', '📱 Telegram-обновления', '💸 Возврат 14 дней'].map(badge => (
                  <span key={badge} className="px-4 py-2 bg-honey-light text-honey-dark rounded-full text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={apiaryTrust} alt="Пасека BeeBro в Минской области" className="w-full h-80 object-cover" loading="lazy" width={1200} height={600} />
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
              { q: 'Это покупка мёда?', a: 'Нет. BeeBro — это опека над реальной пчелиной семьёй на пасеке. Вы наблюдаете за ней весь сезон, получаете обновления и бонусы. Мёд — часть расширенного тарифа, но главное — это живой цифровой опыт.' },
              { q: 'Что именно я получу после оплаты?', a: 'Именной сертификат опекуна и первое обновление по вашей семье. Далее — фото, видео и обновления каждые 1–2 недели прямо в Telegram.' },
              { q: 'А это реальные пчёлы?', a: 'Да. Пасека находится в Минской области. 40+ ульев, 8 лет опыта. Вы можете приехать и увидеть свою семью лично — мы это приветствуем.' },
              { q: 'Можно ли подарить?', a: 'Конечно! У нас есть подарочный формат с красивым сертификатом, персональным поздравлением и возможностью отложенной активации.' },
              { q: 'Что если все семьи заняты?', a: 'Количество семей ограничено сезоном. Если все заняты, оставьте заявку — мы уведомим вас первым, когда откроется новый сезон.' },
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
            В этом сезоне доступно всего 6 семей. Начните свой уникальный опыт вместе с BeeBro.
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
