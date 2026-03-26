import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { plans } from '@/data/families';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronRight } from 'lucide-react';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartFamily, cartPlan, setCartPlan, isGiftMode, setGiftMode, placeOrder, isLoggedIn, login, user } = useApp();
  const [step, setStep] = useState(1);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [promo, setPromo] = useState('');
  const [giftName, setGiftName] = useState('');
  const [giftMessage, setGiftMessage] = useState('');
  const [giftEmail, setGiftEmail] = useState('');
  const [orderId, setOrderId] = useState<string | null>(null);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  if (!cartFamily) {
    return (
      <div className="min-h-screen pt-24 pb-20 container text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Семья не выбрана</h1>
        <p className="text-muted-foreground mb-6">Сначала выберите семью для опеки</p>
        <Button onClick={() => navigate('/catalog')}>Перейти в каталог</Button>
      </div>
    );
  }

  const selectedPlan = plans.find(p => p.id === cartPlan) || plans[0];
  const totalPrice = cartFamily.price + selectedPlan.price;

  const handleSubmitOrder = () => {
    if (!isLoggedIn) {
      login(email, password);
    }
    const id = placeOrder({
      familyId: cartFamily.id,
      planId: selectedPlan.id,
      isGift: isGiftMode,
      giftRecipient: giftName || undefined,
      giftMessage: giftMessage || undefined,
    });
    setOrderId(id);
    setStep(5);
  };

  if (step === 5 && orderId) {
    return (
      <div className="min-h-screen pt-24 pb-20 container max-w-2xl text-center">
        <div className="bg-card rounded-2xl border border-border p-10 shadow-elevated">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="font-display text-3xl font-bold mb-3">Опека оформлена!</h1>
          <p className="text-muted-foreground mb-6">
            Заказ #{orderId.slice(-6)} • {cartFamily.name} • {selectedPlan.name}
          </p>
          <div className="bg-honey-light rounded-xl p-6 mb-6 text-left">
            <div className="text-sm text-muted-foreground mb-1">Дата старта</div>
            <div className="font-semibold">{new Date().toLocaleDateString('ru-RU')}</div>
            <div className="text-sm text-muted-foreground mt-3 mb-1">Семья</div>
            <div className="font-semibold">{cartFamily.name}</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={() => navigate('/dashboard')}>Перейти в кабинет</Button>
            <Button size="lg" variant="outline" onClick={() => {
                      const cert = document.createElement('a');
                      cert.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Сертификат BeeBro</title><style>body{font-family:Georgia,serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#fdf8f0;margin:0}div{text-align:center;border:3px solid #d4a843;padding:60px;max-width:500px;border-radius:16px;background:white}.title{font-size:28px;color:#8b6914;margin-bottom:10px}.name{font-size:22px;margin:20px 0;color:#333}.family{font-size:18px;color:#666}.date{font-size:14px;color:#999;margin-top:20px}</style></head><body><div><div class="title">🐝 Сертификат опекуна</div><div class="name">${name || 'Опекун BeeBro'}</div><div class="family">Семья: ${cartFamily.name}</div><div class="family">Тариф: ${selectedPlan.name}</div><div class="date">Дата: ${new Date().toLocaleDateString('ru-RU')}</div><div class="date">Заказ #${orderId?.slice(-6)}</div></div></body></html>`);
                      cert.download = `BeeBro-сертификат-${cartFamily.name}.html`;
                      cert.click();
                    }}>📜 Скачать сертификат</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Leave modal */}
      {showLeaveModal && (
        <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-8 max-w-md text-center shadow-elevated">
            <div className="text-4xl mb-4">🐝</div>
            <h3 className="font-display text-xl font-bold mb-2">Ваша семья ещё ждёт вас</h3>
            <p className="text-muted-foreground mb-6">{cartFamily.name} готова стать вашей. Вернётесь?</p>
            <div className="flex gap-3 justify-center">
              <Button onClick={() => setShowLeaveModal(false)}>Продолжить оформление</Button>
              <Button variant="outline" onClick={() => { setShowLeaveModal(false); navigate('/catalog'); }}>Вернуться позже</Button>
            </div>
          </div>
        </div>
      )}

      <div className="container max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <button onClick={() => setShowLeaveModal(true)} className="text-muted-foreground hover:text-foreground text-sm">← Назад</button>
        </div>

        {/* Progress steps */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto">
          {['Семья', 'Тариф', 'Контакты', 'Оплата'].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step > i + 1 ? 'bg-primary text-primary-foreground' : step === i + 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-sm whitespace-nowrap ${step === i + 1 ? 'font-semibold' : 'text-muted-foreground'}`}>{s}</span>
              {i < 3 && <div className="w-8 h-0.5 bg-muted" />}
            </div>
          ))}
        </div>

        {/* Step 1: Family */}
        {step === 1 && (
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Ваша семья</h2>
            <div className="flex gap-6 p-6 bg-card rounded-xl border border-border mb-6">
              <img src={cartFamily.image} alt={cartFamily.name} className="w-24 h-24 rounded-lg object-cover" />
              <div>
                <h3 className="font-display text-lg font-semibold">{cartFamily.name}</h3>
                <p className="text-sm text-muted-foreground">{cartFamily.description}</p>
                <p className="font-bold mt-2">от {cartFamily.price} BYN</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate('/catalog')} className="mb-6">Изменить семью</Button>
            <div className="flex justify-end">
              <Button size="lg" onClick={() => setStep(2)}>Далее <ChevronRight className="w-5 h-5 ml-1" /></Button>
            </div>
          </div>
        )}

        {/* Step 2: Plan */}
        {step === 2 && (
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Выберите тариф</h2>
            <div className="flex items-center gap-3 mb-6">
              <Button variant={!isGiftMode ? 'default' : 'outline'} size="sm" onClick={() => setGiftMode(false)}>Для себя</Button>
              <Button variant={isGiftMode ? 'default' : 'outline'} size="sm" onClick={() => setGiftMode(true)}>🎁 В подарок</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              {plans.filter(p => isGiftMode ? true : !p.isGift).map(plan => (
                <div
                  key={plan.id}
                  onClick={() => setCartPlan(plan.id)}
                  className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${cartPlan === plan.id || (!cartPlan && plan.id === 'basic') ? 'border-primary shadow-card' : 'border-border hover:border-primary/50'}`}
                >
                  {plan.popular && <Badge className="absolute -top-2 right-4 bg-primary text-primary-foreground">Популярный</Badge>}
                  <h3 className="font-display font-bold text-lg mb-1">{plan.name}</h3>
                  <p className="text-xl font-bold mb-4">{plan.price > 0 ? `+${plan.price} BYN` : 'Включено'}</p>
                  <ul className="space-y-2">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-sm flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>Назад</Button>
              <Button size="lg" onClick={() => setStep(3)}>Далее <ChevronRight className="w-5 h-5 ml-1" /></Button>
            </div>
          </div>
        )}

        {/* Step 3: Contacts */}
        {step === 3 && (
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Ваши данные</h2>
            <div className="space-y-4 max-w-md mb-6">
              <div><Label>Имя</Label><Input value={name} onChange={e => setName(e.target.value)} placeholder="Ваше имя" /></div>
              <div><Label>Email</Label><Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@example.com" /></div>
              <div><Label>Телефон</Label><Input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+375 29 ..." /></div>
              {!isLoggedIn && <div><Label>Пароль</Label><Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Придумайте пароль" /></div>}
              <div><Label>Промокод</Label><Input value={promo} onChange={e => setPromo(e.target.value)} placeholder="Если есть" /></div>

              {isGiftMode && (
                <>
                  <hr className="border-border" />
                  <h3 className="font-display font-semibold text-lg">Данные получателя</h3>
                  <div><Label>Имя получателя</Label><Input value={giftName} onChange={e => setGiftName(e.target.value)} placeholder="Кому дарите" /></div>
                  <div><Label>Поздравление</Label><Input value={giftMessage} onChange={e => setGiftMessage(e.target.value)} placeholder="Текст поздравления" /></div>
                  <div><Label>Email получателя (опционально)</Label><Input value={giftEmail} onChange={e => setGiftEmail(e.target.value)} placeholder="email получателя" /></div>
                </>
              )}

              <div className="flex items-center gap-2">
                <Checkbox checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
                <span className="text-sm text-muted-foreground">Согласен с <a href="/terms" className="underline">офертой</a> и <a href="/privacy" className="underline">политикой конфиденциальности</a></span>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>Назад</Button>
              <Button size="lg" onClick={() => setStep(4)} disabled={!name || !email || !agreed}>
                Далее <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && (
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Оплата</h2>
            <div className="bg-card rounded-xl border border-border p-6 mb-6">
              <div className="flex justify-between mb-2"><span className="text-muted-foreground">Семья</span><span className="font-semibold">{cartFamily.name}</span></div>
              <div className="flex justify-between mb-2"><span className="text-muted-foreground">Тариф</span><span className="font-semibold">{selectedPlan.name}</span></div>
              <div className="flex justify-between mb-2"><span className="text-muted-foreground">Базовая стоимость</span><span>{cartFamily.price} BYN</span></div>
              {selectedPlan.price > 0 && <div className="flex justify-between mb-2"><span className="text-muted-foreground">Доплата за тариф</span><span>+{selectedPlan.price} BYN</span></div>}
              <hr className="border-border my-3" />
              <div className="flex justify-between text-lg font-bold"><span>Итого</span><span>{totalPrice} BYN</span></div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Нажимая кнопку, вы подтверждаете оформление демо-заказа.</p>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(3)}>Назад</Button>
              <Button size="lg" onClick={handleSubmitOrder}>
                Оплатить {totalPrice} BYN
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
