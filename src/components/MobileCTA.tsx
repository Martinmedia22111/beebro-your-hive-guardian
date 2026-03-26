import { Button } from '@/components/ui/button';
import { TELEGRAM_BOT_URL } from '@/context/AppContext';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
      <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
        <Button className="w-full" size="lg">
          🐝 Взять семью под опеку
        </Button>
      </a>
    </div>
  );
}
