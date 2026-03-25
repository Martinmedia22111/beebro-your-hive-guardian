import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="text-center container">
        <div className="text-8xl mb-6">🐝</div>
        <h1 className="font-display text-4xl font-bold mb-4">Похоже, эта пчела улетела не туда</h1>
        <p className="text-muted-foreground text-lg mb-8">Страница не найдена, но у нас есть кое-что интересное для вас</p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/')}>На главную</Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/catalog')}>Выбрать семью</Button>
        </div>
      </div>
    </div>
  );
}
