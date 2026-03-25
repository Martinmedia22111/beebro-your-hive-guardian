import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const hiddenPaths = ['/checkout', '/login', '/register', '/dashboard'];

export default function MobileCTA() {
  const navigate = useNavigate();
  const location = useLocation();

  if (hiddenPaths.some(p => location.pathname.startsWith(p))) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
      <Button className="w-full" size="lg" onClick={() => navigate('/catalog')}>
        🐝 Взять семью под опеку
      </Button>
    </div>
  );
}
