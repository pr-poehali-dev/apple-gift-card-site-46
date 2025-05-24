import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" size={24} className="text-gray-900" />
              <span className="text-xl font-semibold text-gray-900">
                Apple Gift
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Главная
              </Link>
              <Link
                to="/products"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Каталог
              </Link>
              <Link
                to="/instructions"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Инструкции
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Apple Gift
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Подарите возможность выбора. Подарочные карты Apple Store для
            покупки любимых устройств и аксессуаров.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
              >
                Купить подарочную карту
              </Button>
            </Link>
            <Link to="/instructions">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg rounded-full border-gray-300"
              >
                Как использовать
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cards Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Выберите номинал
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { amount: 1000, popular: false },
              { amount: 2500, popular: true },
              { amount: 5000, popular: false },
            ].map((card) => (
              <Card
                key={card.amount}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${card.popular ? "ring-2 ring-blue-500" : ""}`}
              >
                {card.popular && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Популярно
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                    <Icon name="Gift" size={32} className="text-gray-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {card.amount.toLocaleString()} ₽
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Подарочная карта Apple Store
                  </p>
                  <Link to="/products">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      Выбрать
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Безопасно
              </h3>
              <p className="text-gray-600">
                Официальные подарочные карты Apple с гарантией
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-xl flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Мгновенно
              </h3>
              <p className="text-gray-600">
                Получите код карты сразу после оплаты
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-xl flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Универсально
              </h3>
              <p className="text-gray-600">
                Подходит для покупки любых товаров Apple
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Gift" size={20} className="text-gray-600" />
            <span className="text-gray-600">Apple Gift</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Apple Gift. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
