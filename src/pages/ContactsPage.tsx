import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactsPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl font-bold text-center mb-4">Контакты</h1>
        <p className="text-muted-foreground text-center mb-12">Свяжитесь с нами — ответим быстро</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-xl font-bold mb-4">Написать нам</h2>
            {sent ? (
              <div className="bg-honey-light rounded-xl p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-display text-xl font-bold mb-2">Спасибо!</h3>
                <p className="text-muted-foreground">Мы получили ваше сообщение и свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><Label>Имя</Label><Input required placeholder="Ваше имя" /></div>
                <div><Label>Email</Label><Input type="email" required placeholder="email@example.com" /></div>
                <div><Label>Телефон</Label><Input placeholder="+375 29 ..." /></div>
                <div><Label>Сообщение</Label><Textarea required placeholder="Чем можем помочь?" rows={4} /></div>
                <Button type="submit" className="w-full">Отправить</Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold mb-2">📞 Телефон</h3>
              <p className="text-muted-foreground">+375 29 123-45-67</p>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-2">✉️ Email</h3>
              <p className="text-muted-foreground">hello@beebro.by</p>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-2">💬 Мессенджеры</h3>
              <p className="text-muted-foreground">Telegram: @beebro_by</p>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-2">📍 Адрес</h3>
              <p className="text-muted-foreground">Минская область, Беларусь<br />Пасека BeeBro</p>
            </div>
            <div className="bg-muted rounded-xl h-48 flex items-center justify-center text-muted-foreground text-sm">
              🗺 Карта (скоро)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
