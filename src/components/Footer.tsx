import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="font-display text-xl font-bold">
              🐝 Bee<span className="text-primary">Bro</span>
            </Link>
            <p className="text-sm opacity-70 mt-3">
              Цифровая опека над пчелиными семьями. Наблюдайте, участвуйте, получайте удовольствие.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Навигация</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/catalog" className="hover:opacity-100 transition-opacity">Выбрать семью</Link>
              <Link to="/how-it-works" className="hover:opacity-100 transition-opacity">Как это работает</Link>
              <Link to="/gift" className="hover:opacity-100 transition-opacity">Подарить</Link>
              <Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Компания</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/business" className="hover:opacity-100 transition-opacity">Для бизнеса</Link>
              <Link to="/contacts" className="hover:opacity-100 transition-opacity">Контакты</Link>
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">Конфиденциальность</Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">Оферта</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Контакты</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <span>+375 29 123-45-67</span>
              <span>hello@beebro.by</span>
              <span>Минская область, Беларусь</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} BeeBro. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
