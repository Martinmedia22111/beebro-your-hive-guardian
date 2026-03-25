import { useNavigate } from 'react-router-dom';
import { BeeFamily } from '@/data/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/context/AppContext';

const statusLabels: Record<string, string> = {
  available: 'Доступна',
  almost_taken: 'Почти занята',
  taken: 'Под опекой',
};

const statusColors: Record<string, string> = {
  available: 'bg-success text-primary-foreground',
  almost_taken: 'bg-warning text-primary-foreground',
  taken: 'bg-muted text-muted-foreground',
};

export default function FamilyCard({ family }: { family: BeeFamily }) {
  const navigate = useNavigate();
  const { setCartFamily } = useApp();

  const handleAdopt = () => {
    if (family.status === 'taken') {
      navigate('/catalog?status=available');
    } else {
      setCartFamily(family);
      navigate('/checkout');
    }
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={family.image}
          alt={family.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={800}
          height={600}
        />
        <Badge className={`absolute top-3 right-3 ${statusColors[family.status]}`}>
          {statusLabels[family.status]}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold mb-1">{family.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{family.description}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-honey-gradient rounded-full" style={{ width: `${family.progress}%` }} />
          </div>
          <span className="text-xs text-muted-foreground">{family.progress}%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-foreground">
            {family.price} BYN
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate(`/family/${family.id}`)}>
              Подробнее
            </Button>
            <Button size="sm" onClick={handleAdopt}>
              {family.status === 'taken' ? 'Другую' : 'Опекать'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
