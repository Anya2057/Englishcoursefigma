import { Plane, Users, Calendar, CreditCard, Sparkles, Laptop, Globe, Check, Hotel, Coffee, Utensils, MapPin, Heart, Target, Clock } from "lucide-react";

export default function App() {
  const programItems = [
    {
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей.",
      icon: Plane,
    },
    {
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики.",
      icon: Hotel,
    },
    {
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit: "Развитие гастрономического словаря и уверенности в общении.",
      icon: Utensils,
    },
    {
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit: "Понимание устной речи и произношения в реальных ситуациях.",
      icon: MapPin,
    },
    {
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск.",
      icon: Target,
    },
    {
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык.",
      icon: Globe,
    },
    {
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или подростками за границей.",
      benefit: "Игровая практика диалогов и неформального общения.",
      icon: Heart,
    },
    {
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      benefit: "Развитие связной речи и творческого самовыражения.",
      icon: Coffee,
    },
  ];

  const features = [
    "Акцент на практическую, живую речь, а не на грамматику ради грамматики.",
    "Все ситуации — из реальной жизни путешественника.",
    "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.",
    "Ребёнок в��ходит на уровень A2–B1 (Pre-Intermediate) за курс.",
  ];

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById("enroll-section");
    enrollSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Набор открыт!</span>
          </div>
          
          <h1 className="mb-6 text-4xl md:text-6xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Курс «Английский для путешествий»
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
            в отпуске, поездках и будущих путешествиях!
          </p>

          <button 
            onClick={scrollToEnroll}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            Записаться на курс
          </button>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl text-center">Для кого курс</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-card border border-primary/30 rounded-xl p-6 hover:border-primary/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="mb-2">Первая группа</h3>
              <p className="text-muted-foreground">4–5 класс</p>
            </div>
            
            <div className="bg-card border border-secondary/30 rounded-xl p-6 hover:border-secondary/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="mb-2">Вторая группа</h3>
              <p className="text-muted-foreground">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">📚 Программа курса</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {programItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{item.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  
                  <div className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-0.5">👉</span>
                    <span>{item.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Sparkles className="w-6 h-6 text-secondary" />
            <h2 className="text-3xl md:text-4xl text-center">Почему этот курс особенный?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:border-secondary/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-foreground/90">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Laptop className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl text-center">Что потребуется</h2>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Стабильный интернет и Zoom</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-3xl">Расписание</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-card border border-primary/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3>Группа 4–5 класс</h3>
                  </div>
                  <p className="text-muted-foreground">Четверг, 15:00 (МСК)</p>
                </div>
                
                <div className="bg-card border border-primary/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3>Группа 6–8 класс</h3>
                  </div>
                  <p className="text-muted-foreground">Пятница, 15:30 (МСК)</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-secondary" />
                <h2 className="text-3xl">Стоимость</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-6">
                  <h3 className="mb-2">Полный курс</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl text-primary">12 000 ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">10 уроков</p>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="mb-2">Абонемент</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-secondary">1 300 ₽</span>
                    <span className="text-muted-foreground">/ урок</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enroll-section" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-primary/30 rounded-2xl p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary">Набор открыт!</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl mb-4">Места ограничены!</h2>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>
            
            <p className="text-xl mb-8 leading-relaxed">
              Запишитесь сейчас — и следующее путешествие станет первым, 
              где ваш ребёнок заговорит по-английски без страха!
            </p>

            <button className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-lg">
              Записаться на курс
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 Английский для путешествий. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}