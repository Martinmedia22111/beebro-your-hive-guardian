import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
          ВЫБЕРИТЕ ФОРМАТ — Два тарифа превью
      ═══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Выберите свой формат участия
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Два способа стать частью пасеки — разделите опеку с другими или закрепите за собой целый улей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
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
                  <Badge className="ml-auto bg-amber-500 text-white border-0">от 5 мест</Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Станьте совладельцем пчелиной семьи вместе с другими участниками. Наблюдайте, участвуйте и получите мёд.
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {['Опека над пчелиной семьёй', 'Доступ к онлайн-трансляциям', 'Мёд от вашей семьи', 'Сертификат опекуна'].map((f, i) => (
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
                  <Button onClick={() => navigate('/catalog')} className="bg-amber-500 hover:bg-amber-600 border-accent">
                    Выбрать семью <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Целый улей */}
            <div className="relative bg-card rounded-2xl border-2 border-emerald-500 overflow-hidden shadow-elevated flex flex-col">
              <div className="absolute -top-0 left-0 right-0">
                <div className="bg-emerald-600 text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                  Самый популярный
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
                  <Badge className="ml-auto bg-emerald-600 text-white border-0">1 место</Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Закрепите за собой целый улей. Вы — единственный владелец. Весь мёд — ваш.
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {['Весь улей закреплён за вами', 'Доступ к онлайн-наблюдению', 'Весь мёд от вашего улья', 'Сертификат владельца'].map((f, i) => (
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
                  <Button onClick={() => navigate('/catalog')} className="bg-emerald-600 hover:bg-emerald-700">
                    Выбрать улей <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => navigate('/catalog')} className="px-8">
              Смотреть каталог <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
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
