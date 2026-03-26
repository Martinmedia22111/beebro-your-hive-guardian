import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, register } = useApp();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPass, setRegPass] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(loginEmail, loginPass)) {
      navigate('/dashboard');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (register(regName, regEmail, regPhone, regPass)) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="container max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold mb-2">Добро пожаловать</h1>
          <p className="text-muted-foreground">Войдите или создайте аккаунт BeeBro</p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
          <Tabs defaultValue="login">
            <TabsList className="w-full">
              <TabsTrigger value="login" className="flex-1">Войти</TabsTrigger>
              <TabsTrigger value="register" className="flex-1">Регистрация</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div><Label>Email</Label><Input value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="email@example.com" /></div>
                <div><Label>Пароль</Label><Input type="password" value={loginPass} onChange={e => setLoginPass(e.target.value)} placeholder="Пароль" /></div>
                <Button type="submit" className="w-full">Войти</Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="mt-6">
              <form onSubmit={handleRegister} className="space-y-4">
                <div><Label>Имя</Label><Input value={regName} onChange={e => setRegName(e.target.value)} required placeholder="Ваше имя" /></div>
                <div><Label>Email</Label><Input value={regEmail} onChange={e => setRegEmail(e.target.value)} required type="email" placeholder="email@example.com" /></div>
                <div><Label>Телефон</Label><Input value={regPhone} onChange={e => setRegPhone(e.target.value)} placeholder="+375 29 ..." /></div>
                <div><Label>Пароль</Label><Input value={regPass} onChange={e => setRegPass(e.target.value)} required type="password" placeholder="Придумайте пароль" /></div>
                <Button type="submit" className="w-full">Создать аккаунт</Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
