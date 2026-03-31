import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Users, Crown } from 'lucide-react';

import beeShare1 from '@/assets/bee-share-1.jpg';
import beeShare2 from '@/assets/bee-share-2.jpg';
import beeShare3 from '@/assets/bee-share-3.jpg';
import hiveFull1 from '@/assets/hive-full-1.jpg';
import hiveFull2 from '@/assets/hive-full-2.jpg';
import hiveFull3 from '@/assets/hive-full-3.jpg';

const shareFeatures = [
  'Опека над пчелиной семьёй',
  'Доступ к онлайн-трансляциям пасеки',
  'Участие в жизни улья',
  'Новости и обновления о семье',
  'Мёд, произведённый этой семьёй',
  'Сертификат опекуна',
];

const fullFeatures = [
  'Весь улей закрепляется за вами',
  'Доступ к онлайн-наблюдению',
  'Участие в жизни пчелиной семьи',
  'Новости пасеки',
  'Весь мёд, который произведёт этот улей',
  'Сертификат владельца улья',
];

interface OfferCard {
  id: string;
  name: string;
  image: string;
  description: string;
  spots: number;
}

const shareOffers: OfferCard[] = [
  { id: 'share-1', name: 'Семья «Золотая»', image: beeShare1, description: 'Трудолюбивая семья с отличным медосбором. Карпатская порода, молодая матка 2024 года.', spots: 3 },
  { id: 'share-2', name: 'Семья «Луговая»', image: beeShare2, description: 'Спокойная и дружелюбная семья на цветочном лугу. Идеальный выбор для первого опыта.', spots: 5 },
  { id: 'share-3', name: 'Семья «Лавандовая»', image: beeShare3, description: 'Улей у лавандового поля. Мёд с нежным цветочным ароматом и особым характером.', spots: 2 },
];

const fullOffers: OfferCard[] = [
  { id: 'full-1', name: 'Улей «Дубовый»', image: hiveFull1, description: 'Крепкий деревянный улей в тени дубовой рощи. Сильная семья-рекордсмен прошлого сезона.', spots: 1 },
  { id: 'full-2', name: 'Улей «Радужный»', image: hiveFull2, description: 'Яркий улей на солнечной поляне. Энергичная семья с высоким темпом развития.', spots: 1 },
  { id: 'full-3', name: 'Улей «Цветочный»', image: hiveFull3, description: 'Уютный улей среди полевых цветов. Мёд с богатым многоцветным вкусом.', spots: 1 },
];

function OfferCardComponent({ offer, price, tierLabel, tierIcon: TierIcon, accentClass }: {
  offer: OfferCard;
  price: number;
  tierLabel: string;
  tierIcon: typeof Users;
  accentClass: string;
}) {
  const navigate = useNavigate();

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={offer.image}
          alt={offer.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={800}
          height={600}
        />
        <Badge className={`absolute top-3 right-3 ${accentClass} text-white font-medium`}>
          <TierIcon className="w-3.5 h-3.5 mr-1" />
          {tierLabel}
        </Badge>
        {offer.spots <= 2 && (
          <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
            Осталось мест: {offer.spots}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold mb-1">{offer.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{offer.description}</p>

        <div className="flex items-end justify-between mt-auto">
          <div>
            <span className="font-display text-2xl font-bold text-foreground">{price}$</span>
            <span className="text-sm text-muted-foreground ml-1">/ сезон</span>
          </div>
          <Button size="sm" asChild>
            <a href="https://t.me/BeeBro2026_bot" target="_blank" rel="noopener noreferrer">Опекать</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">Выберите свой формат участия</h1>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Два способа стать частью пасеки — разделите опеку с другими или закрепите за собой целый улей
        </p>

        {/* Доля улья */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">Доля улья</h2>
              <p className="text-sm text-muted-foreground">Совместная опека · 79$ за сезон</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Станьте совладельцем пчелиной семьи вместе с другими участниками. Наблюдайте, участвуйте и получите мёд, произведённый вашей семьёй.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {shareOffers.map(offer => (
              <OfferCardComponent
                key={offer.id}
                offer={offer}
                price={79}
                tierLabel="Доля улья"
                tierIcon={Users}
                accentClass="bg-amber-500"
              />
            ))}
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
            <h4 className="font-semibold mb-3 text-foreground">Что входит в «Долю улья»:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {shareFeatures.map(f => (
                <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Целый улей */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Crown className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">Целый улей</h2>
              <p className="text-sm text-muted-foreground">Полное владение · 349$ за сезон</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Закрепите за собой целый улей. Вы — единственный владелец. Весь мёд, который произведёт этот улей, — ваш.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {fullOffers.map(offer => (
              <OfferCardComponent
                key={offer.id}
                offer={offer}
                price={349}
                tierLabel="Целый улей"
                tierIcon={Crown}
                accentClass="bg-emerald-600"
              />
            ))}
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
            <h4 className="font-semibold mb-3 text-foreground">Что входит в «Целый улей»:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {fullFeatures.map(f => (
                <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
