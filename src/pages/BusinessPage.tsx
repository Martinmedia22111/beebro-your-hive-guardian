import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Gift, Leaf, Users } from 'lucide-react';

export default function BusinessPage() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">BeeBro для бизнеса</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подарите сотрудникам и партнёрам уникальный живой опыт. BeeBro — это корпоративный подарок, который запоминается.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            { icon: <Gift className="w-8 h-8" />, title: 'Подарок сотрудникам', desc: 'Уникальный подарок к праздникам, юбилеям или за достижения. Каждый получает свою пчелиную семью.' },
            { icon: <Users className="w-8 h-8" />, title: 'Подарок партнёрам', desc: 'Выделитесь среди стандартных подарков. BeeBro — это живой, запоминающийся жест.' },
            { icon: <Leaf className="w-8 h-8" />, title: 'Эко-инициатива', desc: 'Покажите заботу компании об экологии. Опека пчёл — реальный вклад в природу.' },
            { icon: <Briefcase className="w-8 h-8" />, title: 'Брендированный проект', desc: 'Оформим опеку в стиле вашего бренда: сертификаты, страница, упаковка.' },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-8 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-honey-light flex items-center justify-center text-honey-dark mb-4">{item.icon}</div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="bg-card rounded-2xl border border-border p-8 mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Оставить заявку</h2>
          {sent ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-display text-xl font-bold mb-2">Заявка отправлена!</h3>
              <p className="text-muted-foreground">Мы свяжемся с вами в течение рабочего дня.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 max-w-md">
              <div><Label>Компания</Label><Input required placeholder="Название компании" /></div>
              <div><Label>Контактное лицо</Label><Input required placeholder="Имя" /></div>
              <div><Label>Email</Label><Input type="email" required placeholder="email@company.com" /></div>
              <div><Label>Телефон</Label><Input placeholder="+375 ..." /></div>
              <div><Label>Комментарий</Label><Textarea placeholder="Расскажите о вашей задаче" rows={3} /></div>
              <Button type="submit">Отправить заявку</Button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
