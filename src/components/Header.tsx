import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/context/AppContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useApp();
  const navigate = useNavigate();

  const links = [
    { to: '/how-it-works', label: 'Как это работает' },
    { to: '/catalog', label: 'Выбрать семью' },
    { to: '/gift', label: 'Подарить' },
    { to: '/business', label: 'Для бизнеса' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <span className="text-2xl">🐝</span>
          <span>Bee<span className="text-primary">Bro</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
                <User className="w-4 h-4 mr-1" /> Кабинет
              </Button>
              <Button variant="ghost" size="sm" onClick={logout}>Выйти</Button>
            </>
          ) : (
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>Войти</Button>
          )}
          <Button size="sm" onClick={() => navigate('/catalog')}>
            Взять под опеку
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border pb-4">
          <nav className="container flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
                {l.label}
              </Link>
            ))}
            <hr className="border-border" />
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" onClick={() => setOpen(false)} className="text-sm font-medium py-2">Личный кабинет</Link>
                <button onClick={() => { logout(); setOpen(false); }} className="text-sm font-medium text-muted-foreground text-left py-2">Выйти</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setOpen(false)} className="text-sm font-medium py-2">Войти</Link>
            )}
            <Button onClick={() => { navigate('/catalog'); setOpen(false); }} className="w-full mt-2">
              Взять под опеку
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
