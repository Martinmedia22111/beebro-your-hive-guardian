import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroProps {
  variant: 1 | 2 | 3;
}

function HeroVariantA() {
  const navigate = useNavigate();
  return (
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
  );
}

function HeroVariantB() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Пасека BeeBro" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
      <div className="relative z-10 container py-20">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-in-up border border-primary-foreground/20">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
            Осталось 4 семьи в этом сезоне
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Своя пчелиная семья. Свой сезон. Свой мёд.
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-4 max-w-lg">
            Выберите реальную семью на пасеке в Минской области. Наблюдайте за ней онлайн, получайте фото, видео и баночку мёда в конце сезона.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-8 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-1">✅ Реальная пасека</span>
            <span className="flex items-center gap-1">✅ Личный кабинет</span>
            <span className="flex items-center gap-1">✅ Мёд и сертификат</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => navigate('/catalog')} className="text-base px-8">
              Выбрать семью — от 79 BYN
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/how-it-works')} className="text-base px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Play className="w-4 h-4 mr-1" /> Как это работает
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVariantC() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Пасека BeeBro" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      <div className="relative z-10 container text-center text-primary-foreground py-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 animate-fade-in-up border border-primary/30">
          🐝 Сезон 2025 открыт — мест ограничено
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
          Не покупайте мёд.<br />
          <span className="text-gradient-honey">Возьмите пчёл под опеку.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 opacity-90">
          Это не магазин. Вы выбираете реальную пчелиную семью, следите за ней весь сезон и получаете мёд, который собрали именно ваши пчёлы.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-primary-foreground/80">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary-foreground">6</span>
            <span>семей на сезон</span>
          </div>
          <div className="w-px h-12 bg-primary-foreground/20" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary-foreground">5 мес</span>
            <span>наблюдений</span>
          </div>
          <div className="w-px h-12 bg-primary-foreground/20" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary-foreground">0.5 л</span>
            <span>мёда в конце</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/catalog')} className="text-base px-8">
            Выбрать свою семью <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/gift')} className="text-base px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
            🎁 Подарить BeeBro
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function HeroBlock({ variant }: HeroProps) {
  switch (variant) {
    case 1: return <HeroVariantA />;
    case 2: return <HeroVariantB />;
    case 3: return <HeroVariantC />;
  }
}
