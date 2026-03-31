import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/context/AppContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronRight, Play, Eye, Flower2, Sun, TreePine, Check, Video, Camera, Bell, Users, Crown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import apiaryTrust from '@/assets/apiary-trust.jpg';
import giftBox from '@/assets/gift-box.jpg';
import family1 from '@/assets/family-1.jpg';
import family2 from '@/assets/family-2.jpg';

export default function HomePage() {
  const navigate = useNavigate();
  const { families } = useApp();
  const featured = families.filter(f => f.status === 'available').slice(0, 3);

  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════
          HERO — Эмоциональный хук
          Задача: вызвать ощущение «Я могу иметь свою пчелиную семью»
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Пасека BeeBro" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        <div className="relative z-10 container py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-8 animate-fade-in-up border border-primary-foreground/15">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
              Сезон 2025 открыт · май — сентябрь
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-[1.1]">
              У вас будет своя
              <br />
              <span className="text-gradient-honey">пчелиная семья.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-xl leading-relaxed">
              Выберите настоящий улей на пасеке. Наблюдайте за жизнью пчёл через онлайн-камеры. Участвуйте в жизни пасеки. Получите мёд, произведённый вашей семьёй.
            </p>

            <p className="text-primary-foreground/55 text-sm mb-8 max-w-lg">
              Это не покупка мёда. Это уникальный опыт владения пчелиной семьёй — от $79 за сезон.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" onClick={() => navigate('/catalog')} className="text-base px-8 h-13">
                Выбрать свой улей <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-base px-8 h-13 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Play className="w-4 h-4 mr-1" /> Как это работает
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success" /> Реальная пасека</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success" /> Онлайн-камеры</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success" /> Мёд от ваших пчёл</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SOCIAL PROOF BAR — Быстрое доверие
      ═══════════════════════════════════════════════════ */}
      <section className="py-6 border-b border-border bg-card">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-center">
            {[
              { value: '8 лет', label: 'работы пасеки' },
              { value: '40+', label: 'ульев' },
              { value: '200+', label: 'опекунов' },
              { value: '4.9 ★', label: 'средняя оценка' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STORYTELLING — Эмоциональное вовлечение
          Задача: не продавать, а рассказать историю
      ═══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Представьте, что у вас есть
              <br />
              <span className="text-gradient-honey">свой улей.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Не на картинке. Настоящий. В котором прямо сейчас тысячи пчёл строят соты,
              выращивают потомство и собирают нектар. Вы наблюдаете за ними через камеру.
              Получаете обновления. А в конце сезона — мёд, который произвела именно ваша семья.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={family1} alt="Пчёлы за работой" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground font-display text-lg font-semibold">Работа пчёл крупным планом</p>
                <p className="text-primary-foreground/70 text-sm">Из онлайн-трансляции, июнь 2024</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={family2} alt="Улей на пасеке" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground font-display text-lg font-semibold">Ваш улей на рассвете</p>
                <p className="text-primary-foreground/70 text-sm">Пасека, Минская область</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ПОЧЕМУ ЭТО КРУТО — Ценность продукта
          4 эмоциональных преимущества
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-cream-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Это не покупка. Это опыт.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              BeeBro — это связь с природой, которую невозможно получить в магазине.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <TreePine className="w-7 h-7" />,
                title: 'Связь с природой',
                desc: 'Вы становитесь частью реального процесса. Не наблюдателем, а участником жизни пасеки.',
              },
              {
                icon: <Video className="w-7 h-7" />,
                title: 'Онлайн-камеры',
                desc: 'Смотрите на своих пчёл в прямом эфире. Видите, как они работают, строят соты, выращивают потомство.',
              },
              {
                icon: <Sun className="w-7 h-7" />,
                title: 'Уникальный опыт',
                desc: 'Каждый сезон неповторим. Природа, погода, цветение — всё влияет на жизнь вашей семьи.',
              },
              {
                icon: <Flower2 className="w-7 h-7" />,
                title: 'Ваш мёд',
                desc: 'В конце сезона вы получите мёд, произведённый вашей пчелиной семьёй. Настоящий, с вашей пасеки.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-honey-light flex items-center justify-center text-honey-dark mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          КАК ЭТО РАБОТАЕТ — 4 шага
      ═══════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Как это работает
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              От выбора улья до баночки мёда — весь путь занимает один сезон.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Выберите улей',
                desc: 'Изучите реальные семьи на пасеке. У каждой — характер, история, фотографии.',
                icon: '🐝',
              },
              {
                step: '02',
                title: 'Наблюдайте за жизнью пчёл',
                desc: 'Онлайн-камеры, фото и видеоотчёты. Следите за развитием семьи весь сезон.',
                icon: '📹',
              },
              {
                step: '03',
                title: 'Участвуйте в жизни пасеки',
                desc: 'Получайте обновления, узнавайте об этапах сезона, задавайте вопросы пасечнику.',
                icon: '🌻',
              },
              {
                step: '04',
                title: 'Получите ваш мёд',
                desc: 'В конце сезона — мёд, произведённый вашей пчелиной семьёй. С доставкой.',
                icon: '🍯',
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                )}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-xs font-bold text-primary tracking-widest uppercase mb-2">Шаг {item.step}</div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate('/catalog')} className="px-8">
              Выбрать улей <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ЖИЗНЬ ПАСЕКИ — Что вы увидите
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-cream-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Что вы увидите за сезон
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Пять месяцев наблюдений. Каждый этап — новая глава истории вашей семьи.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Camera className="w-5 h-5" />,
                month: 'Май',
                title: 'Пробуждение',
                desc: 'Первый облёт после зимы. Пчёлы начинают разведку, матка откладывает яйца.',
              },
              {
                icon: <Flower2 className="w-5 h-5" />,
                month: 'Июнь — Июль',
                title: 'Расцвет',
                desc: 'Активный медосбор. Семья растёт, строит соты, запасает нектар.',
              },
              {
                icon: <Sun className="w-5 h-5" />,
                month: 'Август',
                title: 'Медосбор',
                desc: 'Кульминация сезона. Пасечник качает мёд. Вы видите результат.',
              },
              {
                icon: <Bell className="w-5 h-5" />,
                month: 'Сентябрь',
                title: 'Итоги',
                desc: 'Сезон завершён. Вы получаете мёд, произведённый вашей семьёй.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="flex items-center gap-2 text-primary mb-3">
                  {item.icon}
                  <span className="text-xs font-bold tracking-widest uppercase">{item.month}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ДОСТУПНЫЕ СЕМЬИ — Демонстрация продукта
      ═══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Выберите свою семью
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Каждая семья — реальная. С характером, историей и фотографиями с пасеки.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featured.map(f => <FamilyCard key={f.id} family={f} />)}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" onClick={() => navigate('/catalog')} className="px-8">
              Все семьи в каталоге <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ТАРИФЫ — Два тарифа, продающее оформление
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-cream-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Два способа начать
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Никаких скрытых платежей. Одна цена — весь сезон.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Доля улья */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-soft flex flex-col">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold mb-1">Доля улья</h3>
                <p className="text-sm text-muted-foreground">Станьте совладельцем пчелиной семьи</p>
              </div>
              <div className="mb-6">
                <span className="font-display text-5xl font-bold text-foreground">$79</span>
                <span className="text-muted-foreground ml-2">/ сезон</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Участие в жизни улья',
                  'Доступ к онлайн-камерам',
                  'Новости и обновления пасеки',
                  'Мёд, произведённый вашей семьёй',
                  'Сертификат опекуна',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="outline" onClick={() => navigate('/catalog')} className="w-full">
                Выбрать семью
              </Button>
            </div>

            {/* Целый улей */}
            <div className="relative bg-card rounded-2xl border-2 border-primary p-8 shadow-elevated flex flex-col">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                  Самый популярный
                </span>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold mb-1">Целый улей</h3>
                <p className="text-sm text-muted-foreground">Ваш собственный улей на весь сезон</p>
              </div>
              <div className="mb-6">
                <span className="font-display text-5xl font-bold text-foreground">$349</span>
                <span className="text-muted-foreground ml-2">/ сезон</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Целый улей — только ваш',
                  'Весь мёд, произведённый семьёй',
                  'Доступ к онлайн-камерам',
                  'Участие в жизни пасеки',
                  'Сертификат владельца улья',
                  'Приоритетная поддержка',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" onClick={() => navigate('/catalog')} className="w-full">
                Выбрать улей <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6 max-w-lg mx-auto">
            Мы не обещаем конкретное количество мёда — урожай зависит от природы.
            Вы получите мёд, произведённый вашей пчелиной семьёй.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ПОДАРОК — Gift section
      ═══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated max-w-5xl mx-auto">
            <img src={giftBox} alt="Подарочный формат BeeBro" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={600} />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/40" />
            <div className="relative z-10 p-10 md:p-16 max-w-lg">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                Подарите не вещь.
                <br />
                Подарите живую историю.
              </h2>
              <p className="text-primary-foreground/75 mb-6 leading-relaxed">
                BeeBro — это подарок с эмоцией. Оформите улей на имя близкого человека,
                добавьте поздравление и подарите целый сезон наблюдений за настоящей пчелиной семьёй.
              </p>
              <Button size="lg" onClick={() => navigate('/gift')} className="px-8">
                🎁 Подарить BeeBro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ДОВЕРИЕ — Trust block
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-cream-gradient">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Это реальная пасека.
                <br />
                Реальные пчёлы. Реальный мёд.
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                За BeeBro стоит семейная пасека Козловских в Минской области.
                8 лет опыта, 40+ ульев. Мы не перекупаем мёд — мы выращиваем пчёл
                и ухаживаем за ними сами.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Каждая семья в каталоге — реальна. Фотографии снимаются на пасеке.
                Обновления публикуются пасечником лично. Приезжайте — покажем ваш улей.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users className="w-5 h-5" />, text: 'Семейная пасека' },
                  { icon: <Eye className="w-5 h-5" />, text: 'Полная прозрачность' },
                  { icon: <Camera className="w-5 h-5" />, text: 'Реальные фото' },
                  { icon: <Video className="w-5 h-5" />, text: 'Онлайн-камеры' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                    <span className="text-primary">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={apiaryTrust} alt="Пасека BeeBro" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ — Ответы на возражения
      ═══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground">
              Если не нашли ответ — напишите нам, мы ответим лично.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: 'Что если мёда будет мало?',
                a: 'Урожай зависит от природы — погоды, цветения, состояния семьи. Мы не обещаем конкретное количество. Вы получите мёд, произведённый вашей пчелиной семьёй — столько, сколько она произведёт за сезон.',
              },
              {
                q: 'Можно ли подарить улей?',
                a: 'Конечно. У нас есть подарочный формат с красивым сертификатом, персональным поздравлением и возможностью отложенной активации. Это один из самых популярных форматов.',
              },
              {
                q: 'Когда я получу мёд?',
                a: 'Сезон длится с мая по сентябрь. Мёд отправляется после завершения сезона — обычно в сентябре-октябре. Мы сообщим точную дату заранее.',
              },
              {
                q: 'Где находится пасека?',
                a: 'Пасека расположена в Минской области, Беларусь. Это семейная пасека Козловских — 8 лет опыта, 40+ ульев. Вы можете приехать и увидеть свой улей лично.',
              },
              {
                q: 'Это покупка мёда?',
                a: 'Нет. BeeBro — это опека над реальной пчелиной семьёй. Вы наблюдаете за ней весь сезон через онлайн-камеры, получаете обновления. Мёд — важная часть опыта, но главное — это связь с природой и участие.',
              },
              {
                q: 'А это реальные пчёлы?',
                a: 'Да. Вы можете наблюдать за ними через онлайн-камеры в реальном времени. Все фото и видео снимаются на пасеке. Приезжайте — покажем ваш улей лично.',
              },
              {
                q: 'Что если все семьи заняты?',
                a: 'Количество семей ограничено сезоном. Если все заняты — оставьте заявку, и мы уведомим вас первыми, когда откроется новый сезон.',
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ФИНАЛЬНЫЙ CTA — Мощный призыв к действию
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-cream-gradient">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ваша пчелиная семья
            <br />
            <span className="text-gradient-honey">ждёт вас.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4">
            Сезон 2025 уже открыт. Количество семей ограничено.
            Начните свой уникальный опыт с BeeBro.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            От $79 за сезон · Май — Сентябрь · Онлайн-камеры · Мёд от ваших пчёл
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/catalog')} className="text-base px-10 h-13">
              Выбрать свой улей <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/gift')} className="text-base px-8 h-13">
              🎁 Подарить BeeBro
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
