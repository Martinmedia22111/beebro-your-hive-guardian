import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { families, plans } from '@/data/families';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useApp();

  if (!isLoggedIn || !user) {
    return (
      <div className="min-h-screen pt-24 pb-20 container text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Войдите в аккаунт</h1>
        <Button onClick={() => navigate('/login')}>Войти</Button>
      </div>
    );
  }

  const activeOrders = user.orders.filter(o => o.status === 'active');
  const primaryOrder = activeOrders[0];
  const primaryFamily = primaryOrder ? families.find(f => f.id === primaryOrder.familyId) : null;
  const primaryPlan = primaryOrder ? plans.find(p => p.id === primaryOrder.planId) : null;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container max-w-5xl">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Привет, {user.name}! 👋</h1>
          <p className="text-muted-foreground">Ваш личный кабинет опекуна BeeBro</p>
        </div>

        {primaryFamily ? (
          <div className="bg-card rounded-2xl border border-border p-6 mb-8 shadow-card">
            <div className="flex flex-col sm:flex-row gap-6">
              <img src={primaryFamily.image} alt={primaryFamily.name} className="w-full sm:w-40 h-40 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-display text-xl font-bold">{primaryFamily.name}</h2>
                  <span className="px-2 py-1 bg-success/20 text-success rounded text-xs font-semibold">Активна</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{primaryFamily.description}</p>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Прогресс сезона</span>
                    <span className="font-semibold">{primaryFamily.progress}%</span>
                  </div>
                  <Progress value={primaryFamily.progress} className="h-2" />
                </div>
                <div className="text-sm text-muted-foreground">
                  Тариф: <span className="font-medium text-foreground">{primaryPlan?.name}</span> • Оформлено: {primaryOrder.date}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border p-10 text-center mb-8">
            <p className="text-muted-foreground mb-4">У вас ещё нет семьи под опекой</p>
            <Button onClick={() => navigate('/catalog')}>Выбрать семью</Button>
          </div>
        )}

        <Tabs defaultValue="family" className="mb-8">
          <TabsList className="flex-wrap h-auto">
            <TabsTrigger value="family">Моя семья</TabsTrigger>
            <TabsTrigger value="progress">Прогресс</TabsTrigger>
            <TabsTrigger value="media">Фото и видео</TabsTrigger>
            <TabsTrigger value="bonuses">Бонусы</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
          </TabsList>

          <TabsContent value="family" className="mt-6">
            {primaryFamily && (
              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display text-lg font-bold mb-3">О семье</h3>
                  <p className="text-muted-foreground mb-4">{primaryFamily.story}</p>
                  <div className="flex flex-wrap gap-2">
                    {primaryFamily.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-honey-light text-honey-dark rounded-full text-sm">{f}</span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" onClick={() => navigate(`/family/${primaryFamily.id}`)}>Открыть страницу семьи</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="progress" className="mt-6">
            {primaryFamily && (
              <div className="space-y-4">
                {primaryFamily.updates.map((u, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="text-2xl">{u.type === 'milestone' ? '🏆' : '📸'}</div>
                    <div>
                      <div className="font-semibold">{u.title}</div>
                      <p className="text-sm text-muted-foreground">{u.description}</p>
                      <span className="text-xs text-muted-foreground">{u.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="media" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {primaryFamily && (
                <>
                  <img src={primaryFamily.image} alt="Фото" className="rounded-lg aspect-square object-cover" />
                  <div className="rounded-lg aspect-square bg-muted flex items-center justify-center text-muted-foreground text-sm">Скоро новые фото</div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="bonuses" className="mt-6">
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl">📜</div>
                <div className="flex-1">
                  <div className="font-semibold">Цифровой сертификат</div>
                  <p className="text-sm text-muted-foreground">Ваш именной сертификат опекуна</p>
                </div>
                 <Button variant="outline" size="sm" onClick={() => {
                    const cert = document.createElement('a');
                    cert.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Сертификат BeeBro</title><style>body{font-family:Georgia,serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#fdf8f0;margin:0}div{text-align:center;border:3px solid #d4a843;padding:60px;max-width:500px;border-radius:16px;background:white}.title{font-size:28px;color:#8b6914;margin-bottom:10px}.name{font-size:22px;margin:20px 0;color:#333}.family{font-size:18px;color:#666}.date{font-size:14px;color:#999;margin-top:20px}</style></head><body><div><div class="title">🐝 Сертификат опекуна</div><div class="name">${user.name}</div><div class="family">Семья: ${primaryFamily?.name}</div><div class="family">Тариф: ${primaryPlan?.name}</div><div class="date">Дата: ${primaryOrder?.date}</div></div></body></html>`);
                    cert.download = `BeeBro-сертификат.html`;
                    cert.click();
                  }}>Скачать</Button>
              </div>
              <div className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl">🍯</div>
                <div className="flex-1">
                  <div className="font-semibold">Баночка мёда</div>
                  <p className="text-sm text-muted-foreground">Будет доступна после завершения сезона</p>
                </div>
                <span className="text-xs text-muted-foreground self-center">Ожидается</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <div className="space-y-4">
              {user.orders.map(order => {
                const fam = families.find(f => f.id === order.familyId);
                return (
                  <div key={order.id} className="flex gap-4 p-4 bg-card rounded-lg border border-border items-center">
                    {fam && <img src={fam.image} alt={fam.name} className="w-16 h-16 rounded-lg object-cover" />}
                    <div className="flex-1">
                      <div className="font-semibold">{fam?.name}</div>
                      <p className="text-sm text-muted-foreground">Заказ #{order.id.slice(-6)} • {order.date}</p>
                    </div>
                    <span className="px-2 py-1 bg-success/20 text-success rounded text-xs font-semibold">{order.status}</span>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <div className="bg-card rounded-xl border border-border p-6 max-w-md">
              <div className="space-y-4">
                <div><div className="text-sm text-muted-foreground">Имя</div><div className="font-semibold">{user.name}</div></div>
                <div><div className="text-sm text-muted-foreground">Email</div><div className="font-semibold">{user.email}</div></div>
                <div><div className="text-sm text-muted-foreground">Телефон</div><div className="font-semibold">{user.phone}</div></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex flex-wrap gap-3">
          <Button onClick={() => navigate('/gift')}>🎁 Подарить BeeBro</Button>
          <Button variant="outline" onClick={() => navigate('/catalog')}>Взять ещё одну семью</Button>
        </div>
      </div>
    </div>
  );
}
