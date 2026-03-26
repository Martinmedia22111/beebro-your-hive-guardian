import { Button } from '@/components/ui/button';

interface Props {
  current: 1 | 2 | 3;
  onChange: (v: 1 | 2 | 3) => void;
}

const labels: Record<number, string> = {
  1: 'Эмоция + центр',
  2: 'Выгода + лево',
  3: 'Провокация + цифры',
};

export default function HeroSwitcher({ current, onChange }: Props) {
  return (
    <div className="fixed top-20 right-4 z-50 bg-card/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-elevated hidden md:block">
      <div className="text-xs font-semibold text-muted-foreground mb-2">Hero-вариант:</div>
      <div className="flex flex-col gap-1">
        {([1, 2, 3] as const).map(v => (
          <Button
            key={v}
            size="sm"
            variant={current === v ? 'default' : 'ghost'}
            className="text-xs justify-start h-8"
            onClick={() => onChange(v)}
          >
            {v}. {labels[v]}
          </Button>
        ))}
      </div>
    </div>
  );
}
