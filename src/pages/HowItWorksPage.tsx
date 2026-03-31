import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function HowItWorksPage() {
  const navigate = useNavigate();
  const steps = [
    { emoji: '🔍', title: 'Выбираете семью', desc: 'Изучите каталог, узнайте характер и историю каждой пчелиной семьи. У каждой — своя уникальность.' },
    { emoji: '📋', title: 'Оформляете опеку', desc: 'Выберите подходящий тариф, заполните контакты и оплатите. Это быстро и безопасно.' },
    { emoji: '🔑', title: 'Получаете доступ', desc: 'Сразу после оплаты вы получаете доступ в личный кабинет с вашей семьёй.' },
    { emoji: '📱', title: 'Следите за сезоном', desc: 'Фото, видео, обновления, сезонный прогресс — наблюдайте за жизнью улья в реальном времени.' },
    { emoji: '🎁', title: 'Получаете бонусы', desc: 'Цифровой сертификат, мёд, сувениры — в зависимости от тарифа.' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Как работает BeeBro</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Цифровая опека над пчелиной семьёй — это просто. Пять шагов от выбора до наблюдения.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start p-6 bg-card rounded-xl border border-border shadow-soft">
              <div className="w-16 h-16 rounded-xl bg-honey-light flex items-center justify-center text-3xl shrink-0">
                {step.emoji}
              </div>
              <div>
                <div className="text-xs font-bold text-primary mb-1">Шаг {i + 1}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-16 bg-card rounded-2xl border border-border p-8">
          <h2 className="font-display text-2xl font-bold mb-6">Два формата участия</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              '🐝 «Доля улья» — $79 за сезон',
              '👥 Совместная опека с другими',
              '📹 Доступ к онлайн-трансляциям',
              '🍯 Мёд от вашей семьи',
              '🏠 «Целый улей» — $349 за сезон',
              '👤 Вы — единственный владелец',
              '📜 Сертификат владельца',
              '🍯 Весь мёд от вашего улья',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-honey-light/50 rounded-lg">
                <span className="text-lg">{item.split(' ')[0]}</span>
                <span className="text-sm">{item.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-card rounded-2xl border border-border p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Чем BeeBro отличается от покупки мёда?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-muted-foreground">Обычная покупка мёда</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Купил банку — забыл</li>
                <li>• Нет вовлечения</li>
                <li>• Непонятно откуда мёд</li>
                <li>• Нет истории</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">BeeBro</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Своя пчелиная семья на весь сезон</li>
                <li>✅ Наблюдение, обновления, эмоции</li>
                <li>✅ Конкретная пасека и реальные пчёлы</li>
                <li>✅ Уникальный живой опыт</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/catalog')}>
            Выбрать семью <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
