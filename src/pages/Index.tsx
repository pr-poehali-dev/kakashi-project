import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Code',
      title: 'Разработка ПО',
      description: 'Создаем надежные и масштабируемые решения для вашего бизнеса'
    },
    {
      icon: 'Palette',
      title: 'Веб-дизайн',
      description: 'Современные интерфейсы, которые влюбляют пользователей в ваш продукт'
    },
    {
      icon: 'MessageSquare',
      title: 'Консультации',
      description: 'Экспертная помощь в выборе технологий и стратегии развития'
    },
    {
      icon: 'Headphones',
      title: 'Техподдержка',
      description: 'Круглосуточная поддержка и быстрое решение любых вопросов'
    }
  ];

  const stats = [
    { value: '150+', label: 'Проектов' },
    { value: '98%', label: 'Довольных клиентов' },
    { value: '24/7', label: 'Поддержка' },
    { value: '5 лет', label: 'На рынке' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            DevStudio
          </h1>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'services'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary font-semibold' : 'text-foreground'
                }`}
              >
                {section === 'home' ? 'Главная' : section === 'about' ? 'О нас' : 'Услуги'}
              </button>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Создаем цифровое будущее вашего бизнеса
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Современные IT-решения, которые помогают компаниям расти и развиваться в цифровой среде
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Zap', title: 'Быстро', text: 'Запускаем проекты в сжатые сроки без потери качества' },
              { icon: 'Shield', title: 'Надежно', text: 'Используем проверенные технологии и best practices' },
              { icon: 'Users', title: 'Индивидуально', text: 'Каждый проект — уникальное решение под ваши задачи' }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши услуги
          </h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Полный цикл разработки от идеи до запуска
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-background/80 mb-6">Свяжитесь с нами сегодня и получите бесплатную консультацию</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Связаться с нами
          </Button>
          <div className="mt-12 pt-8 border-t border-background/20">
            <p className="text-background/60">© 2024 DevStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
