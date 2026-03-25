import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import FamilyCard from '@/components/FamilyCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CatalogPage() {
  const { families } = useApp();
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get('status') || 'all';
  const [statusFilter, setStatusFilter] = useState(initialStatus);
  const [sort, setSort] = useState('available');

  const filtered = useMemo(() => {
    let result = [...families];
    if (statusFilter !== 'all') {
      result = result.filter(f => f.status === statusFilter);
    }
    if (sort === 'available') {
      const order = { available: 0, almost_taken: 1, taken: 2 };
      result.sort((a, b) => (order[a.status] || 0) - (order[b.status] || 0));
    } else if (sort === 'price_asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price_desc') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [families, statusFilter, sort]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Выберите пчелиную семью</h1>
        <p className="text-muted-foreground mb-8">Каждая семья уникальна. Найдите свою и начните наблюдение за сезоном.</p>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex gap-2">
            {[
              { value: 'all', label: 'Все' },
              { value: 'available', label: 'Доступные' },
              { value: 'almost_taken', label: 'Почти заняты' },
              { value: 'taken', label: 'Под опекой' },
            ].map(s => (
              <Button
                key={s.value}
                variant={statusFilter === s.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setStatusFilter(s.value)}
              >
                {s.label}
              </Button>
            ))}
          </div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Сначала доступные</SelectItem>
              <SelectItem value="price_asc">Цена: по возрастанию</SelectItem>
              <SelectItem value="price_desc">Цена: по убыванию</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl mb-4">🐝</p>
            <p className="text-muted-foreground">Семьи с таким фильтром не найдены</p>
            <Button variant="outline" className="mt-4" onClick={() => setStatusFilter('all')}>Показать все</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(f => <FamilyCard key={f.id} family={f} />)}
          </div>
        )}
      </div>
    </div>
  );
}
