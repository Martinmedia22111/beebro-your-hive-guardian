import { useState } from 'react';
import { families as initialFamilies } from '@/data/families';
import { BeeFamily, FamilyStatus } from '@/data/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminPage() {
  const [families, setFamilies] = useState(initialFamilies);
  const [editing, setEditing] = useState<string | null>(null);

  const updateFamily = (id: string, updates: Partial<BeeFamily>) => {
    setFamilies(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f));
    setEditing(null);
  };

  const demoOrders = [
    { id: 'order-001', family: 'Семья №08', user: 'Алексей', email: 'alexey@example.com', date: '2025-03-01', status: 'active', plan: 'Расширенная' },
    { id: 'order-002', family: 'Семья №17', user: 'Мария', email: 'maria@example.com', date: '2025-03-10', status: 'pending', plan: 'Базовая' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        <h1 className="font-display text-3xl font-bold mb-2">Админ-панель</h1>
        <p className="text-muted-foreground mb-8">Управление семьями, заказами и контентом (демо)</p>

        <Tabs defaultValue="families">
          <TabsList>
            <TabsTrigger value="families">Семьи</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="updates">Обновления</TabsTrigger>
          </TabsList>

          <TabsContent value="families" className="mt-6">
            <div className="space-y-4">
              {families.map(f => (
                <div key={f.id} className="bg-card rounded-xl border border-border p-4">
                  {editing === f.id ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label>Название</Label><Input defaultValue={f.name} id={`name-${f.id}`} /></div>
                        <div><Label>Цена (BYN)</Label><Input type="number" defaultValue={f.price} id={`price-${f.id}`} /></div>
                      </div>
                      <div><Label>Описание</Label><Input defaultValue={f.description} id={`desc-${f.id}`} /></div>
                      <div>
                        <Label>Статус</Label>
                        <Select defaultValue={f.status} onValueChange={(v) => updateFamily(f.id, { status: v as FamilyStatus })}>
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="available">Доступна</SelectItem>
                            <SelectItem value="almost_taken">Почти занята</SelectItem>
                            <SelectItem value="taken">Под опекой</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => {
                          const name = (document.getElementById(`name-${f.id}`) as HTMLInputElement)?.value;
                          const price = Number((document.getElementById(`price-${f.id}`) as HTMLInputElement)?.value);
                          const description = (document.getElementById(`desc-${f.id}`) as HTMLInputElement)?.value;
                          updateFamily(f.id, { name, price, description });
                        }}>Сохранить</Button>
                        <Button size="sm" variant="outline" onClick={() => setEditing(null)}>Отмена</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <img src={f.image} alt={f.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{f.name}</span>
                          <Badge variant={f.status === 'available' ? 'default' : 'secondary'}>{f.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{f.description}</p>
                      </div>
                      <span className="font-bold">{f.price} BYN</span>
                      <Button size="sm" variant="outline" onClick={() => setEditing(f.id)}>Редактировать</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <div className="space-y-4">
              {demoOrders.map(o => (
                <div key={o.id} className="flex items-center gap-4 bg-card rounded-xl border border-border p-4">
                  <div className="flex-1">
                    <div className="font-semibold">{o.family} → {o.user}</div>
                    <p className="text-sm text-muted-foreground">{o.email} • {o.date} • {o.plan}</p>
                  </div>
                  <Badge variant={o.status === 'active' ? 'default' : 'secondary'}>{o.status}</Badge>
                  <Button size="sm" variant="outline">Подтвердить</Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="updates" className="mt-6">
            <div className="bg-card rounded-xl border border-border p-6 max-w-md">
              <h3 className="font-display font-bold mb-4">Добавить обновление</h3>
              <div className="space-y-3">
                <div>
                  <Label>Семья</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Выберите семью" /></SelectTrigger>
                    <SelectContent>
                      {families.map(f => <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Заголовок</Label><Input placeholder="Название обновления" /></div>
                <div><Label>Описание</Label><Input placeholder="Что произошло" /></div>
                <Button>Добавить обновление</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
